<script>
  export let Hst
  import { Icon } from '$ui'
  let size = 100;
  let width;
</script>

<Hst.Story
  group="components"
  title="Atoms/Icon"
  layout={{ type: 'grid', width: 200 }}
  icon="carbon:home"
  iconColor="gray"
>

  <Hst.Variant title="Check">
    <Icon name="check" viewBox="0 0 20 20" {size} />
  </Hst.Variant>

  <Hst.Variant title="Discord">
    <Icon name="discord" {size} />
  </Hst.Variant>

  <Hst.Variant title="Oneezy">
    <Icon name="oneezy-icon" {size} />
  </Hst.Variant>

  <Hst.Variant title="Phone">
    <Icon name="phone" />
  </Hst.Variant>

  <Hst.Variant title="Phone Outline">
    <Icon name="phone-outline" box="24"/>
  </Hst.Variant>

</Hst.Story>