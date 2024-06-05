<script>
	/* KEY:
	======================================================
	⬜ default    ⬛ prop    🟪 snippet    🟦 children
	====================================================== */
	
  import { Card } from '$lib';
</script>

<!-- default 
:::::::::::::::::::::::::::::::: -->
<Card />

<!-- prop 
:::::::::::::::::::::::::::::::: -->
<Card card="⬛ prop card" />

<!-- snippets
:::::::::::::::::::::::::::::::: -->
<Card>
	{#snippet card()}🟪 snippet card{/snippet}
</Card>

<!-- children
:::::::::::::::::::::::::::::::: -->
<Card card="i wont show up">
	🟦 children card
</Card>