<script>
  export let prose = null;
  export let noprose = null;
</script>

<article {...$$restProps} class="mx-auto {$$props.class || ''}

  { /* Prose 
    *************************/
    prose ? 'prose prose-oneezy lg:prose-xl dark:prose-invert' : 
    noprose ? '' : ''
  }">

  <slot />

</article>