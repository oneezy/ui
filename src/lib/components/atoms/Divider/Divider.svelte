<script>
	let {
		children = null,
		height = '',
		color = 'fill-dark dark:fill-lite',
		position = 'bottom',
		shape = '',
		flip = null,
		invert = null,
		...props
	} = $props();
</script>

<div
	class="absolute w-full overflow-hidden z-10"
	style="

  {/* Invert
	 *************************/
	invert == 'true' || invert ? 'transform: rotate(180deg); ' : 'transform: rotate(0deg);'} 

  {/* Position
	 *************************/
	position == 'top' ? 'bottom: -100%;' : position == 'bottom' ? 'top: -100%;' : ''}"
>
	<svg
		class="w-full"
		viewBox="0 0 1200 120"
		preserveAspectRatio="none"
		style="
    
        height: {height}; 
        transform:
      
      {/* Flip
		 *************************/
		flip == 'true' || flip ? 'rotateY(180deg)' : 'rotateY(0deg)'}"
	>
		<!-- Waves -->
		{#if shape == 'waves'}
			<path
				class={color}
				d="M0,92.7V120h1200V24.2c-67.8-23.1-144.3-15.5-214.3,3C906.7,48,823.8,89,743.8,105.8 c-82.3,17.3-168.1,16.3-250.5-0.4c-57.8-11.7-114-31.1-172-41.9C213.6,43.7,102.5,53.8,0,92.7z"
			/>

			<!-- Curve -->
		{:else if shape == 'curve'}
			<path
				class={color}
				d="M741,116.23C291,117.43,0,27.57,0,6V120H1200V6C1200,27.93,1186.4,119.83,741,116.23Z"
			></path>

			<!-- Tilt -->
		{:else if shape == 'tilt'}
			<path class={color} d="M1200,120H0v-16.5L1200,0V120z" />

			<!-- Triangle -->
		{:else if shape == 'triangle'}
			<path class={color} d="M599,5.3L0,120h1200L599,5.3z" />

			<!-- arrow -->
		{:else if shape == 'arrow'}
			<path
				d="M1184.7 85.1 629.5 2a245 245 0 0 0-61.7 0l-555 83.1C4.1 86.4 0 88.1 0 89.8V120l1200-.1V89.7c-2.8-1.6-7-3.3-15.5-4.6h.2z"
			/>

			<!-- Custom -->
		{:else}
			<path
				d="M1184.7 85.1 629.5 2a245 245 0 0 0-61.7 0l-555 83.1C4.1 86.4 0 88.1 0 89.8V120l1200-.1V89.7c-2.8-1.6-7-3.3-15.5-4.6h.2z"
			/>
			<!-- {@render children()} -->
		{/if}
	</svg>
</div>
