<script>
	/* KEY:
	======================================================
	⬜ default    ⬛ prop    🟪 snippet    🟦 children
	====================================================== */
	
  import { Preview, Indicator } from '$lib';
</script>

<!-- default 
:::::::::::::::::::::::::::::::: -->
<Preview name="default">
	<Indicator />
</Preview>

<!-- prop 
:::::::::::::::::::::::::::::::: -->
<Preview name="prop ">
	<Indicator indicator="⬛ prop indicator" />
</Preview>

<!-- snippets
:::::::::::::::::::::::::::::::: -->
<Preview name="snippets">
	<Indicator>
		{#snippet indicator()}🟪 snippet indicator{/snippet}
	</Indicator>
</Preview>

<!-- children
:::::::::::::::::::::::::::::::: -->
<Preview name="children">
	<Indicator indicator="i wont show up">
		🟦 children indicator
	</Indicator>
</Preview>