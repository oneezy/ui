<script>
  import { Container } from '$lib'
  export let position = 'top';

  let _top    = 'top-0 left-0 right-0 w-full'
  let _bottom = 'bottom-0 left-0 right-0 w-full'
  let _left   = 'top-0 left-0 bottom-0'
  let _right  = 'top-0 right-0 bottom-0'
</script>

<header {...$$restProps} class="fixed z-10 {$$props.class || ''}

{  /* Icon 
  *************************/
  position == 'top' ? _top : 
  position == 'bottom' ? _bottom : 
  position == 'left' ? _left : 
  position == 'right' ? _right : _top }">

  <div class="
    backdrop-blur-md
    pointer-events-none 
    absolute 
    z-[-1] 
    h-full 
    w-full 
    bg-white/80
    dark:bg-black/50">
  </div>

 
  {#if $$slots.left || $$slots.center || $$slots.right}
    <Container class="header-container flex items-center justify-center min-h-[64px] px-4 md:py-3 md:px-5">
      <section class="flex-1 flex justify-start relative"><slot name="left"></slot></section>
      <section class="grow flex justify-center relative"><slot name="center"></slot></section>
      <section class="flex-1 flex justify-end relative"><slot name="right"></slot></section>
    </Container>

  {:else}
    <Container class="header-container">
      <slot />
    </Container>
  {/if}

</header>