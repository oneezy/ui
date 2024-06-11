<script>
	import { Image } from '$lib';
	let {
		src = 'https://tympanus.net/codrops-playground/assets/images/cssref/properties/mask-position/field.jpg',
		mask = 'https://tympanus.net/codrops-playground/assets/images/cssref/properties/mask-position/mask-image.png',
		alt = 'Mask Image',
		position = 'center',
		size = '100% 100%',
		full = false,
		repeat = false,
		invert = false,
		children = null,
		unstyled = false,
		ratio,
		bg,
		img,
		...props
	} = $props();
</script>

{#if bg}
	<div
		{...props}
		class="{bg} {props.class}"
		style="
			width: {full ? '100%' : ''};
			max-width: 100%;
			mask-image: url({mask});
			mask-position: {position};
			mask-repeat: {repeat ? 'repat' : 'no-repeat'};"
	>
		{@render children()}
	</div>
{:else}
	<img
		{...props}
		{src}
		{alt}
		class={props.class}
		style="
			width: {full ? '100%' : ''};
			max-width: 100%;
			object-fit: cover;
			mask-image: url({mask});
			mask-position: {position};
			mask-repeat: {repeat ? 'repat' : 'no-repeat'};
			mask-size: {size};
			aspect-ratio:{ratio};"
	/>
{/if}
