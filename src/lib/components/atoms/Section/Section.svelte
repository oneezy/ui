<script>
	/* Props
	 *************************/
	let { children = null, id = null, ...props } = $props();
</script>

<section {...props} {id} class={props.class}>
	{#snippet content()}
		Section
	{/snippet}

	{#if children}
		{@render children()}
	{:else}
		{@render content()}
	{/if}
</section>
