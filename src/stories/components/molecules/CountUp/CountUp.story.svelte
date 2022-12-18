<script>
  import { CountUp } from '$lib';

	export let Hst
</script>

<Hst.Story group="components" title="Molecules/CountUp">
  
	<div>
    <CountUp
      initial={100}
      value={1000001}
      duration={1000}
      step={10}
      roundto={100}
      format={true}
    />
  </div>
  
  <div>
    <CountUp
      value={12345.6789}
      duration={1000}
    />
  </div>
  
</Hst.Story>