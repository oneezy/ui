<script>
  export let height;
  export let color = 'fill-lite dark:fill-dark';
  export let position = 'bottom';
  export let shape = 'waves';
  export let flip = null;
  export let invert = null;
</script>

<div 
  class="absolute w-full overflow-hidden" style="

  { /* Invert 
    *************************/
    invert == 'true' || invert ? 'transform: rotate(180deg); ' : 'transform: rotate(0deg);'} 

  { /* Position 
    *************************/
    position == 'top' ? 'top: 0;' : 
    position == 'bottom' ? 'bottom: 0;' : '' }">

    <svg class="w-full" viewBox="0 0 1200 120" preserveAspectRatio="none" style="
    
        height: {height}; 
        transform:
      
      { /* Flip 
        *************************/
        flip == 'true' || flip ? 'rotateY(180deg)' : 'rotateY(0deg)'}">

      <!-- Waves -->
      {#if shape == 'waves'}
      <path class="{color}" d="M0,92.7V120h1200V24.2c-67.8-23.1-144.3-15.5-214.3,3C906.7,48,823.8,89,743.8,105.8 c-82.3,17.3-168.1,16.3-250.5-0.4c-57.8-11.7-114-31.1-172-41.9C213.6,43.7,102.5,53.8,0,92.7z"/>
      
      <!-- Curve -->
      {:else if shape == 'curve'}
      <path class="{color}" d="M741,116.23C291,117.43,0,27.57,0,6V120H1200V6C1200,27.93,1186.4,119.83,741,116.23Z"></path>
      
      <!-- Tilt -->
      {:else if shape == 'tilt'}
      <path class="{color}" d="M1200,120H0v-16.5L1200,0V120z"/>
      
      <!-- Triangle -->
      {:else if shape == 'triangle'}
      <path class="{color}" d="M599,5.3L0,120h1200L599,5.3z"/>

      <!-- Waves -->
      {:else}
      <path class="{color}" d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
      {/if}
    </svg>

</div>