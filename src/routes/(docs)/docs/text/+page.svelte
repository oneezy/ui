<script>
	import {Text, Title} from '$lib';

	let text = $state('hi Text!');

	function handleClick() {
		alert(text);
	}
</script>

<Title subheader="default style" />
<Text class="hmm" />
<!-- outputs: "Text" -->

<Title subheader="unstyled prop" />
<Text unstyled />
<!-- outputs: "Text" (with no style) -->

<Title subheader="click event" />
<Text onclick={handleClick} />  
<!-- outputs: "Hi Text" (with click event and alert box saying 'hi Text!') -->

<Title subheader="tailwind class name" />
<Text class="bg-green-500" />
<!-- outputs: "Text" (with green background) -->

<Title subheader="text prop" />
<Text text />
<!-- outputs: "hello, Text!" -->

<Title subheader="custom text prop" />
<Text text="what up world!" />
<!-- outputs: "what up world!" -->

<Title subheader="children only" />
<Text>goodbye, world!</Text>
<!-- outputs: "goodbye, world!" -->