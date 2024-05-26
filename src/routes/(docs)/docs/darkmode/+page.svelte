<script>
	/* KEY:
	======================================================
	⬜ default    ⬛ prop    🟪 snippet    🟦 children
	====================================================== */

	import {Darkmode} from '$lib';
</script>

<!-- default 
:::::::::::::::::::::::::::::::: -->
<Darkmode />

<!-- prop 
:::::::::::::::::::::::::::::::: -->
<Darkmode darkmode="⬛ prop darkmode" />

<!-- snippets
:::::::::::::::::::::::::::::::: -->
<Darkmode>
	{#snippet darkmode()}🟪 snippet darkmode{/snippet}
</Darkmode>

<!-- children
:::::::::::::::::::::::::::::::: -->
<Darkmode darkmode="i wont show up">🟦 children darkmode</Darkmode>
