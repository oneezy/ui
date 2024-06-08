<script>
	import { observer, isObserving } from '$lib';
	import { Container } from '$lib';

	let target = $state(null);
	let root = $state(null);
	let isIntersecting = $state(false);

	isObserving(
		() => target,
		() => root,
		(value) => (isIntersecting = value)
	);

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
		children = null,
		...props
	} = $props();

	let classHeader =
		'header w-full transition-all duration-500 z-20 translate-y-0 fixed top-0';
	let classContainer =
		'grid grid-cols-[auto_1fr_auto] justify-center gap-4 md:grid-cols-[200px_1fr_200px] py-3 transition-opacity duration-500';
	let classLeft = 'self-center justify-self-start';
	let classCenter = 'hidden h-full items-center justify-center md:flex';
	let classRight = 'self-center justify-self-end';

	// active
	let classInactive = '';
	let classActive = 'translate-y-5';
</script>

<div
	{...props}
	class="{classHeader} 
	{isIntersecting ? classInactive : classActive} {props.class}"
>
	<Container
		class="{children ? '' : classContainer} {isIntersecting
			? ''
			: 'preset-glass'}"
	>
		{#if children}
			{@render children()}
		{:else}
			<section class="{classLeft} {leftClass}">
				{#if typeof left === 'function'}{@render left()}{:else}{left}{/if}
			</section>
			<section class="{classCenter} {centerClass}">
				{#if typeof center === 'function'}{@render center()}{:else}{center}{/if}
			</section>
			<section class="{classRight} {rightClass}">
				{#if typeof right === 'function'}{@render right()}{:else}{right}{/if}
			</section>
		{/if}
	</Container>
</div>

<hr class="border-0 pb-20" bind:this={target} />
