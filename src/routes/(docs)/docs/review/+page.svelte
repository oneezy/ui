<script>
	import { Preview, Review } from '$lib';

	let reviews = [
		{
			name: 'Nani L.',
			rating: 5,
			description: 'Will this work?',
			image: '/images/old/nani.png'
		},
		{
			name: 'Justin O.',
			rating: 5,
			description: 'Yes i think?',
			image: '/images/old/oneezy.jpg'
		}
	];
</script>

<!-- doesnt work: should populate dummy data
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: -->
<Preview name="default">
	<Review />
</Preview>

<!-- works: populating data from props
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: -->
<Preview name="prop ">
	<Review
		name="Justin O."
		image="/images/old/vegita.jpg"
		rating="5"
		description="I love this place."
	/>
</Preview>

<!-- works: populating data from array
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: -->
<Preview name="prop ">
	<Review {reviews} />
</Preview>
