<script>
	import { Section, Image, Effect, Divider, Content, Title, Button } from '$lib';
</script>

<!-- children
:::::::::::::::::::::::::::::::: -->
<Section
	class="relative mb-[50vh] grid grid-rows-[1fr_auto] items-end overflow-hidden [block-size:80vh]"
>
	<Image bg cover src="https://www.ronaldcitranodds.com/custom/images/banner-1.jpg">
		<Effect
			gradient="var(--color-primary), transparent, transparent, var(--color-secondary)"
			linear="170deg"
		/>
	</Image>

	<div class="flex flex-col items-center justify-center">
		<Title
			subtitle="Advanced Family Dental"
			tagline="your premiere dental stop"
			class="text-center"
		/>

		<div class="flex gap-4">
			<Button href="tel:8888888888" primary>Schedule Appointment</Button>
			<Button href="/contact" outline>Get Directions</Button>
		</div>
	</div>

	<Divider height="240px" fill="fill-white" width="150%" flip={true} />
</Section>
