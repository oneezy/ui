import { pages } from './pages/data.js'

export function load() {
	return {
		summaries: pages.map((page) => ({
			slug: page.slug,
			title: page.title
		}))
	};
}
