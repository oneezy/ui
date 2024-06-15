<script>
	import { Preview, Stat, Mask } from '$lib';
	import MaterialSymbolsKidStar from '~icons/material-symbols/kid-star';
</script>

<!-- default 
:::::::::::::::::::::::::::::::: -->
<Preview name="default">
	<Stat neutral />
</Preview>

<!-- left / right
:::::::::::::::::::::::::::::::: -->
<Preview name="left / right" class="gap-20">
	<Stat titleX="3" descriptionX="1" icon="⬅️" title="icon left" value="22%" left />
	<Stat titleX="2" descriptionX="1" icon="➡️" title="icon right" value="22%" right />
</Preview>

<div class="svg-gradient">test</div>
<!-- child icon 
:::::::::::::::::::::::::::::::: -->
<Preview name="child icon">
	<Stat class="svg-gradient">
		<MaterialSymbolsKidStar class="svg-gradient" />
	</Stat>
</Preview>

<style>
	.svg-gradient {
		background: linear-gradient(to right, blue, green, indigo);
		-webkit-background-clip: text;
		background-clip: text;
		color: transparent;
		display: inline-block;
		mask-image: linear-gradient(to right, blue, green, indigo);
		mask-size: cover;
		-webkit-mask-image: linear-gradient(to right, blue, green, indigo);
		-webkit-mask-size: cover;
	}
</style>
