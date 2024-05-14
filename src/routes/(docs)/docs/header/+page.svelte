<script>
	import { Header, Logo, Nav, Button, Title } from '$lib';

	let text = $state('hi Header!');
</script>

<!-- default -->
<Title subheader="default" />
<Header unstyled />

<!-- children -->
<Title subheader="children only" />
<Header class="bg-blue-200">
	<Logo left />
	<Nav center />
	<Button class="w-[120px]" href="/" right>Sign In</Button>
</Header>
