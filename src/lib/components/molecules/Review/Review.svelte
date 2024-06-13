<script>
	let {
		reviews = [
			{
				author: 'sum yung gui',
				rating: 5,
				review: 'review',
				image: '/images/reviews/profile.png'
			},
			{
				author: 'mi wan sup',
				rating: 5,
				review: 'review',
				image: '/images/reviews/profile.png'
			},
			{
				author: 'fu lon thyme',
				rating: 5,
				review: 'review',
				image: '/images/reviews/profile.png'
			}
		],
		children = null,
		...props
	} = $props();

	import { onMount } from 'svelte';

	const API_KEY = 'AIzaSyBsrx125n1-l5bqMJ_BennowHAgcrUxV6I';
	const PLACE_ID = 'ChIJx-FnYE_LPoYRubNNIk7tdn0';

	async function fetchReviews() {
		const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=reviews&key=${API_KEY}`;
		const url2 = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=rating,user_ratings_total&key=${API_KEY}`;
		const response = await fetch(url2);
		const data = await response.json();
		reviews = data.result.reviews;
	}
	//maps.googleapis.com/maps/api/place/details/json?place_id=ChIJx-FnYE_LPoYRubNNIk7tdn0&fields=reviews&key=AIzaSyBsrx125n1-l5bqMJ_BennowHAgcrUxV6I
	https: $effect.pre(() => {
		fetchReviews();
	});
</script>

<div
	{...props}
	class="bg-neutral-950-50 text-neutral-50-950 rounded-base {props.class}"
>
	{#if children}
		{@render children()}
	{:else if typeof review === 'function'}
		{@render review()}
	{:else}
		{review}
	{/if}
</div>

<div>
	{#if reviews.length > 0}
		{#each reviews as review}
			<div class="review">
				<div class="author">{review.author_name}</div>
				<div class="rating">{'★'.repeat(review.rating)}</div>
				<div class="text">{review.text}</div>
			</div>
		{/each}
	{:else}
		<p>Loading reviews...</p>
	{/if}
</div>

<style>
	.review {
		border: 1px solid #ccc;
		padding: 1em;
		margin-bottom: 1em;
		border-radius: 5px;
	}
	.author {
		font-weight: bold;
	}
	.rating {
		color: gold;
	}
</style>
