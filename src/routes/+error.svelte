<script>
	import Section from '$lib/components/atoms/Section/Section.svelte';
	import Container from '$lib/components/atoms/Container/Container.svelte';
	import Content from '$lib/components/atoms/Content/Content.svelte';
	import Title from '$lib/components/atoms/Title/Title.svelte';
	// export let data;
	let { data } = $props();
</script>

<Section id="yo" class="bg-white " state="normal">
	<Container>
		<Title title="Whoops!" />
		<Content>This page doesn't exist. Go back <a href="/">Home</a>!</Content>
	</Container>
</Section>
