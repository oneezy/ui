<script>
	/* KEY:
	======================================================
	⬜ default    ⬛ prop    🟪 snippet    🟦 children
	====================================================== */

	import { Preview, Card } from '$lib';
</script>

<!-- default 
:::::::::::::::::::::::::::::::: -->
<Preview name="default">
	<Card total="3" />
</Preview>

<!-- prop 
:::::::::::::::::::::::::::::::: -->
<Preview name="secondary">
	<Card card="⬛ prop card" neutral />
</Preview>

<!-- children
:::::::::::::::::::::::::::::::: -->
<Preview name="default">
	<Card card="i wont show up">test</Card>
</Preview>
