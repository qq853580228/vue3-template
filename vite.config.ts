import url from '@rollup/plugin-url';
import { UserConfig } from 'vite';

const BASE = './';
const OUTDIR = 'dist';
const ASSET = 'assets';

const config: UserConfig = {
  base: BASE,
  outDir: OUTDIR,
  assetsDir: ASSET,
  proxy: {
    // '/api': {
    //   target: 'http://jsonplaceholder.typicode.com',
    //   changeOrigin: true,
    //   rewrite: (path: string) => path.replace('/api', ''),
    // },
  },
  alias: {
    '/@/': '/src/',
  },
  sourcemap: true,
  esbuildTarget: 'es2019',
  minify: false,
  rollupInputOptions: {
    plugins: [
      url({
        destDir: `${OUTDIR}/${ASSET}`,
        limit: 20 * 1024,
      }),
    ],
  },
};

module.exports = config;
