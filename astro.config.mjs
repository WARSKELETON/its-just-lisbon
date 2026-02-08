import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.just-lisbon.com',
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false
    }),
    sitemap({
      filter: (page) => !page.endsWith('/success/')
    })
  ],
  srcDir: 'src',
  output: 'static'
});
