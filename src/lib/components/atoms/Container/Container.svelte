<script>
  let defaultClass = `container mx-auto px-4 md:py-3 md:px-5 max-w-screen-xl`;
</script>

<div {...$$restProps} class="{ defaultClass } {$$props.class || ''}">
  <slot />
</div>