<script>
	import { Section, Container, Image, Effect, Title, Button, Divider } from '$lib';
	let {
		title = 'Title',
		tagline = 'Your awesome tagline goes here',
		button1 = 'Button 1',
		button1Link = '#button1',
		button2 = 'Button 2',
		button2Link = '#button2',
		image = 'https://www.ronaldcitranodds.com/custom/images/banner-1.jpg',
		divider = true,
		children,
		...props
	} = $props();
</script>


<!-- children
:::::::::::::::::::::::::::::::: -->
<Section
	class="relative grid grid-rows-[1fr_auto] items-end overflow-hidden"
>
	<Image bg cover src="https://www.ronaldcitranodds.com/custom/images/banner-1.jpg">
		<Effect
			gradient="var(--color-primary), transparent, transparent, var(--color-secondary)"
			linear="170deg"
		/>
	</Image>

	<Container class="flex flex-col items-center justify-center">
		<Title
			{title}
			{tagline}
			class="text-center"
		/>

		<div class="flex gap-4">
			<Button href={button1Link} primary>{button1}</Button>
			<Button href={button2Link} outline>{button2}</Button>
		</div>
	</Container>

	{#if divider }
		<Divider height="240px" fill="fill-neutral-50-950" width="150%" flip={true} />
	{/if}
</Section>
