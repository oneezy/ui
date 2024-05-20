<script>
	let {
		left = '⬜ default left',
		center = '⬜ default center',
		right = '⬜ default right',
		children = null,
		...props
	} = $props();
</script>

<header {...props} class="header {props.class}">
	<div
		class="container
		{children ? '' : 'grid grid-cols-[200px,1fr,200px] justify-center gap-4'}"
	>
		{#if children}
			{@render children()}
		{:else}
			<section class="left self-center justify-self-start">
				{#if typeof left === 'function'}{@render left()}{:else}{left}{/if}
			</section>
			<section class="center flex items-center justify-center h-full">
				{#if typeof center === 'function'}{@render center()}{:else}{center}{/if}
			</section>
			<section class="right self-center justify-self-end">
				{#if typeof right === 'function'}{@render right()}{:else}{right}{/if}
			</section>
		{/if}
	</div>
</header>