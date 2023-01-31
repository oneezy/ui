<script>
  import { Section, Img, Container, Content, Button, TextAnimate, Logo } from '$ui'

  export let text;
  export let logo;
  export let name = 'Oneezy, Inc.';
  export let bg;
</script>


<Section class="min-h-screen h-screen relative {$$props.class || ''}">
  <Img src="{bg}" />
  <Container class="h-full">
    <Content class="h-full flex flex-col justify-around gap-4">

      <h1 class="text-black dark:text-white text-4xl font-bold sr-only"><slot>{name}</slot></h1>
    
      {#if text}
        <h1 class="text-black dark:text-white text-4xl font-bold"><slot name="name">{name}</slot></h1>
      {:else if logo}
        <Logo logo />

      {:else}
        <h3 class="select-none grid items-center justify-center text-center text-6xl md:text-[14vw] lg:text-[12vw] xl:text-[8vw] tracking-tight font-black">
          <span class="-mb-6">The</span>
          <TextAnimate class="py-6">
            {#if $$slots.title}
              <slot name="title"></slot>
            {:else}
              <slot>Oneezy, Inc.</slot>
            {/if}
          </TextAnimate>
          <span class="-mt-6">Page</span>
        </h3>
      {/if}
      
      <h2 class="text--secondary text-center font-medium text-base md:text-2xl md:mt-10 tracking-wide">
        {#if $$slots.description}
          <slot name="description"></slot>
        {:else}
          My sweet component lib.
        {/if}
      </h2>
    
      <div class="flex flex-col md:flex-row items-center justify-center gap-4">
        <Button href="https://scavengerbot.io" display="hero">Learn More</Button>
        <Button href="https://scavengerbot.io" button="outline" display="hero">Sign Up</Button>
      </div>

    </Content>
  </Container>
</Section>
