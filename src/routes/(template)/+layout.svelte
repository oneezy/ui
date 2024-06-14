<script>
	import {
		Template,
		Divider,
		Header,
		Logo,
		Button,
		Nav,
		ThemeDark,
		Footer,
		Social,
		Copyright
	} from '$lib';

	import { formatPhoneNumber } from '$lib/utils/utils.js';
	import SolarPhoneBold from '~icons/solar/phone-bold';
	import SolarMapPointBold from '~icons/solar/map-point-bold';
	import CiMenuAlt02 from '~icons/ci/menu-alt-02';
	import SolarHamburgerMenuLinear from '~icons/solar/hamburger-menu-linear';

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
</svelte:head>

{#snippet phoneIcon()}
	<svg
		class="flex items-center justify-center"
		xmlns="http://www.w3.org/2000/svg"
		width="24"
		height="24"
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
						<Logo
							{href}
							src="/logos/logo-black-horizontal.svg"
							class="hidden lg:flex"
						/>
					{/if}
				</div>
			{/snippet}
			{#snippet center()}<Nav {links} class="hidden md:flex" />{/snippet}
			{#snippet right({ isHeaderActive })}
				{#if !isHeaderActive}
					<!-- mobile menu -->
					<Button icon class="flex text-white md:hidden">
						<SolarHamburgerMenuLinear class="text-3xl" />
					</Button>

					<!-- phone button icon -->
					<Button
						href="tel:{meta.companyPhone}"
						class="text-primary-50-50 hidden bg-transparent md:flex lg:hidden"
						icon
					>
						<SolarPhoneBold class="text-3xl" />
					</Button>

					<!-- phone button full -->
					<Button
						href="tel:{meta.companyPhone}"
						class="text-primary-50-50 hidden hidden bg-transparent lg:flex"
					>
						<SolarPhoneBold class="text-3xl" />
						{formatPhoneNumber(meta.companyPhone)}
					</Button>
				{:else}
					<!-- mobile -->
					<Button icon class="flex md:hidden">
						<SolarHamburgerMenuLinear class="text-3xl" />
					</Button>

					<!-- phone button icon -->
					<Button
						href="tel:{meta.companyPhone}"
						class="hidden md:flex lg:hidden"
						icon
						ghost
					>
						<SolarPhoneBold class="text-3xl" />
					</Button>
					<!-- phone button full -->
					<Button href="tel:{meta.companyPhone}" class="hidden lg:flex" neutral>
						<SolarPhoneBold class="text-3xl" />
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
			class="bg-primary text-primary-50-50 p-4"
			containerClass="grid md:grid-cols-2 grid-flow-dense items-center justify-center gap-4"
		>
			<div
				class="flex flex-col items-center justify-center md:col-span-1 md:col-start-1 md:flex-row md:justify-start"
			>
				<Logo
					{href}
					src="icon.svg"
					class="mr-2 flex size-20 items-center justify-center opacity-100 grayscale"
				/>
				<Copyright>{meta.companyName}</Copyright>
			</div>
			<Social
				classContainer="md:-col-end-1 md:ml-auto"
				socials={meta.socialLinks}
			/>
		</Footer>
	{/snippet}
</Template>
