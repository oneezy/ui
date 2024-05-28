<script>
	/* KEY:
	======================================================
	⬜ default    ⬛ prop    🟪 snippet    🟦 children
	====================================================== */
	
  import { Image } from '$lib';
</script>

<!-- default 
:::::::::::::::::::::::::::::::: -->
<Image />

<!-- prop 
:::::::::::::::::::::::::::::::: -->
<Image image="⬛ prop image" />

<!-- snippets
:::::::::::::::::::::::::::::::: -->
<Image>
	{#snippet image()}🟪 snippet image{/snippet}
</Image>

<!-- children
:::::::::::::::::::::::::::::::: -->
<Image image="i wont show up">
	🟦 children image
</Image>