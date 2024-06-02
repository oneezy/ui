<script>
	let {
		glass,
		gradient,
		linear = '135deg',
		radial = false,
		repeating = false,
		conic = false,
		...props
	} = $props();

	let gradientStyle = $state('');

	if (gradient) {
		if (conic) {
			gradientStyle = `conic-gradient(${repeating ? 'repeating-' : ''}${gradient})`;
		} else if (radial) {
			gradientStyle = `radial-gradient(${repeating ? 'repeating-' : ''}${gradient})`;
		} else {
			gradientStyle = `linear-gradient(${linear}, ${repeating ? 'repeating-' : ''}${gradient})`;
		}
	} else {
		gradientStyle = 'linear-gradient(135deg, var(--to), var(--via), var(--from))';
	}
</script>

<div
	class="effect absolute inset-0 z-10 {props.class}"
	style="background-image: {gradientStyle};"
></div>

<style>
	.effect {
		--to: var(--color-theme-primary, rgba(255, 0, 0, 0.5));
		--via: trnsparent;
		--from: var(--color-theme-secondary, rgba(0, 0, 255, 0.5));
	}
</style>
