<script>
	let {
		icon = null,
		type = 'button',
		href = null,
		disabled = false,
		primary = false,
		secondary = false,
		tonal = false,
		outline = false,
		ghost = false,
		left = false,
		right = false,
		children,
		...props
	} = $props();

	let baseClass = 'btn';
	let classNames = [baseClass];

	if (primary && outline) {
		classNames.push('preset-outline-primary');
	} else if (secondary && outline) {
		classNames.push('preset-outline-secondary');
	} else if (outline) {
		classNames.push('preset-outline');
	} else if (primary && tonal) {
		classNames.push('preset-tonal-primary');
	} else if (secondary && tonal) {
		classNames.push('preset-tonal-secondary');
	} else if (tonal) {
		classNames.push('preset-tonal');
	} else if (primary && ghost) {
		classNames.push('preset-ghost-primary');
	} else if (secondary && ghost) {
		classNames.push('preset-ghost-secondary');
	} else if (ghost) {
		classNames.push('preset-ghost');
	} else if (primary) {
		classNames.push('preset-filled-primary');
	} else if (secondary) {
		classNames.push('preset-filled-secondary');
	} else {
		classNames.push('preset-filled');
	}

	if (disabled) {
		classNames.push('opacity-50', 'cursor-not-allowed', 'pointer-events-none');
	}

	let iconPositionClass = '';

	if (icon) {
		iconPositionClass = left ? 'flex-row-reverse' : 'flex-row';
	}

	const finalClass = `${classNames.join(' ')} ${iconPositionClass}`;
</script>

{#if href}
	<a {...props} {href} class="@container {finalClass} {props.class}" aria-disabled={disabled}>
		{@render children()}
	</a>
{:else}
	<button {...props} {type} class="@container {finalClass} {props.class}" {disabled}>
		{@render children()}
	</button>
{/if}

<style>
	/* 	
	:global(.btn:has(svg)) {
		background: lime;
	}
	:global(.btn:has(*)) {
		background: lightblue;
	}
	:global(.btn:has(svg + *)) {
		background: red;
	}
	:global(.btn:has(* + svg)) {
		background: yellow;
	}
	:global(.btn:has(svg + * + svg)) {
		background: blue;
	}
	:global(.btn:has(* + svg + *)) {
		background: hotpink;
	} */
</style>
