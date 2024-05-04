<script>
  import { Title } from '$ui'

  export let href = '/';
  export let text = '';
  export let alt = '';
  export let src = null;
  export let svg = null;
  export let width = '100';
  export let height = '100';
</script>

<a href={href} class="flex items-center justify-center focus-within:ring-0 focus-within:ring-offset-0 focus-within:outline-none focus-within:outline-offset-0 { $$props.class || ''}">
  {#if text}
    <Title>{text}</Title>

  {:else if src}
    <img src={src} width={width} height={height} alt={alt}>

  {:else if svg}
    <svg {...$$restProps} xmlns="http://www.w3.org/2000/svg" xml:space="preserve" preserveAspectRatio="xMidYMid meet" viewBox="0 0 {width} {height}" width="100%">
      <slot></slot>
    </svg>
    
  <!-- Custom -->
  {:else}
    <slot>LOGO</slot>

  {/if}
</a>

<!-- viewBox="0 0 187 33" width="187px" height="33px" -->