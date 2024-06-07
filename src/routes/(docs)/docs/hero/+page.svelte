<script>
	import { Hero } from '$lib';
	let { children = null, id = null, ...props } = $props();
</script>

<!-- default 
:::::::::::::::::::::::::::::::: -->
<Hero />

<!-- default 
:::::::::::::::::::::::::::::::: -->
<Hero
	title="Advanced Family Dental"
	tagline="your premiere dental stop"
	button1="Schedule Appointment"
	button1Link="tel:8888888888"
	button2="Get Directions"
	button2Link="/contact"
	src="https://picsum.photos/1200/800"
	gradient="var(--color-primary), transparent, transparent, var(--color-secondary)"
	divider
/>
