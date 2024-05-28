<script>
	import {Link} from '$lib';

	let {
		links = [
			{label: 'home', href: '/'},
			{label: 'about', href: '/about'},
			{label: 'contact', href: '/contact'},
			{label: 'docs', href: '/docs'}
		],
		children,
		...props
	} = $props();
</script>

<nav {...props} class="navigation flex items-start {props.class}">
	{#each links as link}
		<Link
			href={link.href}
			label={link.label}
			class="border-gray-200 divide-4 text-black aria-[current=true]:bg-primary p-2 rounded hover:bg-primary/5 w-full aria-[current=true]:text-white capitalize"
		/>
	{/each}
</nav>
