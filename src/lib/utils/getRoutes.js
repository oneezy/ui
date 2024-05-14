export function getRoutes() {
	const routeFiles = import.meta.glob('/src/routes/**/+page.svelte');
	const routes = Object.keys(routeFiles)
		.filter((file) => !file.includes('/(app)/')) // Exclude routes containing /(app)/
		.map((file) => {
			const path = file
				.replace('/src/routes', '') // Remove /src/routes from path
				.replace('/(docs)', '') // Remove /(docs) from path
				.replace('/+page.svelte', '')
				.replace(/\/index$/, '')
				.replace(/\/$/, ''); // Remove trailing slash

			return {
				slug: path === '' ? 'docs' : path, // Adjust slug
				href: path === '' ? '/docs' : `${path}`, // Adjust href
				label: path === '' ? 'docs' : path.split('/').pop().replace(/\//g, ' ').trim() // Adjust label
			};
		});
	return routes;
}
