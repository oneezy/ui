import { blogs, pages } from './data.js'

/** @type {import('./$types').LayoutServerLoad} */
export async function load() {
	return {
		pageData: pages.map((page) => ({
			slug: page.slug,
			href: page.href,
			label: page.label,
			title: page.title,
			content: page.content
		})),
		blogData: blogs.map((blog) => ({
			slug: blog.slug,
			href: blog.href,
			label: blog.label,
			title: blog.title,
			content: blog.content
		}))
	};
}