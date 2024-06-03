<script>
	/* KEY:
	======================================================
	⬜ default    ⬛ prop    🟪 snippet    🟦 children
	====================================================== */

	import {Template} from '$lib';
</script>

<section class="grid has-[>*]:bg-red-300">
  <div class="col-span-full">01</div>
  <div class="col-start-1 col-end-3 col-span-full">02</div>
  <div class="">03</div>
  <div class="">04</div>
  <div class="">05</div>
  <div class="">06</div>
  <div class="col-span-2">07</div>
</section>

<!-- 
<Template
	class="bg-blue-500 mb-10 gap-4"               
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
  -->

	<style>
		/* div { background: var(--color-neutral-200-800); padding: 3rem; } */
	</style>