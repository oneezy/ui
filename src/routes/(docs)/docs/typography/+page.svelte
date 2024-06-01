<script>
	import { Image, Content } from '$lib';
	import { html } from './demo.svelte.js';
</script>

<Content class="prose">
	<Image src="https://picsum.photos/id/111/2560/1440" ratio="3/1" cover gradient />
	{@html html}
</Content>
