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

<nav {...props} class="navigation flex gap-4 items-start {props.class}">
	{#each links as link}
		<Link
			href={link.href}
			label={link.label}
			class="text-black aria-[current=true]:bg-blue-500 aria-[current=true]:text-white capitalize"
		/>
	{/each}
</nav>
