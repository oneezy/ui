<script>
	import { Section, Title } from '$lib';

	const shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];
	let name = $state('primary');

	function getTextClass(name, light, dark) {
		let lightText = light <= 500 ? 950 : 50;
		let darkText = dark <= 500 ? 950 : 50;
		return `text-${name}-${lightText}-${darkText}`;
	}

	let href = 'https://oneezy.com';
	let classes =
		'preview rounded-lg flex min-h-[6rem] container flex-wrap items-center justify-center gap-2 overflow-x-hidden p-4 text-center font-mono text-sm';
</script>

{#snippet color(name, light, dark, textClass)}
	<div class="card bg-{name}-{light}-{dark} {textClass}">{name} {light}/{dark}</div>
{/snippet}

{#snippet createPalette(name)}
	{#each shades as light}
		{#each shades as dark}
			{@render color(name, light, dark, getTextClass(name, light, dark))}
		{/each}
	{/each}
{/snippet}

<Section class="mb-96">
	<Title subtitle="neutral" />
	<div class="{classes} card grid grid-cols-11 gap-4">
		{@render createPalette('neutral')}
	</div>
	<Title subtitle="primary" />
	<div class="{classes} card grid grid-cols-11 gap-4">
		{@render createPalette('primary')}
	</div>
	<Title subtitle="secondary" />
	<div class="{classes} card grid grid-cols-11 gap-4">
		{@render createPalette('secondary')}
	</div>
	<Title subtitle="accent" />
	<div class="{classes} card grid grid-cols-11 gap-4">
		{@render createPalette('accent')}
	</div>
</Section>


<style>
	.preview {
		border: 1px solid var(--color-neutral-200);
		background-image: repeating-linear-gradient(
			45deg,
			var(--color-neutral-100),
			var(--color-neutral-100) 13px,
			var(--color-neutral-200) 13px,
			var(--color-neutral-200) 14px
		);

		background-size: 40px 40px;
	}
</style>