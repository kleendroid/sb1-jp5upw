import { defineConfig } from 'vite';
import { resolve } from 'path';
import { writeFileSync, copyFileSync } from 'fs';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        content: resolve(__dirname, 'src/content.js')
      },
      output: {
        entryFileNames: '[name].js',
        dir: 'dist'
      }
    },
    outDir: 'dist',
    emptyOutDir: true
  },
  plugins: [{
    name: 'copy-manifest',
    closeBundle() {
      // Copy manifest.json to dist folder
      copyFileSync('manifest.json', 'dist/manifest.json');
    }
  }]
});