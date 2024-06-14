<script>
	/* KEY:
	======================================================
	⬜ default    ⬛ prop    🟪 snippet    🟦 children
	====================================================== */
	
  import { Preview, Avatar } from '$lib';
</script>

<!-- default 
:::::::::::::::::::::::::::::::: -->
<Preview name="default">
	<Avatar />
</Preview>

<!-- prop 
:::::::::::::::::::::::::::::::: -->
<Preview name="prop ">
	<Avatar avatar="⬛ prop avatar" />
</Preview>

<!-- snippets
:::::::::::::::::::::::::::::::: -->
<Preview name="snippets">
	<Avatar>
		{#snippet avatar()}🟪 snippet avatar{/snippet}
	</Avatar>
</Preview>

<!-- children
:::::::::::::::::::::::::::::::: -->
<Preview name="children">
	<Avatar avatar="i wont show up">
		🟦 children avatar
	</Avatar>
</Preview>