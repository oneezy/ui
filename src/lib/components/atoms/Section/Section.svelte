<script>
	/* Props
	 *************************/
	let { children, id = null, state = null, ...props } = $props();

	/* Private Variables
	 *************************/
	let _default = `relative w-full min-h-[50vh]`;

	// State
	let _normal = `text-black dark:text-white`;
	let _active = `active section--active`;
	let _disabled = `opacity-50 cursor-not-allowed`;
	let _loading = ``;
</script>

<section
	{id}
	{...props}
	class="{_default}

  {/* State
	 *************************/
	state == 'active'
		? _active
		: state == 'disabled'
			? _disabled
			: state == 'loading'
				? _loading
				: state == 'normal'
					? _normal
					: _normal} 
  
  {/* Classes
	 *************************/
	props.class}"
>
	{#snippet content()}
		Section
	{/snippet}

	{#if children}
		{@render children()}
	{:else}
		{@render content()}
	{/if}
</section>
