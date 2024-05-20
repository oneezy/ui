<script>
	import { Section, Container, Content, Title, Divider } from '$lib';
	import IconAirplane from '~icons/bi/airplane';

	let { data, pageData } = $props();
</script>

{#each data.pageData as { slug, title, tagline, content }}
	<Section id={slug} class="" state="normal">
		<Divider position="top" shape="arrow" invert={true} />

		<Container>
			<IconAirplane />
			<Title {title} {tagline} />

			<Content>{@html content}</Content>
		</Container>

		<Divider position="bottom" shape="arrow" invert={false} />
	</Section>
{/each}
