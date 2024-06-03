<script>
	/* KEY:
	======================================================
	⬜ default    ⬛ prop    🟪 snippet    🟦 children
	====================================================== */

	import { Image, Container } from '$lib';
	
	let images = [
		'https://picsum.photos/id/110/1080/720',
		'https://picsum.photos/id/111/1080/720',
		'https://picsum.photos/id/112/1080/720',
	];
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

	<!-- shows single image -->
	<Image src="https://picsum.photos/id/110/1080/720" ratio="6/4" fill/>

	<!-- slide show that fades in/out -->
	<Image ratio="6/4" fill slideshow src="https://picsum.photos/id/110/1080/720, https://picsum.photos/id/111/1080/720, https://picsum.photos/id/112/1080/720" />

	<!-- slide show with prop -->
	<Image fill bg cover slideshow src="{images}" />
</Container>

