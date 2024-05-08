<script>
	let { children = null, ...props } = $props();
</script>

<div {...props} class="container mx-auto px-4 md:px-5 max-w-screen-xl {props.class}">
	{#snippet content()}
		Container
	{/snippet}

	{#if children}
		{@render children()}
	{:else}
		{@render content()}
	{/if}
</div>
