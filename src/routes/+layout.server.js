import { pages } from './data.js'

export function load() {
	return {
		summaries: pages.map((page) => ({
			slug: page.slug,
			label: page.label,
			title: page.title,
			content: page.content
		}))
	};
}
