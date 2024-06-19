import { error } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function GET({ params }) {
	const fileId = params.id;
	const url = `https://drive.google.com/uc?export=view&id=${fileId}`;

	try {
		const response = await fetch(url);

		if (!response.ok) {
			throw new Error('Network response was not ok');
		}

		const contentType = response.headers.get('Content-Type');
		const buffer = await response.arrayBuffer();

		return new Response(buffer, {
			headers: {
				'Content-Type': contentType
			}
		});
	} catch (err) {
		console.error('Error fetching file:', err);
		throw error(500, 'Failed to fetch the file');
	}
}
