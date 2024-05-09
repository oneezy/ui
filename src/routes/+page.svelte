<script>
	import { Section, Container, Content, Title, Divider } from '$lib';

	let { data, pageData } = $props();
</script>

{#each data.pageData as { slug, title, tagline, content }}
	<Section id={slug} class="" state="normal">
		<Divider position="top" shape="arrow" invert={true} />

		<Container>
			<Title {title} {tagline} />
			<Content>{@html content}</Content>
		</Container>

		<Divider position="bottom" shape="arrow" invert={false} />
	</Section>
{/each}
