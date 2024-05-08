<script>
	import { page } from '$app/stores';
	let { href = '#', active, state, children, ...props } = $props();

	let isActive = $derived($page.url.pathname === href);
	// aria-current=       {$page.url.pathname == link.slug ? true : false}
</script>

<a {href} {...props} class={props.class} aria-current={isActive ? true : undefined}>
	{#snippet content()}
		link
	{/snippet}
	{#if children}
		{@render children()}
	{:else}
		{@render content()}
	{/if}
</a>
