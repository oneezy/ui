<script>
  export let alt = 'the future is here'
  export let src = 'https://mundomods.com/wp-content/uploads/2021/04/bg_retro_wave.png';

  export let img;
  export let bg;
  export let scrim;
  export let position;
</script>

{#if img} 
  <img {...$$restProps} {src} {alt} class="w-full {$$props.class || ''}" />
  
{:else if bg}
  <div class="absolute inset-0 h-full w-full -z-10">
    <img {...$$restProps} {src} {alt} class="absolute inset-0 w-full h-full 

    {  /* Type 
      *************************/
      bg == 'cover' ? 'object-cover' :
      bg == 'contain' ? 'object-contain' : 'object-cover' }

    {  /* Position 
      *************************/
      position == 'left' ? 'object-left' :
      position == 'right' ? 'object-right' : 'object-center' }
      
    {$$props.class || ''}" />

    {#if scrim}
      <div class="absolute inset-0 h-full w-full bg-black" style="opacity: {scrim};"></div>
    {/if}
  </div>
  
{:else}
  <img {...$$restProps} {src} {alt} class="w-full {$$props.class || ''}" />

{/if}