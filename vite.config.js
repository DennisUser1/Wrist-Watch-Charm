import { defineConfig } from 'vite';
import glob from 'glob';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';

export default defineConfig({
  base: '/project-WristWatch/',
  root: 'src',
  build: {
    sourcemap: true,
    rollupOptions: {
      input: glob.sync('./src/*.html'),
    },
    outDir: '../dist',
    assetsInlineLimit: 0,
  },
  plugins: [injectHTML(), FullReload(['./src/**/**.html'])],
});