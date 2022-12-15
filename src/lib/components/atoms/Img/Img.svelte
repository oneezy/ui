<script>
  // import { base } from '$app/paths'
  
  export let alt
  export let src
</script>

<img 
  {...$$restProps} {src} {alt}
  class="max-w-full {$$props.class || ''}" 
/>