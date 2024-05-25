<script>
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
		...props
	} = $props();
</script>

<img
	{...props}
	{src}
	{alt}
	style="
	width: {full ? '100%' : ''};
	max-width: 100%;
	mask-image: url({mask});
	mask-position: {position};
	mask-repeat: {repeat ? 'repat' : 'no-repeat'};
	mask-size: {size};"
/>
