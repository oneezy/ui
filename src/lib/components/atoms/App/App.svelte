<script>
	let { children = null, ...props } = $props();
</script>

<main {...props} class="min-h-svh w-full relative {props.class}">
	{#snippet content()}
		App Template
	{/snippet}

	{#if children}
		{@render children()}
	{:else}
		{@render content()}
	{/if}
</main>
