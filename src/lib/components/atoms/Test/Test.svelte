<script>
	let {left, center, right} = $props();
</script>

<div class="header">
	<div class="left">
		{#if left}
			{@render left()}
		{:else}
			left
		{/if}
	</div>
	<div class="center">
		{#if center}
			{@render center()}
		{:else}
			center
		{/if}
	</div>
	<div class="right">
		{#if right}
			{@render right()}
		{:else}
			right
		{/if}
	</div>
</div>

<style>
	.header {
		display: flex;
		justify-content: space-between;
		background-color: #f5f5f5;
		padding: 1em;
		margin: 1rem 0;
	}

	.left,
	.center,
	.right {
		flex: 1;
		text-align: center;
	}
</style>
