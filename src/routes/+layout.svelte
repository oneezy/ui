<script>
	import '$lib/ui.css';
	import { App, Nav } from '$lib';
	let { data, pageData, children } = $props();
</script>

<Nav links={data.pageData} />

<App id="site">
	{@render children()}
</App>
