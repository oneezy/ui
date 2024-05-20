<script>
	// Define the props for the button component
	let {
		icon = null,
		type = 'button',
		href = null,
		disabled = false,
		variant = 'primary',
		children,
		...props
	} = $props();

	// Determine the Tailwind classes based on the variant
	let defaultClass = $state('text-white focus:outline-none');
	let buttonClass = $state('px-4 py-2 font-bold rounded');
	let iconClass = $state('p-4 block text-white aspect-square rounded-full');

	if (variant === 'primary') {
		defaultClass += ' bg-blue-500 hover:bg-blue-700';
	} else if (variant === 'secondary') {
		defaultClass += ' bg-gray-500 hover:bg-gray-700';
	} else if (variant === 'danger') {
		defaultClass += ' bg-red-500 hover:bg-red-700';
	} else {
		defaultClass += ' bg-gray-300 hover:bg-gray-500';
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
