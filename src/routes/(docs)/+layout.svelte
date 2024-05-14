<script>
	import { page } from '$app/stores';
	import { App, Nav, Title } from '$lib';
	import { getRoutes } from '$lib/utils/getRoutes.js';
	import { convertPathToTitle } from '$lib/utils/convertPathToTitle.js';

	let { data, docData, children, ...props } = $props();

	const links = getRoutes();
</script>

<App class="max-w-8xl mx-auto px-4 sm:px-6 md:px-8">
	<Nav
		{links}
		class="flex-col bg-green-200 fixed inset-0 right-auto w-[19rem] p-10 overflow-y-auto"
	/>
	<div class="lg:pl-[19.5rem]">
		<Title>{convertPathToTitle($page.url.pathname)}</Title>
		{@render children()}
	</div>
</App>
