/// <reference types="histoire" />

import { defineConfig as defineViteConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig as defineHistoireConfig, defaultColors } from 'histoire';
import { HstSvelte } from '@histoire/plugin-svelte';

/** @type {import('vite').UserConfig} */
const config = defineViteConfig(async () => ({
  // ssr: {
  //   noExternal: Object.keys.apply(pkg.dependencies || {})
  // },

  build: {
    minify: true
  },

	plugins: [
		await sveltekit(),
	],

  histoire: defineHistoireConfig({
    plugins: [HstSvelte()],
		viteIgnorePlugins: ['vite-plugin-sveltekit-compile'],
    setupFile: '/histoire.setup.js',
    tree: {
      groups: [
        { id: 'top',        title: '' },
        { id: 'components', title: 'Components' },
        { id: 'examples',   title: 'Story Examples' },
      ],
    },
    theme: {
      title: 'Oneezy, Inc.',
      logo: {
        square: '/assets/logo.svg',
        light: '/assets/logo.svg',
        dark: '/assets/logo.svg'
      },
      logoHref: '/',
      favicon: '/assets/favicon.png',

      colors: {
        gray: defaultColors.gray,
        primary: defaultColors.blue,
      }
    }
  }),

  server: {
    host: '0.0.0.0',
    open: '/story/src-stories-introduction-story-js'
  }
}));

export default config;
