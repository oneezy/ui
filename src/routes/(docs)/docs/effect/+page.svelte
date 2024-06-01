<script>
	/* KEY:
	======================================================
	⬜ default    ⬛ prop    🟪 snippet    🟦 children
	====================================================== */
	
  import { Effect } from '$lib';
</script>

<!-- default 
:::::::::::::::::::::::::::::::: -->
<Effect />

<!-- prop 
:::::::::::::::::::::::::::::::: -->
<Effect effect="⬛ prop effect" />

<!-- snippets
:::::::::::::::::::::::::::::::: -->
<Effect>
	{#snippet effect()}🟪 snippet effect{/snippet}
</Effect>

<!-- children
:::::::::::::::::::::::::::::::: -->
<Effect effect="i wont show up">
	🟦 children effect
</Effect>