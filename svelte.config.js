import { resolve } from 'path';
import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// preprocess: vitePreprocess(),
	preprocess: preprocess({
    postcss: true,
	}),

	kit: {
		adapter: adapter(),
    alias: {
      $ui: resolve('./src/lib')
    }
	},
  
  package: {
    // dir: "./packages/ui",
    files: (filepath) => !filepath.includes("story"),
  }
};

export default config;
