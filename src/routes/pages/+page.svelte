<script>
	import Title from '$lib/components/atoms/Title/Title.svelte';
	let { data } = $props();
</script>

<Title title="Pages" />

<ul>
	{#each data.summaries as { slug, title }}
		{#if slug === 'home'}
			asdf
		{:else}
			<li><a href="/pages/{slug}">{title}</a></li>
		{/if}
	{/each}
</ul>
