<script>
	/* KEY:
	======================================================
	⬜ default    ⬛ prop    🟪 snippet    🟦 children
	====================================================== */
	
  import { Template } from '$lib';
</script>

<!-- default 
:::::::::::::::::::::::::::::::: -->
<Template />

<!-- prop 
:::::::::::::::::::::::::::::::: -->
<Template template="⬛ prop template" />

<!-- snippets
:::::::::::::::::::::::::::::::: -->
<Template>
	{#snippet template()}🟪 snippet template{/snippet}
</Template>

<!-- children
:::::::::::::::::::::::::::::::: -->
<Template template="i wont show up">
	🟦 children template
</Template>