<script>
  import { onMount } from 'svelte'
  import './bg.css'

	export let isPlaying = null;

  // wait for a bit...
  function wait(time = 250) {
    setTimeout(() => {
      isPlaying = true
    }, time);
  }

  // start animation after page load
	onMount(() => {
    wait();
	});

  // pause animation when user leaves
	function handleBlur(e) {
    isPlaying = false
	}

  // start animation when user returns
	function handleFocus(e) {
    isPlaying = true
	}

  // pause animation when user scrolls
  // start animation when user stops scrollingS
  function handleScroll(e) {
    isPlaying = false
    wait()
  }

  // pause animation when user resizes window
  // start animation when user stops resizing window
  function handleResize(e) {
    isPlaying = false
    wait()
  }
</script>

<svelte:window on:blur={handleBlur} on:focus={handleFocus} on:scroll={handleScroll} on:resize={handleResize} />

<div 
  {...$$restProps}
  class="{`tron-grid-wrapper will-change-scroll w-full h-full -z-10 pointer-events-none absolute left-0 top-0 right-0 overflow-hidden ${$$props.class || ''}`}">

  <!-- Scrim -->
  <div class="
    absolute 
    z-[-100] 
    h-full 
    w-full">
  </div>
  
  <!-- Blue Glow -->
  <span class="tron-glow tron-glow--blue hidden dark:block
    
    before:rotate-[-15deg]
    before:rounded-bl-[25%]
    before:rounded-br-[25%]
    before:rounded-tl-[100%]
    before:rounded-tr-[100%]
    
    before:absolute                         after:absolute 
    before:z-[10]                           after:z-[10] 
    before:pointer-events-none              after:pointer-events-none 
    before:mix-blend-normal                 after:mix-blend-normal 
    before:will-change-[filter]             after:will-change-[filter]
    before:blur-[125px]                     after:blur-[125px]

    before:w-1/4                            after:w-[40%]
    before:h-[900px]                        after:h-[422px]
    before:left-[-12.5%]                    after:left-0
    before:top-[calc(50%-900px/2+151px)]    after:top-[calc(50%-422px/2+298px)]

    before:opacity-20                       after:opacity-50
    before:bg-gradient-to-b                 after:bg-gradient-to-b
    before:from-brand-primary-4             after:from-brand-primary/20
    before:to-brand-primary-7/40            after:to-brand-primary/40">
  </span>

  <!-- Red Glow -->
  <span class="tron-glow tron-glow--red hidden dark:block

    before:rotate-[15deg]
    before:rounded-bl-[25%]
    before:rounded-br-[25%]
    before:rounded-tl-[100%]
    before:rounded-tr-[100%]
    
    before:absolute                         after:absolute 
    before:z-[10]                           after:z-[10] 
    before:pointer-events-none              after:pointer-events-none 
    before:mix-blend-normal                 after:mix-blend-normal 
    before:will-change-[filter]             after:will-change-[filter]
    before:blur-[125px]                     after:blur-[125px]

    before:w-1/4                            after:w-[40%]
    before:h-[900px]                        after:h-[422px]
    before:right-[-12.5%]                   after:right-0
    before:top-[calc(50%-900px/2+151px)]    after:top-[calc(50%-422px/2+298px)]

    before:opacity-20                       after:opacity-25
    before:bg-gradient-to-b                 after:bg-gradient-to-b
    before:from-fuchsia-300/40            after:from-fuchsia-300/40
    before:to-rose-600                    after:to-rose-600">
  </span>

  <!-- Tron Gradient -->
  <div class="
    absolute 
    inset-0 
    w-full
    h-full
    bg-gradient-to-b 
    from-[white_var(--tronGradientFrom)]
    via-[white_var(--tronGradientVia)]
    to-[transparent_var(--tronGradientTo)]
    
    dark:from-[black_var(--tronGradientFrom)]
    dark:via-[black_var(--tronGradientVia)]
    dark:to-[transparent_var(--tronGradientTo)]">
  </div>

  <!-- Tron Perspective -->
  <div class="-z-10 absolute inset-0 overflow-hidden [perspective:1000px] md:[perspective:1000px] will-change-[perspective]">

    <!-- Tron Grid -->
    <div class="absolute z-[50] inset-0 [transform:rotateX(var(--tronGridRotate))] will-change-scroll"> <!-- will-change-[transform,scroll-position] -->
      <div class="tron-grid 

      {  /* Play Animation 
        *************************/
        isPlaying ? 'tron-grid--playing' : 'tron-grid--paused' }
      
        flex
        items-center
        justify-center
        overflow-hidden

        absolute
        inset-y-[-100%]
        inset-x-0

        w-[200vw]
        ml-[-50%]
        translate-y-0

        bg-gradient-to-r
        from-[color:var(--tronColorLeft)_var(--tronFadeLeft)]
        via-transparent
        to-[color:var(--tronColorRight)_var(--tronFadeRight)]

        [mask-size:var(--tronSquareWidth)_var(--tronSquareHeight)]
        [mask-repeat:repeat]
        [mask-position:50%_0]
        [mask-image:linear-gradient(90deg,#000_var(--tronLineVertical),transparent_0),linear-gradient(180deg,#000_var(--tronLineHorizontal),transparent_0)]">
      </div>
    </div>
  </div>
  
  <!-- Bottom Fade -->
  <span class="z-[100] absolute bottom-0 left-0 h-48 w-full bg-gradient-to-t from-white dark:from-black to-transparent"></span>
</div>