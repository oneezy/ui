<script>
	import { page } from '$app/stores';
	import { App, Nav, Title } from '$lib';
	import { getRoutes } from '$lib/utils/getRoutes.js';
	import { convertPathToTitle } from '$lib/utils/convertPathToTitle.js';

	let { data, docData, children, ...props } = $props();

	const links = getRoutes();
</script>

<Nav center {links} />

<App>
	<Title>{convertPathToTitle($page.url.pathname)}</Title>
	{@render children()}
</App>
