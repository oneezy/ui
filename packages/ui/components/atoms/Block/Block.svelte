<script>
  import { Section, Container, Content } from '@oneezy/ui'
</script>

<Section {...$$restProps} class="h-screen pt-20 md:pt-32 md:pb-[10vh] {$$props.class || ''}">
  <Container class="h-full">
    <Content class="h-full flex flex-col justify-around gap-4">
      <slot>Content</slot>
    </Content>
  </Container>
</Section>