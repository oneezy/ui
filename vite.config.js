/// <reference types="histoire" />

import { defineConfig as defineViteConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig as defineHistoireConfig, defaultColors } from 'histoire';
import { HstSvelte } from '@histoire/plugin-svelte';

/** @type {import('vite').UserConfig} */
const config = defineViteConfig({
  // ssr: {
  //   noExternal: Object.keys.apply(pkg.dependencies || {})
  // },

  build: {
    minify: true
  },

	plugins: [
		sveltekit(),
	],

  histoire: defineHistoireConfig({
    plugins: [HstSvelte()],
		// viteIgnorePlugins: ['vite-plugin-sveltekit-compile'],
    setupFile: './histoire.setup.js',
    tree: {
      groups: [
        { id: 'top',        title: '' },
        { id: 'components', title: 'Components' },
        { id: 'examples',   title: 'Story Examples' },
      ],
    },
    theme: {
      title: 'Oneezy, Inc.',
      logoHref: '/',
      colors: {
        gray: defaultColors.gray,
        primary: defaultColors.blue,
      },
      logo: {
        square: './static/logo.svg',
        light: './static/logo.svg',
        dark: './static/logo.svg'
      },

      favicon: './static/favicon.ico',
    }
  }),

  server: {
    host: '0.0.0.0',
    open: '/story/src-stories-introduction-story-js'
  }
});

export default config;