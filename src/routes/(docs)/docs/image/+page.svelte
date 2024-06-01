<script>
	/* KEY:
	======================================================
	⬜ default    ⬛ prop    🟪 snippet    🟦 children
	====================================================== */

	import { Image, Container } from '$lib';
</script>

<Container>
	<!-- default 
	:::::::::::::::::::::::::::::::: -->
	<Image src="https://picsum.photos/id/111/2560/1440"  />

	<!-- default 
	:::::::::::::::::::::::::::::::: -->
	<Image src="https://picsum.photos/id/111/2560/1440" ratio="20/4" fill />

	<!-- default 
	:::::::::::::::::::::::::::::::: -->
	<Image src="https://picsum.photos/id/111/2560/1440" ratio="20/4" contain />

	<!-- default 
	:::::::::::::::::::::::::::::::: -->
	<Image src="https://picsum.photos/id/111/2560/1440" ratio="20/4" fill />
</Container>
