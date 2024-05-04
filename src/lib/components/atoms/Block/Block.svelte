<script>
	import Section from '$lib/components/atoms/Section/Section.svelte';
	import Container from '$lib/components/atoms/Container/Container.svelte';
	import Content from '$lib/components/atoms/Content/Content.svelte';

	let { children = null, ...props } = $props();
</script>

<Section {...props} class="h-svh pt-20 md:pt-32 md:pb-[10vh] {props.class}">
	<Container class="h-full">
		<Content class="h-full flex flex-col justify-around gap-4">
			{#snippet content()}
				Block Template
			{/snippet}

			{#if children}
				{@render children()}
			{:else}
				{@render content()}
			{/if}
		</Content>
	</Container>
</Section>
