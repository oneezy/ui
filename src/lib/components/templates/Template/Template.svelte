<script>
	let {template = '⬜ default template', children = null, ...props} = $props();
</script>

<div {...props} class="bg-black text-white {props.class}">
	{#if children}
		{@render children()}
	{:else if typeof template === 'function'}
		{@render template()}
	{:else}
		{template}
	{/if}
</div>
