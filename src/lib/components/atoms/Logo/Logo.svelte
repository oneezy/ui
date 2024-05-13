<script>
	import { Link, Title } from '$lib';
	import { render } from 'svelte/server';
	let {
		href = '/',
		text = '',
		alt = '',
		src = null,
		svg = null,
		width = '100',
		height = '100',
		children,
		...props
	} = $props();
</script>

<Link href="/">
	{#snippet content()}
		<Title>LOGO</Title>
	{/snippet}

	{#if children}
		{@render children()}
	{:else}
		{@render content()}
	{/if}
</Link>
