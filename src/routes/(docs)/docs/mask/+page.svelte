<script>
	import { Preview, Mask, Divider, Effect } from '$lib';
</script>

<!-- Default -->
<Preview name="default">
	<Mask />
</Preview>


<!-- glass cut-out -->
<Preview name="glass cut-out">
	<Effect front animate repeat
		gradient="var(--color-secondary), var(--color-primary), var(--color-secondary)"
		linear="to right"
	/>
	<Mask
		class="w-full h-full"
		mask="/shapes/waves.svg"
		bg="preset-glass"
	>
		<div class="p-10 h-[500px]">asdfadsf</div>
	</Mask>
</Preview>


<!-- divider -->
<Preview name="divider">
	<Mask
		class=""
		src="https://picsum.photos/1024/768"
		mask="/shapes/waves.svg"
		size="100% 240px"
	/>
</Preview>


<!-- photo -->
<Preview name="photo">
	<Mask class="w-full" src="https://picsum.photos/1024/768" mask="/masks/rounded.svg" />
</Preview>