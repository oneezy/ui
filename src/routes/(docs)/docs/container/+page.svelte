<script>
	import { Preview, Container, Title, Content, Image, Mask } from '$lib';

	let classes = 'card grid items-center justify-start';
</script>

<!-- <Mask src="https://picsum.photos/500" mask="/masks/rounded.svg" /> -->

<!-- default -->
<Title subheading="Container" />

<Container class="card grid items-center justify-center gap-10 p-4 bg-red-200">
	test
</Container>

<Container class="card grid grid-cols-2 gap-10 p-4">
	<Content text class={classes} />
	<Content img class={classes} />
</Container>
<Container class="card grid grid-cols-2 gap-10 p-4">
	<Content text class={classes} />
	<Content img class={classes} />
</Container>
<Container class="card grid grid-cols-2 gap-10 p-4">
	<Content text class={classes} />
	<Content img class={classes} />
</Container>

<Container class="card grid items-center justify-center gap-10 p-4">
	<Content blog class={classes} />
</Container>
