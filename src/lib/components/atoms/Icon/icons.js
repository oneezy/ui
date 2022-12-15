import { derived } from 'svelte/store';
import { describe } from '../../../stores/describe';
import { exchangeIcons } from './icons/exchanges.js';
import { coinIcons } from './icons/coins.js';
import { socialIcons } from './icons/socials.js';
import { normalIcons } from './icons/icons.js';

export const icons = derived([normalIcons, socialIcons, exchangeIcons, coinIcons], ([$normalIcons, $socialIcons, $exchangeIcons, $coinIcons]) => {
	return {
		...$normalIcons,
		...$socialIcons,
		...$exchangeIcons,
		...$coinIcons
	};
});

/* All Icon derived stores for describe
***********************************************************************/
// Normal
export const normal = derived([describe], ([$describe]) => { 
	let normal = [];
	
	if ($describe.hasOwnProperty("normal")) {
		normal = $describe.normal
	}
	
	return normal;
});

// Socials
export const socials = derived([describe], ([$describe]) => { 
	let socials = [];
	
	if ($describe.hasOwnProperty("socials")) {
		socials = $describe.socials
	}
	
	return socials;
});


// Exchanges
export const exchanges = derived([describe], ([$describe]) => { 
	let exchanges = [];
	
	if ($describe.hasOwnProperty("exchanges")) {
		exchanges = $describe.exchanges
	}
	
	return exchanges;
});


// Coins
export const coins = derived([describe], ([$describe]) => {
	let coins = [];
  
	if ($describe.hasOwnProperty("coins")) {
  	coins = $describe.coins.filter(coin => coin.name === 'BTC' || coin.name === 'ETH' || coin.name === 'LTC');
	}
	
	// if ($describe.hasOwnProperty("coins")) {
	// 	coins = $describe.coins
	// }
	
	return coins;
});