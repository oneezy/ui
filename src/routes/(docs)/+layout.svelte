<script>
	import { page } from '$app/stores';
	import { App, Nav, Header, Title, Button, ThemeDark, ThemeColor } from '$lib';
	import { getRoutes } from '$lib/utils/getRoutes.js';
	import { convertPathToTitle } from '$lib/utils/convertPathToTitle.js';

	let { data, docData, children, ...props } = $props();
	let navClosed = $state(false);

	const links = getRoutes();
</script>

<App id="docs" class="flex">
	<div class="bg-gray-200">
		<Nav {links} class="{navClosed ? 'hidden' : 'flex flex-col'} sticky top-0 w-80 p-10" />
	</div>
	<div class="relative {navClosed ? '' : 'container'} min-h-dvh w-full">
		<Header class="sticky top-4 z-20 rounded-xl">
			{#snippet left()}
				<Button onclick={() => (navClosed = !navClosed)}>{navClosed ? 'Open' : 'Close'} Nav</Button>
			{/snippet}
			{#snippet center()}
				<ThemeColor />
			{/snippet}
			{#snippet right()}<ThemeDark />{/snippet}
		</Header>
		<Title>{convertPathToTitle($page.url.pathname)}</Title>
		{@render children()}
	</div>
</App>
