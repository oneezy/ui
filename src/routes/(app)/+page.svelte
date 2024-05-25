<script>
	import {Section, Container, Content, Title, Divider, Button} from '$lib';
	import IconAirplane from '~icons/bi/airplane';

	let {data, pageData} = $props();
	let color = 'text-black';
	let shape = 'waves';
	let height = '120';
	let width = '200vw';

	function scrollToTop() {
		window.scrollTo({top: 0, behavior: 'smooth'});
	}
</script>

{#each data.pageData as { slug, title, tagline, content }}
	<Section id={slug}>
		<Divider {color} {shape} {height} top />

		<Title {title} {tagline} />
		<Content>{@html content}</Content>

		<Divider {color} {shape} {height} bottom flip />
	</Section>
{/each}

<!-- Create a position sticky scrollup button -->
<Button icon class="sticky bottom-0 left-full -translate-x-4 -translate-y-4" onclick={scrollToTop}>
	<IconAirplane />
</Button>
