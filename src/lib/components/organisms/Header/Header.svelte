<script>
  import { Container } from '$lib'

  export let position = 'top';

  let _containerClass = `header-container flex items-center justify-center min-h-[64px]`
</script>

<header {...$$restProps} class="header fixed w-full left-0 right-0 z-10 {$$props.class || ''}

{  /* Icon 
  *************************/
  position == 'top' ? 'top-0' : 
  position == 'bottom' ? 'bottom-0' : 'top-0' }">

  <div class="backdrop-blur-md pointer-events-none absolute z-[-1] h-full w-full bg-white/80 dark:bg-black/50"></div>

 
  {#if $$slots.left || $$slots.center || $$slots.right}
  <Container class="{_containerClass}">
    <section class="flex-1 flex justify-start relative"><slot name="left">left</slot></section>
    <section class="grow flex justify-center relative"><slot name="center">center</slot></section>
    <section class="flex-1 flex justify-end relative"><slot name="right">right</slot></section>
  </Container>

  {:else}
  <Container class="{_containerClass}">
    <slot />
  </Container>
  {/if}

</header>