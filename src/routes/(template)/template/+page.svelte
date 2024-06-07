<script>
	import {
		Hero,
		Section,
		Container,
		Content,
		Divider,
		Card,
		Title
	} from '$lib';
	let { children, ...props } = $props();

	let classes = 'card grid items-center justify-start flex-1';
	let width = '150%';
	let height = '240px';
</script>

<Hero id="hero" />

<Section
	class="my-20 grid grid-cols-2 items-center justify-center gap-4 p-4 md:flex md:flex-row md:gap-10 "
>
	<Card total="4" />
</Section>

<Container id="team" class="grid items-center justify-center gap-20">
	<Title>Our Team</Title>
	<div
		class="flex flex-col flex-col-reverse md:flex-row md:gap-10 md:even:flex-row-reverse"
	>
		<Content text class={classes} />
		<Content img class={classes} />
	</div>
	<div
		class="flex flex-col flex-col-reverse md:flex-row md:gap-10 md:even:flex-row-reverse"
	>
		<Content text class={classes} />
		<Content img class={classes} />
	</div>
	<div
		class="flex flex-col flex-col-reverse md:flex-row md:gap-10 md:even:flex-row-reverse"
	>
		<Content text class={classes} />
		<Content img class={classes} />
	</div>
</Container>

<Divider id="services" {width} {height}>
	<Title>Our Services</Title>
	<Container>
		<div
			class="grid grid-cols-1 place-items-center items-center justify-center gap-10 p-4 pb-20 md:grid-cols-3"
		>
			<Card total="9" />
		</div>
	</Container>
</Divider>

<Section>
	<Title>Contact Us</Title>
	<Container class="card grid grid-cols-2 gap-10 p-4">
		<Content text class={classes} />
		<Content img class={classes} />
	</Container>
</Section>
