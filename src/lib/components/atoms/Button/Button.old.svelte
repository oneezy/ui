<script>
	/* Props
	 *************************/
	let {
		href,
		display = 'normal',
		button,
		position,
		state,
		icon,
		box,
		siz = 42,
		...props
	} = $props();

	let _default = `
    flex 
    w-full lg:w-auto 
    font-semibold relative whitespace-nowrap overflow-hidden no-underline`;

	let _focusButton = `
    focus:outline-none focus:ring-4 focus:ring-offset-2 
    focus:ring-lite-4/50 focus:ring-offset-lite 
    dark:focus:ring-offset-dark dark:focus:ring-dark-3`;

	let _focusText = `
    focus:outline-none focus:ring-0 focus:ring-offset-0
    focus:text-dark
    focus:headerActive:text-lite

    dark:focus:text-lite
    dark:focus:headerActive:text-dark`;

	let _focusIcon = `
    focus:outline-none focus:ring-0 focus:ring-offset-0
    focus:fill-dark-4
    focus:headerActive:fill-dark-4

    dark:focus:fill-lite-6
    dark:focus:headerActive:fill-lite-6
  `;

	/* Private Variables
	 *************************/

	// Display
	let _none = ``; // default
	let _compact = `h-8 px-4 gap-4 text-sm`;
	let _normal = `h-12 px-6 gap-4 text-md`; // default
	let _hero = `h-16 px-12 gap-4 text-2xl`;

	// Button
	let _icon = `${_focusIcon} px-0 gap-0 h-auto w-auto bg-dark/0 dark:bg-lite/0 fill-dark dark:fill-lite hover:bg-dark/0 dark:hover:bg-lite/0`;
	let _text = `${_focusText} bg-transparent fill--primary text--primary`;
	let _outline = `${_focusButton} bg-white/0 dark:bg-black/0 fill--primary text--primary border--primary text-dark dark:text-lite`;
	let _filled = `${_focusButton} bg-dark 
                      text-lite
                      fill-lite
                      hover:bg-dark-2

                      dark:headerActive:bg-dark
                      dark:headerActive:text-lite
                      dark:headerActive:fill-lite
                      dark:headerActive:hover:bg-dark-2

                      dark:bg-lite 
                      dark:text-dark 
                      dark:fill-dark 
                      dark:hover:bg-lite-2 

                      headerActive:bg-lite 
                      headerActive:text-dark 
                      headerActive:fill-dark 
                      headerActive:hover:bg-lite-2`; // default

	// State
	let _disabled = ``;
	let _loading = ``;
</script>

{#snippet content()}
	Button
{/snippet}

{#if href}
	<a
		{...props}
		{href}
		class="{_default} {props.class}

    {/* Icon
		 *************************/
		icon && position == 'left'
			? ''
			: icon && position == 'right'
				? 'justify-between'
				: icon
					? _icon
					: ''} 

    {/* Display
		 *************************/
		display == 'none'
			? _none
			: display == 'compact'
				? _compact
				: display == 'hero'
					? _hero
					: display == 'normal'
						? _normal
						: _normal}

    {/* Type
		 *************************/
		button == 'text'
			? _text
			: button == 'outline'
				? _outline
				: button == 'icon'
					? _icon
					: button == 'filled'
						? _filled
						: _filled} 

    {/* State
		 *************************/
		state == 'disabled' ? _disabled : state == 'loading' ? _loading : ''}"
	>
		{#if children}
			{@render children()}
		{:else}
			{@render content()}
		{/if}
	</a>
{:else}
	<button
		{...props}
		class="fill--primary {_default} {props.class}

    {/* Icon
		 *************************/
		icon && position == 'left'
			? ''
			: icon && position == 'right'
				? 'justify-between'
				: icon
					? _icon
					: ''} 

    {/* Display
		 *************************/
		display == 'none'
			? _none
			: display == 'compact'
				? _compact
				: display == 'hero'
					? _hero
					: display == 'normal'
						? _normal
						: _normal}

    {/* Type
		 *************************/
		button == 'text'
			? _text
			: button == 'outline'
				? _outline
				: button == 'icon'
					? _icon
					: button == 'filled'
						? _filled
						: _filled} 

    {/* State
		 *************************/
		state == 'disabled' ? _disabled : state == 'loading' ? _loading : ''}"
	>
		{#if children}
			{@render children()}
		{:else}
			{@render content()}
		{/if}
	</button>
{/if}
