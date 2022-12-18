<script>
  import { AppBar } from '$lib';

	export let Hst
  let position;
</script>

<Hst.Story group="components" title="Molecules/AppBar">

  <AppBar position="top">
    <div slot="left">left</div>
    <div slot="center">center</div>
    <div slot="right">right</div>
  </AppBar>
  
</Hst.Story>