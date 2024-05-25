<script>
	// Define the props for the button component
	let {
		icon = null,
		type = 'button',
		href = null,
		disabled = false,
		primary,
		secondary,
		children,
		...props
	} = $props();

	// Determine the Tailwind classes based on the variant
	let defaultClass = $state('text-white focus:outline-none');
	let buttonClass = $state('px-4 py-2 font-bold rounded');
	let iconClass = $state('p-4 block text-white aspect-square rounded-full');

	let primaryClass = ` bg-blue-500 hover:bg-blue-700`;
	let secondaryClass = ` bg-gray-500 hover:bg-gray-700`;
	let disabledClass = ` opacity-50 cursor-not-allowed`;

	if (primary) {
		defaultClass += `${primaryClass}`;
	} else if (secondary) {
		defaultClass += `${secondaryClass}`;
	} else {
		defaultClass += `${primaryClass}`;
	}

	if (disabled) {
		defaultClass += ' opacity-50 cursor-not-allowed';
	}
</script>

<!-- The button element with dynamic classes and props -->
{#if href}
	<a
		{...props}
		{href}
		{icon}
		class="{icon ? iconClass : buttonClass} {defaultClass} {props.class}"
		{disabled}
	>
		{@render children()}
	</a>
{:else}
	<button
		{...props}
		{type}
		{icon}
		class="{icon ? iconClass : buttonClass} {defaultClass} {props.class}"
		{disabled}
	>
		{@render children()}
	</button>
{/if}
