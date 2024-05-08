<script>
	import { page } from '$app/stores';
	let { links = [], ...props } = $props();

	links = [
		{ label: 'home', href: '/' },
		{ label: 'about', href: '/about' },
		{ label: 'contact', href: '/contact' }
	];
</script>

<nav class="flex flex-col items-center justify-center md:flex-row gap-6 capitalize {props.class}">
	{#each links as link}
		<a
			class="bg-gray-200 text-black aria-[current=true]:bg-blue-500 aria-[current=true]:text-white"
			href={link.href}
			aria-current={$page.url.pathname == link.href ? 'true' : 'false'}
		>
			{link.label}
		</a>
	{/each}
</nav>

<!-- <script>
	import { page } from '$app/stores';
	import { Link } from '$lib';
	let { links = [], ...props } = $props();

	links = [
		{ label: 'Home', slug: '/' },
		{ label: 'Aboutt', slug: '/about' },
		{ label: 'Contact', slug: '/contact' }
	];
</script>

<nav class="flex flex-col items-center justify-center md:flex-row gap-6 capitalize {props.class}">
	{#each links as link}
		<Link
			class="bg-gray-200 text-black aria-[current=true]:bg-blue-500 aria-[current=true]:text-white"
			href={link.slug}
		>
			{link.label}
		</Link>
	{/each}
</nav> -->

<style>
	nav a[aria-current='true'] {
		border-bottom: 2px solid;
	}
</style>
