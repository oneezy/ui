<script>
	import { App, Title } from '$lib';

	let text = $state('hi Component!');

	function handleClick() {
		alert(text);
	}
</script>

<Title subheader="default style" />
<App />
<!-- outputs: "Component" -->

<Title subheader="unstyled prop" />
<App unstyled />
<!-- outputs: "Component" (with no style) -->

<Title subheader="click event" />
<App onclick={handleClick} />
<!-- outputs: "Component" (with click event and alert box saying 'hi Component!') -->

<Title subheader="tailwind class name" />
<App class="bg-green-500" />
<!-- outputs: "Component" (with green background) -->

<Title subheader="text prop" />
<App text />
<!-- outputs: "hello, Component!" -->

<Title subheader="custom text prop" />
<App text="what up world!" />
<!-- outputs: "what up world!" -->

<Title subheader="children only" />
<App>goodbye, world!</App>
<!-- outputs: "goodbye, world!" -->
