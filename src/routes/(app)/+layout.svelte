<script>
	import {App, Header, Logo, Nav, Button} from '$lib';
	let {data, pageData, children} = $props();
</script>

<!-- children -->
<Header>
	{#snippet left()}<Logo />{/snippet}
	{#snippet center()}<Nav />{/snippet}
	{#snippet right()}<Button href="/">Sign In</Button>{/snippet}
</Header>

<App id="site">
	{@render children()}
</App>
