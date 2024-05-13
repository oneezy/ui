<script>
	import '$lib/ui.css';
	import '../app.css';
	import { App, Header, Logo, Nav, Button, Component } from '$lib';
	let { data, pageData, children } = $props();

	let text = $state('hi mom!');
	let texttt = $state('hi mommm!');
</script>

<!-- expected output: "text") -->
<Component unstyled class="bg-red-300 text-black hover:bg-blue-300" />

<!-- expected output: "hello, world!" -->
<Component text />

<!-- expected output: "what up world!" -->
<Component unstyled text="what up world!" />

<!-- expected output: "goodbye, world!" -->
<Component unstyled>goodbye, world!</Component>

<!-- expected output: "him mom!" -->
<Component unstyled>{text}</Component>
<Component unstyled {text} />

<!-- expected output: "hi mommm!" -->
<Component unstyled text={texttt} />
<Component unstyled>{texttt}</Component>

<!-- 


















	
 -->

<!-- default -->
<!-- expected output: "hi mom!" -->
<Header blur class="bg-gray-500" />

<!-- children -->
<!-- expected output: "yo" -->
<Header class="bg-blue-500">yo</Header>

<!-- children -->
<!-- expected output: "test test test" -->
<Header class="bg-yellow-500" left="test" center="test" right="test" />

<!-- props -->
<!-- expected output: "test test test" -->
<Header class="bg-orange-400" left="test" center="test" right="test">test</Header>

<!-- children -->
<Header class="bg-green-500">
	<Logo left />
	<Nav center links={data.pageData} />
	<Button class="w-[120px]" href="/" right>Sign In</Button>
</Header>

<App id="site">
	{@render children()}
</App>
