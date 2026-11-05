// Points the site's own root-relative links at a sub-folder after `astro build`.
// Used only for GitHub Pages (https://<user>.github.io/project1/): Astro's `base`
// already moves its own files (/_astro/...), but links written by hand in the pages
// and data ("/about", "/contact#enquire", "/videos/...") still point at the root.
//
// usage: node scripts/prefix-base.mjs dist /project1
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const [dir = 'dist', baseArg = '/project1'] = process.argv.slice(2);
const base = '/' + baseArg.replace(/^\/+|\/+$/g, ''); // "/project1"

// a root-relative path that is not protocol-relative and not already under the base
const fix = (path) => (path.startsWith('/') && !path.startsWith('//') && path !== base && !path.startsWith(base + '/') ? base + path : path);

const rewrite = (html) =>
  html
    // href, src, poster, action and data-* attributes (videos keep their sources in data-desktop / data-mobile)
    .replace(/(\s(?:href|src|poster|action|data-[\w-]+)=")(\/[^"]*)"/g, (_, attr, path) => `${attr}${fix(path)}"`)
    // srcset: a comma-separated list of "path width"
    .replace(/(\ssrcset=")([^"]*)"/g, (_, attr, list) => `${attr}${list.split(',').map((part) => part.replace(/^(\s*)(\S+)/, (m, sp, p) => sp + fix(p))).join(',')}"`)
    // redirect pages: <meta http-equiv="refresh" content="0;url=/experiences">
    .replace(/(content="\d+;\s*url=)(\/[^"]*)"/g, (_, pre, path) => `${pre}${fix(path)}"`);

async function* htmlFiles(d) {
  for (const entry of await readdir(d, { withFileTypes: true })) {
    const full = join(d, entry.name);
    if (entry.isDirectory()) yield* htmlFiles(full);
    else if (entry.name.endsWith('.html')) yield full;
  }
}

let changed = 0;
for await (const file of htmlFiles(dir)) {
  const before = await readFile(file, 'utf8');
  const after = rewrite(before);
  if (after !== before) { await writeFile(file, after); changed++; }
}
console.log(`prefix-base: pointed links at ${base} in ${changed} HTML files`);
