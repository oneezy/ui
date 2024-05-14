<script>
	import { App, Header, Logo, Nav, Button } from '$lib';
	let { data, pageData, children } = $props();
</script>

<!-- children -->
<Header class="bg-blue-200">
	<Logo left />
	<!-- <Nav center links={data.pageData} /> -->
	<Nav center />
	<Button class="w-[120px]" href="/" right>Sign In</Button>
</Header>

<App id="site">
	{@render children()}
</App>
