const isCodeSandbox =
  'SANDBOX_URL' in process.env || 'CODESANDBOX_HOST' in process.env;
import sass from 'sass';
import autoprefixer from 'autoprefixer';
import { createHtmlPlugin } from 'vite-plugin-html';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default {
  root: 'src/',
  base: './',
  server: {
    host: true,
    open: !isCodeSandbox,
  },
  css: {
    preprocessorOptions: {
      scss: {
        implementation: sass,
        includePaths: ['./styles/main.scss'],
      },
    },
    postcss: {
      plugins: [autoprefixer()],
    },
  },
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
  plugins: [
    createHtmlPlugin({
      minify: true,
    }),
    viteStaticCopy({
      targets: [
        {
          src: 'img/favicon-192.png',
          dest: 'img',
        },
        {
          src: 'img/favicon-512.png',
          dest: 'img',
        },
      ],
    }),
  ],
};
