<script>
	import { Base, Link } from '$lib';
	let { children = null, ...props } = $props();
	import IconDentistOutline from '~icons/fluent/dentist-20-regular';
	import IconDentistFilled from '~icons/fluent/dentist-20-filled';
</script>

{#snippet content()}
	<Link
		href="#"
		class="rounded-box border-neutral-200-800 bg-neutral-50-950 grid align-center place-items-center items-center justify-center text-center max-w-xs border p-6 shadow"
	>
		<IconDentistFilled class="text-primary-400-500 size-14" />
		<h3 class="mb-3 text-2xl font-medium">Meet Our Doctor</h3>
		<p class="text-neutral-500-300">
			Trusted local dentist in Beaumont, providing expert and compassionate
			care.
		</p>
	</Link>
{/snippet}
<Base {...props} class="{props.class}">
	{#if children}
		{@render children()}
	{:else}
		{@render content()}
	{/if}
</Base>
