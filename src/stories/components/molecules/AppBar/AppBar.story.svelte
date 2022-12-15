<script>
  import { AppBar } from '@oneezy/ui';

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