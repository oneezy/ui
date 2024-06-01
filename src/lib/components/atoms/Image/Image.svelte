<script>
	import { Effect } from '$lib';
	let {
		src,
		placeholder,
		alt = '',
		cover = false,
		contain = false,
		fill = true,
		ratio,
		full = false,
		gradient = false,
		bg = false,
		children = null,
		...props
	} = $props();
	let loaded = $state(false);
	let error = $state(false);

	const loRes = 'https://picsum.photos/id/420/240/360';
	const hiRes = 'https://picsum.photos/id/420/1920/1080';

	function onLoad() {
		console.log('High-res image loaded');
		loaded = true;
	}

	function onError(event) {
		console.log('Error loading image:', event.target.src);
		if (event.target.src === loRes) {
			console.log('Switching to hiRes');
			event.target.src = hiRes;
		} else {
			console.log('Switching to loRes');
			event.target.src = loRes;
			event.target.alt = 'Fallback image';
			error = true;
		}
	}

	function getValidSrc(imageSrc) {
		console.log('Validating src:', imageSrc);
		return imageSrc ? imageSrc : loRes;
	}

	function getObjectFitClass() {
		if (cover) return 'object-cover';
		if (contain) return 'object-contain';
		if (fill) return 'object-fill';
		return 'object-cover'; // default to cover if none are specified
	}

	let imgClass =
		'absolute inset-0 w-full h-full transition-opacity duration-500 ease-in-out ' +
		getObjectFitClass();
</script>

<div
	{...props}
	class="image {bg ? 'absolute inset-0 -z-1' : 'relative'} overflow-hidden {full
		? 'mx-[calc(-50vw+50%)]'
		: ''} {gradient ? 'gradient' : ''} {props.class}"
	style="aspect-ratio: {ratio}"
>
	<img src={getValidSrc(placeholder)} {alt} class="blur-2xl {imgClass}" onerror={onError} />
	<img
		src={getValidSrc(src)}
		{alt}
		class={loaded && !error ? imgClass + ' opacity-100' : imgClass + ' opacity-0'}
		onload={onLoad}
		onerror={onError}
		style="transition-delay: 1s;"
	/>
	{#if children}
		{@render children()}
	{/if}
</div>

<style>
	img {
		border-image: fill 0 linear-gradient(#0003, #000); /* your gradient here */
	}
</style>
