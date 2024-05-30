import tailwindcss from '@tailwindcss/vite';
// import lightningcss from 'vite-plugin-lightningcss';
import { sveltekit } from '@sveltejs/kit/vite';
import { svelteInspector } from '@sveltejs/vite-plugin-svelte-inspector';
import { defineConfig } from 'vite';
import Icons from 'unplugin-icons/vite';

export default defineConfig({
	plugins: [
		tailwindcss(),
		// lightningcss(),
		sveltekit(),
		svelteInspector(),
		Icons({
			compiler: 'svelte',
			autoInstall: true
		})
	],

	server: {
		open: '/'
	}
});
