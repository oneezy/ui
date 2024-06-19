<script>
	import { page } from '$app/stores';
	let { bar, slug, href, label, active, state, children, ...props } = $props();

	let classLink = 'p-2 px-4 capitalize';
	let classLinkActive = '';
	let classLinkBar = 'bg-accent absolute right-0 bottom-[-10px] left-0 h-1 w-full rounded-full opacity-0';
	let classLinkBarActive = 'opacity-100';
</script>

{#snippet linkEl()}
	<a
		{...props}
		{href}
		class="relative {classLink} {classLinkActive} {props.class}"
		aria-current={$page.url.pathname === href && $page.url.pathname !== '/' ? true : undefined}
	>
		{#if label}
			{label}
		{:else}
			{@render children()}
		{/if}
		{#if bar}
			<b class="{classLinkBar} bar"></b>
		{/if}
	</a>
{/snippet}

{@render linkEl()}
