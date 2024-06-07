<script>
	import {
		Section,
		Container,
		Image,
		Effect,
		Title,
		Button,
		Divider
	} from '$lib';
	let {
		title = 'Title',
		tagline = 'Your awesome tagline goes here',
		button1 = 'Button 1',
		button1Link = '#button1',
		button2 = 'Button 2',
		button2Link = '#button2',
		src = 'https://www.ronaldcitranodds.com/custom/images/banner-1.jpg',
		divider = true,
		children,
		...props
	} = $props();
</script>

<!-- children
:::::::::::::::::::::::::::::::: -->
<Section
	{...props}
	class="relative grid grid-rows-[1fr_auto] items-end overflow-hidden"
>
	<Image {...props} bg cover {src}>
		<Effect
			{...props}
			gradient="var(--color-primary-500), transparent, transparent, transparent, var(--color-primary-500)"
			linear="180deg"
		/>
	</Image>

	<Container {...props} class="flex flex-col items-center justify-center">
		<Title {...props} {title} {tagline} class="text-center" />

		<div class="flex gap-4">
			<Button {...props} href={button1Link} primary>{button1}</Button>
			<Button {...props} href={button2Link} outline>{button2}</Button>
		</div>
	</Container>

	{#if divider}
		<Divider
			{...props}
			height="240px"
			fill="fill-neutral-50-800"
			width="150%"
			flip={true}
		/>
	{/if}
</Section>
