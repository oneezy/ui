<script>
	import { Indicator } from '$lib';

	let {
		children,
		src,
		href,
		rounded,
		border,
		stacked,
		dot,
		alt,
		size = 'md',
		class: classname,
		onclick,
		...attributes
	} = $props();

	dot = dot && { placement: 'top-right', color: 'gray', size: 'lg', ...dot };

	const sizes = {
		xs: 'w-6 h-6',
		sm: 'w-8 h-8',
		md: 'w-10 h-10',
		lg: 'w-20 h-20',
		xl: 'w-36 h-36',
		none: ''
	};

	let avatarCls = [
		rounded ? 'rounded' : 'rounded-full',
		border ? 'p-1 ring-2 ring-gray-300 dark:ring-gray-500' : '',
		sizes[size] || '',
		stacked ? 'border-2 -ms-4 border-white dark:border-gray-800' : '',
		'bg-gray-100 dark:bg-gray-600 text-gray-600 dark:text-gray-300',
		classname || ''
	]
		.join(' ')
		.trim();
</script>

{#if !src || !!href || children || dot}
	<svelte:element
		this={href ? 'a' : 'div'}
		role={href ? 'link' : 'img'}
		{onclick}
		{href}
		{...attributes}
		class="relative flex items-center justify-center {avatarCls}"
	>
		{#if src}
			<img {alt} {src} class={rounded ? 'rounded' : 'rounded-full'} />
		{:else if children}
			{@render children()}
		{:else}
			<svg
				class="h-full w-full {rounded ? 'rounded' : 'rounded-full'}"
				fill="currentColor"
				viewBox="0 0 16 16"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					fill-rule="evenodd"
					d="M8 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
					clip-rule="evenodd"
				></path>
			</svg>
		{/if}
		{#if dot}
			<Indicator border offset={rounded} {...dot} />
		{/if}
	</svelte:element>
{:else}
	<div role="presentation" {onclick}>
		<img {alt} {src} {...attributes} class={avatarCls} />
	</div>
{/if}
