<script>
	import Section from '$lib/components/atoms/Section/Section.svelte';
	import Container from '$lib/components/atoms/Container/Container.svelte';
	import Content from '$lib/components/atoms/Content/Content.svelte';
	import Title from '$lib/components/atoms/Title/Title.svelte';

	let { data } = $props();
</script>

<Section id={data.page.slug} class="bg-white " state="normal">
	<Container>
		<Title title={data.page.title} />
		<Content>{@html data.page.content}</Content>
	</Container>
</Section>
