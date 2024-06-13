<script>
	import { Link } from '$lib';

	let {
		links = [
			{ label: 'home', href: '/' },
			{ label: 'about', href: '/about' },
			{ label: 'contact', href: '/contact' },
			{ label: 'docs', href: '/docs' },
		],
		classLink = null,
		classLinkActive = null,
		children,
		...props
	} = $props();

	let _classLink =
		'p-2 px-4 rounded-base hover:bg-primary/10 hover:text-primary-700-200 w-full capitalize';
	let _classLinkActive =
		'aria-[current=true]:bg-primary aria-[current=true]:text-primary-50-50';
</script>

<nav {...props} class="navigation flex items-start {props.class}">
	{#each links as link}
		<Link
			{...props}
			href={link.href}
			label={link.label}
			class="{_classLink} {_classLinkActive} {classLink} {classLinkActive}"
		/>
	{/each}
</nav>
