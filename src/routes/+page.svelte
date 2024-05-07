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
	import Copyright from '$src/lib/components/molecules/Copyright/Copyright.svelte';

	function hi() {
		alert('hi');
	}
</script>

<Title title="hello world" />

<App class="bg-gray-300">
	<Section id="yo" class="bg-white " state="normal">
		<Divider position="top" color="fill-dark dark:fill-lite" shape="arrow" invert={false} />

		<Container>
			<Content></Content>
		</Container>

		<Divider position="bottom" color="fill-dark dark:fill-lite" shape="arrow" invert={true} />
	</Section>
</App>

<Copyright></Copyright>
