<script>
	let { children = null, ...props } = $props();

	/* Private Variables
	 *************************/
	let _class = `
    text--primary
    backdrop-blur-xl
    bg-lite/75
    border-2 
    border-lite-2 
    dark:border-transparent 
    dark:bg-lite-7/30 
    p-6 
    rounded-lg`;
</script>

<div {...props} class="{_class} {props.class}">
	{#snippet content()}
		Card
	{/snippet}

	{#if children}
		{@render children()}
	{:else}
		{@render content()}
	{/if}
</div>
