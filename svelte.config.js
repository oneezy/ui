import { resolve } from 'path';
import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// preprocess: vitePreprocess(),
	preprocess: preprocess({
    postcss: true,
	}),

	kit: {
		adapter: adapter(),
	},
  
  package: {
    // dir: "./packages/ui",
    files: (filepath) => !filepath.includes("story"),
  }
};

export default config;
