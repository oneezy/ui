<script>
	import {
		Template,
		Header,
		Logo,
		Nav,
		Button,
		Footer,
		Copyright,
		Divider,
		ThemeDark,
		ThemeColor
	} from '$lib';
	let { data, pageData, children } = $props();
	let shape = 'waves';
</script>

<Template>
	{#snippet header()}
		<Header class="p-4">
			{#snippet left()}<Logo src="/logo.svg" />{/snippet}
			{#snippet center()}<Nav />{/snippet}
			{#snippet right()}<ThemeDark />{/snippet}
		</Header>
	{/snippet}

	{#snippet main()}
		{@render children()}
	{/snippet}

	{#snippet footer()}
		<Divider {shape} width="200%" fill="fill-secondary" />
		<Footer class="fill-secondary p-4">
			{#snippet left()}<Logo src="/logo.svg" />{/snippet}
			{#snippet center()}Social{/snippet}
			{#snippet right()}<Copyright>Oneezy</Copyright>{/snippet}
		</Footer>
	{/snippet}
</Template>
