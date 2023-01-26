import { derived } from 'svelte/store';
import { socialIcons } from './icons/socials.js';
import { normalIcons } from './icons/icons.js';

export const icons = derived([normalIcons, socialIcons], ([$normalIcons, $socialIcons ]) => {
	return {
		...$normalIcons,
		...$socialIcons
	};
});