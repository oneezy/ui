<script>
	/* KEY:
	======================================================
	⬜ default    ⬛ prop    🟪 snippet    🟦 children
	====================================================== */

	import { Preview, Review } from '$lib';
</script>

<!-- default 
:::::::::::::::::::::::::::::::: -->
<Preview name="default">
	<Review />
</Preview>

<!-- prop 
:::::::::::::::::::::::::::::::: -->
<Preview name="prop ">
	<Review
		author="Justin O."
		image="/profile.png"
		rating="5"
		review="I love this place."
	/>
</Preview>
