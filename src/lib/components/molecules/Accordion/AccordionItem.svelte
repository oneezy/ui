<script lang="ts">
	import { getAccordionCtx } from './Accordion.svelte';
	import { slide } from 'svelte/transition';
	import type { AccordionItemProps } from './types.js';
	import { Button } from '$lib';
	import SolarAltArrowRightBroken from '~icons/solar/alt-arrow-right-broken';
	import SolarAltArrowDownBroken from '~icons/solar/alt-arrow-down-broken';

	let {
		id = '',
		disabled = false,
		// Root
		base = '',
		spaceY = 'py-2',
		classes = '',
		// Control
		controlBase = 'flex text-start items-center space-x-4 w-full',
		controlHover = 'hover:preset-neutral',
		controlPadding = 'py-2 px-4',
		controlRounded = 'rounded',
		controlClasses = '',
		// Icons
		iconsBase = 'text-2xl text-primary-500-500',
		// Panel
		panelBase = 'text-neutral-500-400',
		panelPadding = 'py-2 px-4',
		panelRounded = '',
		panelClasses = '',
		// Events
		onclick = () => {},
		// Snippets
		control,
		controlLead,
		panel
	}: AccordionItemProps = $props();

	function clickHandler(event: MouseEvent) {
		ctx.toggle(id);
		onclick(event);
	}

	// Context
	const ctx = getAccordionCtx();
</script>

<!-- @component An Accordion child item. -->

<div class="{base} {spaceY} {classes}" data-testid="accordion-item">
	<!-- Control -->
	<Button
		type="button"
		lg
		{id}
		class="{controlBase} {controlHover} {controlPadding} {controlRounded} {controlClasses}"
		aria-expanded={ctx.isOpen(id)}
		aria-controls="accordion-panel-{id}"
		onclick={clickHandler}
		{disabled}
	>
		<!-- Lead -->
		{#if controlLead}
			<div>
				{@render controlLead()}
			</div>
		{/if}

		<!-- Content -->
		<div class="flex-1">
			{@render control()}
		</div>

		<!-- Icons -->
		<div class={iconsBase}>
			{#if ctx.isOpen(id)}
				{#if ctx.iconOpen}
					{@render ctx.iconOpen()}
				{:else}
					<SolarAltArrowDownBroken class="text-primary-500-500" />
				{/if}
			{:else if ctx.iconClosed}
				{@render ctx.iconClosed()}
			{:else}
				<SolarAltArrowRightBroken class="text-neutral-400-500" />
			{/if}
		</div>
	</Button>

	<!-- Panel -->
	{#if panel && ctx.isOpen(id)}
		<div
			class="{panelBase} {panelPadding} {panelRounded} {panelClasses}"
			transition:slide={{ duration: ctx.animDuration }}
			id="accordion-panel-{id}"
			role="region"
			aria-hidden={ctx.isOpen(id)}
			aria-labelledby={id}
		>
			{@render panel()}
		</div>
	{/if}
</div>
