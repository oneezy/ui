<script>
	import { Component, Title } from '$lib';

	let text = $state('hi mom!');
</script>

<Title subheader="unstyled prop" />
<Component unstyled />

<Title subheader="default style" />
<Component />

<Title subheader="text prop" />
<Component text />

<Title subheader="custom text prop" />
<Component text="what up world!" />

<Title subheader="children only" />
<Component>goodbye, world!</Component>
