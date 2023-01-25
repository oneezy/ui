import { resolve } from 'path';
import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {

	kit: {
		adapter: adapter(),
    alias: {
      $ui: resolve('./src/lib')
    }
	},

  preprocess: vitePreprocess(),

  package: {
    emitTypes: {
        exclude: ['*.cjs','*.cts']
    },
    files: (filepath) => !filepath.includes("story")
  }
};

export default config;
