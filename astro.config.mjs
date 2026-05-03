import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://just-lisbon.com',
  integrations: [
    react(),
    sitemap({
      filter: (page) => !page.endsWith('/success/')
    })
  ],
  srcDir: 'src',
  output: 'static'
});
