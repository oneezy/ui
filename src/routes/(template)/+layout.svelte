<script>
	import { page } from '$app/stores';
	import { Template, Divider, Header, Logo, Button, Nav, ThemeDark, Footer, Social, Copyright } from '$lib';

	import { formatPhoneNumber } from '$lib/utils/utils.js';

	let { data, children, ...props } = $props();

	let links = [
		{ label: 'home', href: '#home' },
		{ label: 'about', href: '#about' },
		{ label: 'services', href: '#services' },
		{ label: 'testimonials', href: '#testimonials' },
		{ label: 'contact', href: '#contact' },
		{ label: 'FAQ', href: '#faq' }
	];

	let href = '/';
	let meta = data.metaData[0];
</script>

<svelte:head>
	<title>{meta.seoTitle}</title>
	<meta name="description" content={meta.seoDescription} />
	<meta name="keywords" content={meta.seoKeywords} />
	<meta name="author" content={meta.companyName} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content={meta.seoDescription} />
	<meta name="twitter:title" content={meta.seoTitle} />
	<meta name="twitter:description" content={meta.seoDescription} />
	<meta name="twitter:image" content="{$page.url.origin}/images/og.png" />
	<meta name="twitter:image:alt" content={meta.companyName} />
	<meta name="twitter:creator" content={meta.companyName} />
	<meta property="og:title" content={meta.seoTitle} />
	<meta property="og:type" content="article" />
	<meta property="og:url" content={meta.companyWebsite} />
	<meta property="og:image" content="{$page.url.origin}/images/og.png" />
	<meta property="og:image:alt" content={meta.companyName} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:description" content={meta.seoDescription} />
	<meta property="og:site_name" content={meta.companyName} />
	<meta property="og:locale" content="EN_US" />
</svelte:head>

{#snippet IconMap(size)}
	<svg
		class="flex items-center justify-center"
		xmlns="http://www.w3.org/2000/svg"
		width={size ? size : 32}
		height={size ? size : 32}
		viewBox="0 0 24 24"
	>
		<path
			fill="currentColor"
			fill-rule="evenodd"
			d="M12 2c-4.418 0-8 4.003-8 8.5c0 4.462 2.553 9.312 6.537 11.174a3.45 3.45 0 0 0 2.926 0C17.447 19.812 20 14.962 20 10.5C20 6.003 16.418 2 12 2m0 10a2 2 0 1 0 0-4a2 2 0 0 0 0 4"
			clip-rule="evenodd"
		/>
	</svg>
{/snippet}

{#snippet IconMenu(size)}
	<svg
		class="flex items-center justify-center"
		xmlns="http://www.w3.org/2000/svg"
		width={size ? size : 32}
		height={size ? size : 32}
		viewBox="0 0 24 24"
	>
		<path
			fill="none"
			stroke="currentColor"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="2"
			d="M11 17h8M5 12h14m-8-5h8"
		/>
	</svg>
{/snippet}

{#snippet IconPhone(size)}
	<svg
		class="flex items-center justify-center"
		xmlns="http://www.w3.org/2000/svg"
		width={size ? size : 32}
		height={size ? size : 32}
		viewBox="0 0 24 24"
		><path
			fill="currentColor"
			d="m16.556 12.906l-.455.453s-1.083 1.076-4.038-1.862s-1.872-4.014-1.872-4.014l.286-.286c.707-.702.774-1.83.157-2.654L9.374 2.86C8.61 1.84 7.135 1.705 6.26 2.575l-1.57 1.56c-.433.432-.723.99-.688 1.61c.09 1.587.808 5 4.812 8.982c4.247 4.222 8.232 4.39 9.861 4.238c.516-.048.964-.31 1.325-.67l1.42-1.412c.96-.953.69-2.588-.538-3.255l-1.91-1.039c-.806-.437-1.787-.309-2.417.317"
		/></svg
	>
{/snippet}

<Template>
	{#snippet header()}
		<Header class="p-0" containerClass="relative">
			{#snippet left({ isHeaderActive })}
				<div class="lg:translate-x-4">
					{#if !isHeaderActive}
						<Logo {href} src="icon.svg" class="flex lg:hidden" />
						<Logo {href} src="logo.svg" class="hidden lg:flex" />
					{:else}
						<Logo {href} src="icon.svg" class="flex lg:hidden" />
						<Logo {href} src="/logos/logo-black-horizontal-noborder.svg" class="hidden lg:flex" />
					{/if}
				</div>
			{/snippet}
			{#snippet center()}<Nav {links} row class="hidden md:flex" />{/snippet}
			{#snippet right({ isHeaderActive })}
				{#if !isHeaderActive}
					<!-- mobile menu -->
					<Button icon class="flex text-white md:hidden">
						{@render IconMenu(56)}
					</Button>

					<!-- phone button icon -->
					<Button
						href="tel:{meta.companyPhone}"
						class="text-primary-50-50 hidden bg-transparent md:flex lg:hidden"
						icon
					>
						{@render IconPhone()}
					</Button>

					<!-- phone button full -->
					<Button href="tel:{meta.companyPhone}" class="text-primary-50-50 hidden hidden bg-transparent lg:flex">
						{@render IconPhone()}
						{formatPhoneNumber(meta.companyPhone)}
					</Button>
				{:else}
					<!-- mobile -->
					<Button icon class="flex md:hidden">
						{@render IconMenu(56)}
					</Button>

					<!-- phone button icon -->
					<Button href="tel:{meta.companyPhone}" class="hidden md:flex lg:hidden" icon ghost>
						{@render IconPhone()}
					</Button>
					<!-- phone button full -->
					<Button href="tel:{meta.companyPhone}" class="hidden lg:flex" neutral>
						{@render IconPhone()}
						{formatPhoneNumber(meta.companyPhone)}
					</Button>
				{/if}
			{/snippet}
		</Header>
	{/snippet}

	{#snippet main()}
		{@render children()}
	{/snippet}

	{#snippet footer()}
		<Footer
			divider
			dividerFill="fill-accent-500-500"
			class="bg-accent text-primary-50-50 p-4"
			containerClass="grid md:grid-cols-2 grid-flow-dense items-center justify-center gap-4"
		>
			<div
				class="flex flex-col items-center justify-center text-left md:col-span-1 md:col-start-1 md:flex-row md:justify-start"
			>
				<Logo
					{href}
					src="logos/icon-black.svg"
					class="mr-2 flex size-36 items-center justify-center opacity-60 md:size-24"
				/>
				<Copyright class="text-center md:text-nowrap">{meta.companyName}</Copyright>
			</div>
			<Social classContainer="md:-col-end-1 md:ml-auto" socials={meta.socialLinks} />
		</Footer>
	{/snippet}
</Template>
