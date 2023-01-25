# @oneezy/ui (EARLY BETA - NOT FOR PRODUCTION)
This is a shared UI component lib powered by Sveltekit, Tailwindcss, and Histoire.

> **IMPORTANT!** <br>
> The `@oneezy/ui` package is strictly built for Sveltekit and Tailwind! Both are required in order to use this lib in your project.

## Features
- uses atomic design best practices to design, develop and structure components
- can be `npm install` 'd as a node package to use in other projects [(oneezy/site)](https://github.com/oneezy/site)
- can be `git clone` 'd to use as a starting point demo components as stories [(oneezy/ui)](https://github.com/oneezy/ui)
- can be git cloned to a monorepo (git submodule) as a shared workspace package [(oneezy/projects)](https://github.com/oneezy/projects)
- can be built using `pnpm package` and `npm publish` 'd

## Benefits 
- no longer have to copy/paste the same components over and over when using in other projects.
- if using `@oneezy/ui` and make updates/fixes/features, other projects will inherit them
- provides workflow for having a public repo (git submodule) inside a private repo or monorepo enabling you to take PR's from opensource community

---

## Prerequisites
The `@oneezy/ui` package is strictly built for Sveltekit and Tailwind! Both are required in order to use this lib in your project. 

1. Initialize a Sveltekit app

```
npm create svelte@latest myapp
cd myapp
npm install
npm run dev
```

# Getting Started
There's 2 ways to start using `@oneezy/ui` in your project.

<details open>
<summary><h2 style="display: inline">&nbsp;Repo</h2></summary>
Choose this option if you...

- test
- test
- test

</details>

<details>
<summary><h2 style="display: inline">&nbsp;Monorepo</h2></summary>
Choose this option to quickly get up and running.

</details>

```
pnpm i -d @oneezy/ui
```

Then use in your project
```html
<script>
  import { Section, Container, Link } from '$ui'
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