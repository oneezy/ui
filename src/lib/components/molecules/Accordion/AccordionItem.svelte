<script>
  import { getContext, onMount } from "svelte";
	import { slide } from "svelte/transition";
  import { Icon } from '$lib';
  /**
   * Specify the accordion item title text.
   * Alternatively, use the "title" slot
   */
  export let title = "Title";

  /**
   * Set to `true` to expand the accordion item
   */
  export let isOpen = false;

  /**
   * Set to `true` to disable the accordion item
   */
  export let disabled = false;

  /**
   * Specify the id
   */
  export let id = "item" + Math.random().toString(36);

  /**
   * Obtain a reference to the `button` element
   */
  export let ref = null;


  const ctx = getContext("Accordion");

  let unsubscribe = undefined;

  onMount(() => {
    return () => {
      if (ctx) ctx.remove({ id });
      if (unsubscribe) unsubscribe();
    };
  });

  $: button_id = `button-${id}`;
  $: if (ctx) {
    ctx.add({ id, isOpen });
    unsubscribe = ctx.items.subscribe((value) => {
      isOpen = value[id];
    });
  }
</script>

<section {...$$restProps} class="w-full border-b-2 border-lite-2 dark:border-dark-2 last:border-b-0" data-accordion-item>
  <button
    bind:this={ref}
    id={button_id}
    class="w-full flex items-center justify-between py-6 text-left not-prose"
    type="button"
    aria-expanded={isOpen}
    aria-controls={id}
    aria-disabled={disabled}
    {disabled}
    on:click={() => {
      if (ctx) {
        ctx.toggle({ id, isOpen: !isOpen });
        if (isOpen && ref && ref.getBoundingClientRect().top < 0) {
          ref.scrollIntoView();
        }
      }
    }}
  >
    <h3 class="flex-grow font-medium text-xl sm:text-2xl text--primary">
      <slot name="title">{title}</slot>
    </h3>
    <Icon class="flex-none mx-4 transition-transform origin-center {isOpen ? 'rotate-180 fill-blue-600' : 'fill-black dark:fill-white'}" name="chevron-down" viewBox="0 0 24 24" size="20" />
  </button>

  {#if isOpen}
  <p transition:slide={{ duration: 300 }} role="region" {id} aria-labelledby={button_id} hidden={!isOpen} class="text-lg text--secondary">
    <slot />
  </p>
  {/if}
</section>