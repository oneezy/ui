<script>
	let {
		left = '⬜ footer left',
		center = '⬜ footer center',
		right = '⬜ footer right',
		children = null,
		...props
	} = $props();
</script>

<div {...props} class="footer bg-blue-300 {props.class}">
	<div
		class="container
		{children
			? ''
			: 'grid grid-cols-[auto,1fr,auto] md:grid-cols-[200px,1fr,200px] justify-center gap-4'}"
	>
		{#if children}
			{@render children()}
		{:else}
			<section class="self-center justify-self-start">
				{#if typeof left === 'function'}{@render left()}{:else}{left}{/if}
			</section>
			<section class="hidden md:flex items-center justify-center h-full">
				{#if typeof center === 'function'}{@render center()}{:else}{center}{/if}
			</section>
			<section class="self-center justify-self-end">
				{#if typeof right === 'function'}{@render right()}{:else}{right}{/if}
			</section>
		{/if}
	</div>
</div>
