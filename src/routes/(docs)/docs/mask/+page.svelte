<script>
	import { Preview, Mask, Divider, Effect } from '$lib';
	import Star from '~icons/material-symbols/kid-star';
</script>

<!-- Default -->
<Preview name="default">
	<Mask />
</Preview>

<!-- Default -->
<Preview name="default">
	<Mask>
		<Star />
	</Mask>
</Preview>

<!-- glass cut-out -->
<Preview name="glass cut-out">
	<Effect
		front
		animate
		repeat
		gradient="var(--color-secondary), var(--color-primary), var(--color-secondary)"
		linear="to right"
	/>
	<Mask class="h-full w-full" mask="/shapes/waves.svg" bg="preset-glass">
		<div class="h-[500px] p-10">asdfadsf</div>
	</Mask>
</Preview>

<!-- divider -->
<Preview name="divider">
	<Mask class="" src="https://picsum.photos/1024/768" mask="/shapes/waves.svg" size="100% 240px" />
</Preview>

<!-- photo -->
<Preview name="photo">
	<Mask class="w-full" src="https://picsum.photos/1024/768" mask="/masks/rounded.svg" />
</Preview>
