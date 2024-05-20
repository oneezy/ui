<script>
	// let { children = null, header, main, leftside, rightside, footer, ...props } = $props();
	let { children = null, ...props } = $props();

	// Function to update the sticky elements' top position based on header height, padding, and gap
	function updateStickyPosition() {
		const header = document.querySelector('.header');
		const headerHeight = header.offsetHeight;
		const headerPadding = parseFloat(getComputedStyle(header).paddingBottom);
		const gap = parseFloat(getComputedStyle(document.querySelector('.grid-container')).gap.split(' ')[0]);

		const offset = headerHeight + headerPadding + gap;
		document.documentElement.style.setProperty('--header-height', `${offset}px`);
	}

	// Effect to call updateStickyPosition on mount and window resize
	$effect(() => {
		updateStickyPosition();
		window.addEventListener('resize', updateStickyPosition);

		// Cleanup on unmount
		return () => {
			window.removeEventListener('resize', updateStickyPosition);
		};
	});
</script>

<div {...props} class="grid-container grid min-h-[100dvh] p-4 gap-[var(--grid-gap,1rem)] transition-all duration-500 relative {props.class}">
	{#snippet header()}
		<div>header</div>
	{/snippet}

	{#snippet main()}
		<div>main</div>
	{/snippet}

	{#snippet leftside()}
		<div class="sticky top-[var(--header-height)]">leftside</div>
	{/snippet}

	{#snippet rightside()}
		<div class="sticky top-[var(--header-height)]">rightside</div>
	{/snippet}

	{#snippet footer()}
		<div>footer</div>
	{/snippet}

	<header class="header [grid-area:header] sticky top-0 z-20">
		{#if header}
			{@render header()}
		{:else}
			{@render header()}
		{/if}
	</header>
	<main class="main [grid-area:main] relative z-10">
		{#if main}
			{@render main()}
		{:else}
			{@render main()}
		{/if}
	</main>
	<aside class="leftside [grid-area:leftside]">
		{#if leftside}
			{@render leftside()}
		{:else}
			{@render leftside()}
		{/if}
	</aside>
	<aside class="rightside [grid-area:rightside]">
		{#if rightside}
			{@render rightside()}
		{:else}
			{@render rightside()}
		{/if}
	</aside>
	<footer class="footer [grid-area:footer]">
		{#if footer}
			{@render footer()}
		{:else}
			{@render footer()}
		{/if}
	</footer>
</div>

<style>
	.grid-container {
		grid-template-rows:
			var(--header, auto) var(--leftside, auto) var(--main, 1fr) var(--rightside, auto)
			var(--footer, auto);
		grid-template-areas:
			'header'
			'leftside'
			'main'
			'rightside'
			'footer';
	}

	.grid-container > * {
		@apply bg-white p-4;
	}

	.grid-container > * > * {
		@apply bg-sky-200 transition-all duration-500;
	}

	/* Desktop */
	@media (min-width: 1024px) {
		.grid-container {
			grid-template-columns: var(--leftside, 300px) var(--main, 1fr) var(--rightside, 300px);
			grid-template-rows: var(--header, auto) var(--main, 1fr) var(--footer, auto);
			grid-template-areas:
				'header header header'
				'leftside main rightside'
				'footer footer footer';
		}

		.grid-container:hover {
			--leftside: 0dvw;
			--rightside: 0dvw;
			--grid-gap: 1rem 0;
			/* --grid-gap-x: 1rem 0; */
			/* --grid-gap-y: 1rem 0; */
		}

		.grid-container:hover .leftside > * {
			transform: translateX(-300px);
		}
	}
</style>
