<script>
  import { Container } from '$lib';
	import Colors from './Colors.svelte';
  import Snippets from './Snippets.svelte';
</script>

<!-- Uncomment if you need to generate raw html so tailwind classes can be picked up (until i find better way to do it) -->
<!-- <Snippets /> -->

<Container class="flex items-center justify-center gap-4">
  <div class="flex items-center justify-center text-white text-sm font-mono rounded-full size-24 bg-neutral">neutral</div>
  <div class="flex items-center justify-center text-white text-sm font-mono rounded-full size-24 bg-primary">primary</div>
  <div class="flex items-center justify-center text-white text-sm font-mono rounded-full size-24 bg-secondary">secondary</div>
  <div class="flex items-center justify-center text-white text-sm font-mono rounded-full size-24 bg-accent">accent</div>
</Container>

<!-- Raw HTML Color -->
<Colors />