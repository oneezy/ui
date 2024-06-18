<script>
	import { Link } from '$lib';

	let {
		links = [
			{ label: 'home', href: '/' },
			{ label: 'about', href: '/about' },
			{ label: 'contact', href: '/contact' },
			{ label: 'docs', href: '/docs' }
		],
		classLink = null,
		classLinkActive = null,
		children,
		...props
	} = $props();
</script>

<nav {...props} class="navigation flex h-full items-start {props.class}">
	{#each links as link}
		<Link nav {...props} class="flex h-full items-center font-medium" href={link.href} label={link.label} />
	{/each}
</nav>
