<script>
	import { Section, Container, Content, Title, Divider } from '$lib';

	let { data } = $props();
</script>

{#each data.pageData as { slug, title, content }}
	<Section id={slug} class="" state="normal">
		<Divider position="top" shape="arrow" invert={true} />

		<Container>
			<Title {title} />
			<Content>{@html content}</Content>
		</Container>

		<Divider position="bottom" shape="arrow" invert={false} />
	</Section>
{/each}
