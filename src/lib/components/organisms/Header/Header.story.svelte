<script>
  import { Header, Title, Nav, Link, Icon, Button } from '$lib';

	export let Hst
</script>

<Hst.Story group="components" title="Organisms/Header">
  
  <Header>
    <Title slot="left" class="m-[0_!important] p-[0_!important] uppercase">Logo</Title>
    <Nav slot="center" />
    <div class="flex items-center justify-center gap-2" slot="right">
      <Link href="https://discord.gg/6Ys7gEr" target="_blank" rel="noreferrer">
        <Icon name="discord" viewBox="0 0 28 28" size="42" class="fill--primary rounded-full" />
      </Link>
      <Button href="/signin" class="ml-2">Sign In</Button>
    </div>
  </Header>
  
</Hst.Story>