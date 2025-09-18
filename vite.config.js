import { defineConfig } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';

export default defineConfig({
  plugins: [
    createHtmlPlugin({
      minify: true,
    }),
  ],
  server: {
    host: true,
    allowedHosts: ['5173-ily7p9mdvsxceyvsfjh8i-42b4f0a9.manusvm.computer'],
  },
});
