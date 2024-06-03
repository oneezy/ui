<script>
	import { page } from '$app/stores';
	import { App, Section, Nav, Header, Title, Button, ThemeDark, ThemeColor } from '$lib';
	import { getRoutes } from '$lib/utils/getRoutes.js';
	import { convertPathToTitle } from '$lib/utils/convertPathToTitle.js';
	import IconMenu from '~icons/hugeicons/menu-02';
	import IconClose from '~icons/material-symbols/close-rounded'

	let { data, docData, children, ...props } = $props();
	let navClosed = $state(true);

	const links = getRoutes();
</script>

{#snippet menu()}<IconMenu />{/snippet}
{#snippet close()}<IconClose />{/snippet}

<App id="docs" class="flex">
	<div class="bg-gray-200">
		<Nav {links} class="{navClosed ? 'hidden' : 'flex flex-col'} sticky top-0 w-80 p-10" />
	</div>
	<div class="relative {navClosed ? '' : 'container'} min-h-dvh w-full">
		<Header
			class="sticky top-4 z-20" 
			containerClass="preset-glass"
			leftClass=""
			centerClass=""
			rightClass=""
		>
			{#snippet left()}
				<Button class="text-white text-2xl" ghost icon onclick={() => (navClosed = !navClosed)}>
					{#if navClosed}
						{@render menu()}
					{:else}
						{@render close()}
					{/if}
				</Button>
			{/snippet}
			{#snippet center()}
				<ThemeColor />
			{/snippet}
			{#snippet right()}<ThemeDark class="text-white" />{/snippet}
		</Header>
		<Title>{convertPathToTitle($page.url.pathname)}</Title>

		<Section class="px-6">
			{@render children()}
		</Section>
	</div></App
>
