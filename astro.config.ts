import { defineConfig } from 'astro/config';
import unoCSS from 'unocss/astro';
export default defineConfig({
  // compressHTML: true,
  // experimental: {
  // assets: true,
  // inlineStylesheets: 'never'
  // },
  integrations: [
    unoCSS({
      injectReset: true,
    }),
  ],
  // site: 'https://www.example.com/',
});
