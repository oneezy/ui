<script>
	let {
		left = '⬜ header left',
		center = '⬜ header center',
		right = '⬜ header right',
		children = null,
		...props
	} = $props();
</script>

<div {...props} class="header bg-primary {props.class}">
	<div
		class="container
		{children
			? ''
			: 'grid grid-cols-[auto_1fr_auto] justify-center gap-4 md:grid-cols-[200px_1fr_200px]'}"
	>
		{#if children}
			{@render children()}
		{:else}
			<section class="self-center justify-self-start">
				{#if typeof left === 'function'}{@render left()}{:else}{left}{/if}
			</section>
			<section class="hidden h-full items-center justify-center md:flex">
				{#if typeof center === 'function'}{@render center()}{:else}{center}{/if}
			</section>
			<section class="self-center justify-self-end">
				{#if typeof right === 'function'}{@render right()}{:else}{right}{/if}
			</section>
		{/if}
	</div>
</div>
