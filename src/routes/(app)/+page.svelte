<script>
	import {Section, Container, Content, Title, Divider, Button} from '$lib';
	import IconAirplane from '~icons/bi/airplane';

	let {data, pageData} = $props();

	function scrollToTop() {
		window.scrollTo({top: 0, behavior: 'smooth'});
	}
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

<!-- Create a position sticky scrollup button -->
<Button icon class="sticky bottom-0 left-full -translate-x-4 -translate-y-4" onclick={scrollToTop}>
	<IconAirplane />
</Button>
