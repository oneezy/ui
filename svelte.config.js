import { resolve } from 'path';
import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors

	// preprocess: vitePreprocess(),

	preprocess: preprocess({
    postcss: true,
		// postcss: {
    //   postcss: true,
		// 	prependData: '@import "src/lib/global.postcss";'
		// }
	}),

	kit: {
		adapter: adapter(),
    // alias: {
    //   $lib: resolve('./src/lib')
    // }
	},
  
  package: {
    dir: "./packages/ui",
    files: (filepath) => !filepath.includes("story"),
    // files: (filepath) => !filepath.match(/story|images/)
  }
};

export default config;
