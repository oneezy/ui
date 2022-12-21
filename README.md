# @oneezy/ui (EARLY BETA!! BUGSSSS)
This is a shared UI component lib powered by Svelte, Tailwindcss, and Histoire.

## install
Install as a node package in your project
```
pnpm add @oneezy/ui
```

Then use in your project
```html
<script>
  import { Section, Container, Link } from '$lib'
</script>

<Section>
  <Container>
    <Link href="https://oneezy.com">Check out my website!</Link>
  </Container>
</Section>
```

## use as a starting point
Grab a copy
```
degit oneezy/ui my-ui
```
Install the dependencies
```
pnpm i
```
Start up the server
```
pnpm dev
```
> ***Note:*** *When you `pnpm dev` to start the server, it will also create a `package` folder with all the optimized components. You can take this to use in your own project or `npm publish` it for re-use.*