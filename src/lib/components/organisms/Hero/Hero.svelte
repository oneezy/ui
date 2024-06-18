<script>
	import { Section, Container, Image, Effect, Title, Button, Divider, Logo } from '$lib';

	import PhoneIcon from '~icons/solar/phone-bold';
	import MapIcon from '~icons/solar/map-point-bold';
	
	let {
		logo = true,
		logoEffect = true,
		logoSrc = 'https://oneezy.com/logo.svg',
		logoSmall = 'https://oneezy.com/logo.svg',
		logoLarge = 'https://oneezy.com/logo.svg',
		title = 'Title',
		tagline = 'Your awesome tagline goes here',
		company = 'Company Name',
		button1 = 'Button 1',
		button1Link = '#',
		button2 = 'Button 2',
		button2Link = '#',
		src = 'https://picsum.photos/1920/1080',
		divider = true,
		dividerFill = 'fill-neutral-50-800',
		dividerWidth = '150%',
		dividerHeight = '240px',
		dividerStuck = false,
		children,
		...props
	} = $props();
</script>

<!-- children
:::::::::::::::::::::::::::::::: -->
<Section
	{...props}
	class="relative grid grid-rows-[1fr_auto] place-items-center items-center justify-center overflow-hidden {props.class}"
>
	<Image bg cover {src}>
		<Effect
			gradient="var(--color-primary-700), transparent, transparent, transparent, var(--color-primary-500)"
			linear="180deg"
		/>
	</Image>

	<Container class="flex flex-col items-center justify-center gap-20 pt-20">
		<Title title={company} class="sr-only text-center text-white" />
		{#if logo}
			<Logo effect={logoEffect} class="flex w-full lg:hidden" src={logoSmall} />
			<Logo effect={logoEffect} class="hidden w-full lg:flex" src={logoLarge} />
			<!-- <Title {tagline} class="text-center text-white" /> -->
		{:else}
			<Title {title} {tagline} class="text-center text-white" />
		{/if}

		<div class="flex flex-col justify-center gap-4 lg:flex-row">
			<Button class="min-w-96 flex-1" href={button1Link} xl secondary><PhoneIcon class="text-4xl" />{button1}</Button
			>
			<Button class="min-w-96 flex-1" href={button2Link} neutral xl
				><MapIcon class="text-4xl" />{button2}</Button
			>
		</div>
	</Container>

	{#if divider}
		<Divider class="mb-[-1px]" fill={dividerFill} width={dividerWidth} height={dividerHeight} flip={true} />
	{/if}
</Section>
