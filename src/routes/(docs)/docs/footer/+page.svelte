<script>
  import { Footer, Title } from '$lib';

	let text = $state('hi Footer!');
</script>

<Title subheader="unstyled prop" />
<Footer unstyled />

<Title subheader="default style" />
<Footer />

<Title subheader="text prop" />
<Footer text />

<Title subheader="custom text prop" />
<Footer text="what up world!" />

<Title subheader="children only" />
<Footer>goodbye, world!</Footer>