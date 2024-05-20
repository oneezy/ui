<script>
	/* KEY:
	======================================================
	⬜ default    ⬛ prop    🟪 snippet    🟦 children
	====================================================== */

	import {Template} from '$lib';
</script>

<Template
	class="bg-blue-500 mb-10"
	header="header"
	main="main"
	leftside="leftside"
	rightside="rightside"
	footer="footer"
/>

<Template class="bg-black mb-10">
	{#snippet header()}header{/snippet}
	{#snippet main()}main{/snippet}
	{#snippet leftside()}leftside{/snippet}
	{#snippet rightside()}rightside{/snippet}
	{#snippet footer()}footer{/snippet}
</Template>

<Template class="bg-gray-300 mb-10" />
 