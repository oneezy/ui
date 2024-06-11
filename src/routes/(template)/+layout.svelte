<script>
	import {
		Template,
		Divider,
		Header,
		Logo,
		Nav,
		ThemeDark,
		Footer,
		Copyright
	} from '$lib';

	let { data, children, ...props } = $props();

	let links = [
		{ label: 'home', href: '#home' },
		{ label: 'about', href: '#about' },
		{ label: 'services', href: '#services' },
		{ label: 'contact', href: '#contact' },
		{ label: 'FAQ', href: '#faq' }
	];
</script>

<svelte:head>
	{#each data.metaData as { seoTitle, seoDescription, seoKeywords }}
		<title>{seoTitle}</title>
		<meta name="description" content={seoDescription} />
		<meta name="keywords" content={seoKeywords} />
	{/each}
</svelte:head>

<Template>
	{#snippet header()}
		<Header class="p-0" containerClass="relative">
			{#snippet left()}
				<Logo src="/logo.svg" class="absolute top-[-23px] left-4" />
			{/snippet}
			{#snippet center()}<Nav {links} />{/snippet}
			{#snippet right()}<ThemeDark />{/snippet}
		</Header>
	{/snippet}

	{#snippet main()}
		{@render children()}
	{/snippet}

	{#snippet footer()}
		<Divider width="150%" fill="fill-primary" />
		<Footer class="bg-primary text-primary-50-50 p-4">
			{#snippet left()}<Logo />{/snippet}
			{#snippet center()}Social{/snippet}
			{#snippet right()}<Copyright>Oneezy</Copyright>{/snippet}
		</Footer>
	{/snippet}
</Template>
