<script>
	import { Box } from '$lib';
	let { children = null, ...props } = $props();
</script>

<Box {...props} class="w-full">
	{#if children}
		{@render children()}
	{:else}
		Block
	{/if}
</Box>
