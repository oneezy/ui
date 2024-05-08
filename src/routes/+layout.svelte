<script>
	import '$lib/ui.css';
	import { App, Nav } from '$lib';
	let { pageData, children } = $props();
</script>

<!-- This nav is the one i want to use but don't know how! -->
<Nav links={pageData} />

<App id="site">
	{@render children()}
</App>
