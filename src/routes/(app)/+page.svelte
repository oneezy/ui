<script>
	import { Section, Container, Content, Title, Divider, Button } from '$lib';
	import IconAirplane from '~icons/bi/airplane';

	let { data, pageData } = $props();
	let fill = 'fill-green-200';
	let bg = 'bg-green-200';
	let shape = 'waves';
	let height = '120';
	let width = '150%';

	function scrollToTop() {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}
</script>

{#each data.pageData as { slug, title, tagline, content }}
	<Section id={slug}>
		<Divider {bg} {fill} {shape} {height} {width}>
			<Title class="text-primary" {title} {tagline} />
			<Content>{@html content}</Content>
		</Divider>
	</Section>
{/each}

<!-- Create a position sticky scrollup button -->
<Button icon class="sticky bottom-0 left-full -translate-x-4 -translate-y-4" onclick={scrollToTop}>
	<IconAirplane />
</Button>
