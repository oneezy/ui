<script>
	import {Template, Header, Logo, Nav, Button, Footer, Copyright} from '$lib';
	let {data, pageData, children} = $props();
</script>

<Template>
	{#snippet header()}
		<Header class="p-4">
			{#snippet left()}<Logo src="/logo.svg" />{/snippet}
			{#snippet center()}<Nav />{/snippet}
			{#snippet right()}<Button href="/" variant="primary">Sign In</Button>{/snippet}
		</Header>
	{/snippet}

	{#snippet main()}
		{@render children()}
	{/snippet}

	{#snippet footer()}
		<Footer class="p-4">
			{#snippet left()}<Logo src="/logo.svg" />{/snippet}
			{#snippet center()}Social{/snippet}
			{#snippet right()}<Copyright>Oneezy</Copyright>{/snippet}
		</Footer>
	{/snippet}
</Template>
