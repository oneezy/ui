<script>
  import { Intro } from '$lib';
  import { fly, fade } from 'svelte/transition'

  // window.requestAnimationFrame = requestAnimationFrame;

	export let Hst
</script>

<Hst.Story group="components" title="Atoms/Intro" layout={{ type: 'single', iframe: false }}>
  
	<Intro>
    <div class="bg-black text-white dark:bg-white dark:text-black will-change-auto">
      I'll transition when the page loads!
    </div>
  </Intro>
  
</Hst.Story>