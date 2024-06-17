<script>
	import { Slider } from '$lib';

	import { activeElement } from 'runed';

	const slides = [
		{
			url: 'https://picsum.photos/id/1018/1200/600/',
			banner: 'Tour the Empire State Building!',
			linkText: 'Buy tickets now.'
		},
		{ url: 'https://picsum.photos/id/1015/1200/600/', banner: 'Ride the Shinkansen!', linkText: 'Buy tickets now.' },
		{ url: 'https://picsum.photos/id/1019/1200/600/', banner: 'Discover relaxation!', linkText: 'Buy tickets now.' },
		{ url: 'https://picsum.photos/id/1020/1200/600/', banner: 'See penguins!', linkText: 'Buy tickets now.' },
		{
			url: 'https://picsum.photos/id/1021/1200/600/',
			banner: 'Take a ride on the wheel!',
			linkText: 'Buy tickets now.'
		}
	];
	let classes =
		'relative shrink-0 h-full w-full min-w-full snap-normal snap-center flex items-center justify-center bg-primary-600-200 text-neutral-950-50 font-bold text-9xl	';
</script>

<Slider {slides} />

<Slider>
	<div class="flex flex-col {classes}">
		<h1 class="text-4xl font-bold">Slide 1</h1>
		<p class="text-lg">This is the first slide.</p>
	</div>
	<div class={classes}>2</div>
	<div class={classes}>3</div>
</Slider>

<Slider duration={3000} autoplay={false} arrows={true} indicators={true} showScrollbar={false} show={1} />

<style>
	.active {
		background-color: lime;
	}
</style>
