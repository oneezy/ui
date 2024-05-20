<script>
	import {Link, Title} from '$lib';
	let {
		name = 'LOGO',
		href = '/',
		alt = null,
		src = null,
		svg = null,
		children,
		...props
	} = $props();
</script>

<Link {...props} {href} class={props.class}>
	{#if children}
		{@render children()}
	{:else if src}
		<img {src} alt={name} />
	{:else}
		<h2 class="text-4xl font-bold">{name}</h2>
	{/if}
</Link>
