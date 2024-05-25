<script>
	import {Template, Header, Logo, Nav, Button, Footer, Copyright, Divider} from '$lib';
	let {data, pageData, children} = $props();
	let shape = 'waves';
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
		<Divider fill="fill-blue-300" {shape} />
		<Footer class="p-4">
			{#snippet left()}<Logo src="/logo.svg" />{/snippet}
			{#snippet center()}Social{/snippet}
			{#snippet right()}<Copyright>Oneezy</Copyright>{/snippet}
		</Footer>
	{/snippet}
</Template>
