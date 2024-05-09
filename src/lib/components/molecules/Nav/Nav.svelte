<script>
	import { Link } from '$lib';

	let {
		links = [
			{ label: 'home', href: '/' },
			{ label: 'about', href: '/about' },
			{ label: 'contact', href: '/contact' }
		],
		children,
		...props
	} = $props();
</script>

<nav {...props} class="flex flex-col items-center justify-center md:flex-row gap-6 {props.class}">
	{#each links as link}
		<Link
			href={link.href}
			label={link.label}
			class="bg-gray-200 text-black aria-[current=true]:bg-blue-500 aria-[current=true]:text-white"
		/>
	{/each}
</nav>
