<script>
	import { page } from '$app/stores';
	let { slug, href, label, active, state, children, ...props } = $props();
</script>

<a
	{href}
	{...props}
	class={props.class}
	aria-current={$page.url.pathname == href ? true : undefined}
>
	{#if label}
		{label}
	{:else}
		{@render children()}
	{/if}
</a>
