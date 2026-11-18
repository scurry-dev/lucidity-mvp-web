// Prerender the privacy policy into the HTML Pages actually serves.
//
// The site is a client-rendered SPA, so /privacy-policy/ ships a 2.7 KB shell
// with no policy text in it. A browser fills it in; an automated checker that
// does not run JavaScript sees an empty page — which is how OpenAI's plugin
// review read it as an inaccessible privacy policy.
//
// React's createRoot().render() replaces whatever is inside #root, so markup
// placed there is a genuine fallback: crawlers and no-JS readers get the real
// policy, and a browser swaps in the interactive page on mount. Nothing is
// hidden and nothing is duplicated.
//
// Rendering goes through Vite's own SSR module loader, so the source of truth
// stays PrivacyPolicy.tsx. There is no second copy of the policy text to drift.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createServer } from 'vite';
import { renderToStaticMarkup } from 'react-dom/server';
import React from 'react';

const root = path.dirname(fileURLToPath(import.meta.url)) + '/..';

// Keep in step with STATIC_ROUTES in vite.config.ts. Only routes whose content
// an unauthenticated reader is expected to read belong here.
const PRERENDER = [{ component: 'src/pages/PrivacyPolicy.tsx', out: 'dist/privacy-policy/index.html' }];

const vite = await createServer({
  root,
  server: { middlewareMode: true },
  appType: 'custom',
  logLevel: 'warn',
});

try {
  for (const route of PRERENDER) {
    const outPath = path.join(root, route.out);
    if (!fs.existsSync(outPath)) {
      throw new Error(`${route.out} is missing — run vite build before prerendering.`);
    }

    const mod = await vite.ssrLoadModule('/' + route.component);
    const html = renderToStaticMarkup(React.createElement(mod.default));

    const shell = fs.readFileSync(outPath, 'utf8');
    const filled = shell.replace('<div id="root"></div>', `<div id="root">${html}</div>`);
    if (filled === shell) {
      throw new Error(`Could not find an empty #root in ${route.out} to fill.`);
    }

    fs.writeFileSync(outPath, filled);
    console.log(`prerendered ${route.component} -> ${route.out} (${(filled.length / 1024).toFixed(1)} KB)`);
  }
} finally {
  await vite.close();
}
