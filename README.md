# @oneezy/ui (EARLY BETA - NOT FOR PRODUCTION)
This is a shared UI component lib powered by Sveltekit, Tailwindcss, and Histoire.

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
Choose this option if you want to npm install the package

```
pnpm i -d @oneezy/ui
```


</details>

<details>
<summary><h2 style="display: inline">&nbsp;Monorepo</h2></summary>
Choose this option if you want to include the package inside a monorepo as a workspace

```
git clone https://github.com/oneezy/ui.git +ui
```
</details>

Then use in your project
```html
<script>
  import { Section, Container, Link } from '@oneezy/ui'
</script>

<Section>
  <Container>
    <Link href="https://oneezy.com">Check out my website!</Link>
  </Container>
</Section>
```

The `@oneezy/ui` package requires Sveltekit and Tailwind to work and is intended to be imported into your project to be developed on top of rather then being built and ready to go out fo the box. Therefore, `@oneezy/ui` comes equipped with a `tailwind.config.cjs`, `postcss.config.cjs`, and a tailwind specific `app.css` file. 

> Note: we're researching ways of building the package w/ no dependencies but we're not there yet

## Setup
In order to use, you'll need to create a `tailwind.config.cjs` and `postcss.config.cjs` file in your `./` root directory and then require the files like so:

**tailwind.config.cjs**
```js
const postcssConfig = require('@oneezy/ui/postcss.config.cjs');

const config = {
  ...postcssConfig
};

module.exports = config;
```

**postcss.config.cjs**
```js
const postcssConfig = require('@oneezy/ui/postcss.config.cjs');

const config = {
  ...postcssConfig
};

module.exports = config;
```

Next, you'll want to create an `app.css` file inside your `./src/lib` directory
> **Note:** You can overwrite base styles here to create your own theme. The original css is located at `@oneezy/ui/src/lib/app.css`

**app.css**
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {

    /* fonts
    ************************************************************/
    --font-sans:  "Custom Sans Font";
    --font-serif: "Custom Serif Font";
    --font-mono:  "Custom Monospace Font";

    /* brand
    ************************************************************/
    --color-brand:                255 0 0;   /* red */
    --color-brand-primary:        255 0 0;   /* red */
    --color-brand-secondary:      0 0 255;   /* green */
  }
}
```

Finally, you'll want to import the css, theme, and components into your `+layout.svelte` file

```html
<script>
  import { Hero } from '@oneezy/ui'
  import '@oneezy/ui/app.css'
  import '$lib/app.css'
</script>

<Hero>
  <slot />
</Hero>
```

Wham, Bam.
```
pnpm dev

pnpm build

pnpm preview
```
