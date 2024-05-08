<script>
	import { page } from '$app/stores';
	let { links = [], ...props } = $props();

	links = [
		{ label: 'Home', slug: '/' },
		{ label: 'About', slug: '/about' },
		{ label: 'Contact', slug: '/contact' }
	];
</script>

<nav class="flex flex-col items-center justify-center md:flex-row gap-6 capitalize {props.class}">
	{#each links as link}
		<a
			class="bg-gray-200 text-black aria-[current=true]:bg-blue-500 aria-[current=true]:text-white"
			href={link.slug}
			aria-current={$page.url.pathname == link.slug ? true : false}
		>
			{link.label}
		</a>
	{/each}
</nav>
