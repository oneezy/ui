<script>
	import { Section, Container, Divider, Content } from '$lib';

	let bg = 'bg-primary-100';
	let fill = 'fill-primary-100';
	let color = 'text-base';
	let height = '320px';
	let width = '150%';
	let shape = 'tilt';
</script>

<Section class="grid gap-20 text-center">
	<Divider {bg} {fill} {color} {height} {width} {shape}>
		<Content class="py-20" {color}>Tilt</Content>
	</Divider>
	ok...
	<Divider {bg} {fill} {color} {height} {width} {shape} reverse>
		<Content class="py-20" {color}>Tilt</Content>
	</Divider>
	we'll see...
	<Divider {bg} {fill} {color} {height} {width} {shape}>
		<Content class="py-20" {color}>Tilt</Content>
	</Divider>
</Section>

<Section class="grid gap-20">
	<Divider class="bg-base" />
</Section>
