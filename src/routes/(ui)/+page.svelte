<script>
	import Version from '$lib/Version/Version.svelte';
	import App from '$lib/components/atoms/App/App.svelte';
	import Section from '$lib/components/atoms/Section/Section.svelte';
	import Container from '$lib/components/atoms/Container/Container.svelte';
	import Content from '$lib/components/atoms/Content/Content.svelte';
	import Title from '$lib/components/atoms/Title/Title.svelte';
	import Block from '$lib/components/atoms/Block/Block.svelte';
	import Button from '$lib/components/atoms/Button/Button.svelte';
	import Divider from '$src/lib/components/atoms/Divider/Divider.svelte';

	function hi() {
		alert('hi');
	}
</script>

<App class="bg-gray-300 p-4">
	<Divider
		class="z-10 block"
		height="200"
		color="fill-dark dark:fill-lite"
		position="top"
		shape="arrow"
		flip={false}
		invert={false}
	/>
	<Block class="bg-green-500 p-4">
		<!-- <Divider shape="waves" /> -->
		<Title title="title" subtitle="subtitle" subheader="subheader" tagline="tagline" />
		<Version class="bg-white" />
		<Button onclick={hi}>Click Me</Button>
	</Block>
	<Section id="yo" class="bg-white" state="normal">
		<!-- Divider shape="waves curve tilt triangle arrow" -->
		<Divider
			height="200"
			color="fill-dark dark:fill-lite"
			position="top"
			shape="arrow"
			flip={true}
			invert={true}
		/>
		<Container class="p-10">
			<Content></Content>
		</Container>
	</Section>
</App>
