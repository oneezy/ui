<script>
  import { Section, Container, Content, Button, TextAnimate } from '$lib'
</script>


<Section {...$$restProps} class="min-h-screen pt-20 md:pt-32 md:pb-[10vh] {$$props.class || ''}">
  <Container class="h-full bg-blue-500/0">
    <Content class="h-full flex flex-col justify-around gap-4">
      <h1 class="text-black dark:text-white text-4xl font-bold sr-only"><slot>Oneezy, Inc.</slot></h1>
    
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