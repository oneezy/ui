<script>
	import { Section, Container, Divider, Content } from '$lib';

	let bg = 'bg-primary-200-800';
	let fill = 'fill-primary-200-800';
	let height = '320px';
	let width = '150%';
	let shape = 'tilt';
</script>

<Section class="grid gap-20 text-center">
	<Divider {height} {width} {shape}>
		<Content class="py-20">Tilt</Content>
	</Divider>
	ok...
	<Divider {height} {width} {shape} reverse>
		<Content class="py-20">Tilt</Content>
	</Divider>
	we'll see...
	<Divider {height} {width} {shape}>
		<Content class="py-20">Tilt</Content>
	</Divider>
</Section>

<Section class="grid gap-20">
	<Divider class="bg-base" />
</Section>
