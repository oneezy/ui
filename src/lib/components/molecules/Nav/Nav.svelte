<script>
	import { Link } from '$lib';

	let {
		links = [
			{ label: 'home', href: '/' },
			{ label: 'about', href: '/about' },
			{ label: 'contact', href: '/contact' },
			{ label: 'docs', href: '/docs' }
		],
		row = true,
		col = true,
		center = true,
		children,
		...props
	} = $props();
</script>

<nav {...props} class="navigation flex gap-4 {props.class}">
	{#each links as link}
		<Link
			href={link.href}
			label={link.label}
			class="bg-gray-200 text-black aria-[current=true]:bg-blue-500 aria-[current=true]:text-white capitalize"
		/>
	{/each}
</nav>
