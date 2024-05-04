<script>
	let { children, ...props } = $props();
	let defaultClass = `container mx-auto px-4 md:px-5 max-w-screen-xl`;
</script>

<div {...props} class={(defaultClass, props.class)}>
	{#snippet content()}
		Container
	{/snippet}

	{#if children}
		{@render children()}
	{:else}
		{@render content()}
	{/if}
</div>
