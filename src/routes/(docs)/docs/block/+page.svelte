<script>
	/* KEY:
	======================================================
	⬜ default    ⬛ prop    🟪 snippet    🟦 children
	====================================================== */

	import { Preview, Block } from '$lib';
</script>

<!-- default 
:::::::::::::::::::::::::::::::: -->
<Preview name="default">
	<Block primary total="3" />
</Preview>

<!-- prop 
:::::::::::::::::::::::::::::::: -->
<Preview name="prop ">
	<Block block="⬛ prop block" />
</Preview>

<!-- snippets
:::::::::::::::::::::::::::::::: -->
<Preview name="snippets">
	<Block>
		{#snippet block()}🟪 snippet block{/snippet}
	</Block>
</Preview>

<!-- children
:::::::::::::::::::::::::::::::: -->
<Preview name="children">
	<Block block="i wont show up">🟦 children block</Block>
</Preview>
