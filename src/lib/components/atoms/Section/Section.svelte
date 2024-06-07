<script>
	import { Title } from '$lib';

	let { title, tagline, children = null, id = null, ...props } = $props();
</script>

{#snippet titleText(name)}
	<Title />
{/snippet}
<section {...props} {id} class={props.class}>
	{#if children}
		{@render children()}
	{:else}
		{@render titleText()}
	{/if}
</section>
