<script>
  import { Nav } from '$lib';

	export let Hst
  
  let links = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact', }
  ];
  
</script>

<Hst.Story group="components" title="Molecules/Nav">
  
	<Nav {links} />
  
</Hst.Story>