<script>
	import { Grid } from '$lib';
</script>

{#snippet countup(n, current = 1)}
	{#if current <= n}
		<div class="bg-blue-500">{current}</div>
		{@render countup(n, current + 1)}
	{/if}
{/snippet}

<!-- 
<Grid class="gap-4 grid-cols-3 grid-rows-3 mb-10">
	{@render countup(20)}
</Grid> -->

<Grid class="bg-gray-300 grid grid-cols-5 grid-rows-5 gap-4 p-4 min-h-svh">
	<div class="p-4 row-span-5">
		<span class="bg-green-300 place-self-stretch">1</span>
	</div>
	<div class="p-4 col-span-4 row-span-5">
		<span class="bg-green-300">2</span>
	</div>
</Grid>

<!-- 
<div class="grid place-items-center isolate bg-blue-200 relative grid-flow-dense h-dvh">
	<div class="col-span-full row-span-full">This is a grid</div>
	<div
		class="col-span-full row-span-full place-self-stretch -z-10 media bg-gray-300 h-full overflow-hidden"
	>
		<img src="https://picsum.photos/777/777" class="h-full w-full object-cover" alt="random" />
	</div>
</div> -->


<style>
	div {
		@apply min-h-24 grid place-items-center text-[5vw] bg-white;
	}
</style>
