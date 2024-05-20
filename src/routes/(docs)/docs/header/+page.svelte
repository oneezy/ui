<script>
	/* KEY:
	===============
	⬜ default
	⬛ prop
	🟪 snippet 
	🟦 children
	===============*/

	import {Header} from '$lib';
</script>

<!-- default 
:::::::::::::::::::::::::::::::: -->
<h3>default</h3>
<Header />

<!-- prop 
:::::::::::::::::::::::::::::::: -->
<h3>props</h3>
<Header left="⬛ prop left" center="⬛ prop center" right="⬛ prop right" />

<!-- snippets (slots)
:::::::::::::::::::::::::::::::: -->
<h3>snippets (named slots basically)</h3>
<Header class="test">
	{#snippet left()}<div>🟪 snippet left 🟪 snippet left 🟪 snippet left</div>{/snippet}
	{#snippet center()}<div>🟪 snippet center</div>{/snippet}
	{#snippet right()}<div>🟪 snippet right</div>{/snippet}
</Header>

<!-- mixed 
:::::::::::::::::::::::::::::::: -->
<h3>mixed (default, props, and snippets)</h3>
<Header center="⬛ prop center">
	{#snippet right()}<div>🟪 snippet right</div>{/snippet}
</Header>

<!-- children
:::::::::::::::::::::::::::::::: -->
<h3>children</h3>
<Header left="i wont show up">
	{#snippet center()}i wont show up{/snippet}
	{#snippet right()}i wont show up{/snippet}

	🟦 Children will override defaults, props, and snippets
</Header>

<!-- boolean 
:::::::::::::::::::::::::::::::: -->
<h3>boolean</h3>
<Header left center={false} right />

<style>
	:global(body) {
		padding: 2vw 10vw;
	}
	h3 {
		font-family: monospace;
		text-transform: uppercase;
		color: gray;
		font-size: 1rem;
		padding: 0.5rem 0;
		border-bottom: 1px solid gray;
	}
</style>
