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
	title = "Advanced Family Dental"
	tagline = "your premiere dental stop"
	button1 = "Schedule Appointment"
	button1Link = "tel:8888888888"
	button2 = "Get Directions"
	button2Link = "/contact"
	image = "https://www.ronaldcitranodds.com/custom/images/banner-1.jpg"
	gradient = "var(--color-primary), transparent, transparent, var(--color-secondary)"
	divider
/>