<script>
	import '$lib/ui.css';
	import { App, Nav } from '$lib';
	let { summaries, children } = $props();
</script>

<!-- This nav is the one i want to use but don't know how! -->
<Nav links={summaries} />

<App id="site">
	{@render children()}
</App>
