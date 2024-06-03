<script>
	let {
		left = '⬜ header left',
		center = '⬜ header center',
		right = '⬜ header right',
		primary = false,
		headerClass,
		containerClass,
		leftClass,
		centerClass,
		rightClass,
		secondary = false,
		neutral = false,
		glass = true,
		children = null,
		...props
	} = $props();

	// Define default class variables
	let defaultHeaderClass = $state('header');
	let defaultContainerClass = $state('container grid grid-cols-[auto_1fr_auto] justify-center gap-4 md:grid-cols-[200px_1fr_200px]');
	let defaultLeftClass = $state('self-center justify-self-start');
	let defaultCenterClass = $state('hidden h-full items-center justify-center md:flex');
	let defaultRightClass = $state('self-center justify-self-end');
	
</script>

<div {...props} class="{defaultHeaderClass} {props.class}">
	<div class="{children ? '' : defaultContainerClass + ' ' + containerClass}">
		{#if children}
			{@render children()}
		{:else}
			<section class="{defaultLeftClass} {leftClass}">
				{#if typeof left === 'function'}{@render left()}{:else}{left}{/if}
			</section>
			<section class="{defaultCenterClass} {centerClass}">
				{#if typeof center === 'function'}{@render center()}{:else}{center}{/if}
			</section>
			<section class="{defaultRightClass} {rightClass}">
				{#if typeof right === 'function'}{@render right()}{:else}{right}{/if}
			</section>
		{/if}
	</div>
</div>
