<script>
	import {Section, Container, Divider, Content, Grid} from '$lib';

	let bg = 'bg-sky-500';
	let fill = 'fill-sky-500';
	let color = 'text-white';
	let height = '320px';
	let width = '150%';
	let shape = 'tilt';
</script>

<Section class="grid gap-20 text-center">
	<Divider {bg} {fill} {color} {height} {width} {shape}>
		<Content class="py-20">Tilt</Content>
	</Divider>
	ok...
	<Divider {bg} {fill} {color} {height} {width} {shape} reverse>
		<Content class="py-20">Tilt</Content>
	</Divider>
	we'll see...
	<Divider {bg} {fill} {color} {height} {width} {shape}>
		<Content class="py-20">Tilt</Content>
	</Divider>
</Section>

<Section class="grid gap-20">
	<Divider class="bg-yellow-300" />
	<Divider class="bg-yellow-300" />
	<Divider class="bg-yellow-300" />
	<Divider class="bg-yellow-300" />
</Section>
