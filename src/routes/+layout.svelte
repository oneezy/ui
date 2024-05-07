<script>
	import '$lib/ui.css';
	let { data, children } = $props();
</script>

<nav class="flex items-center justify-center gap-4 p-8 bg-black text-white sticky top-0">
	{#each data.summaries as { slug, title }}
		{#if slug === 'home'}
			<a href="/">Home</a>
		{:else}
			<a href="/pages/{slug}">{title}</a>
		{/if}
	{/each}
</nav>

{@render children()}
