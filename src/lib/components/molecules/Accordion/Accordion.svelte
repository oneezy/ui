<script>
  export let multiselect = false;

  import { setContext } from "svelte";
  import { writable } from "svelte/store";
  import { Content } from '$lib';

  const items = writable({});

  setContext("Accordion", {
    items,
    add: (item) => {
      items.update((_) => ({ ..._, [item.id]: item.isOpen }));
    },
    remove: (item) => {
      items.update((_) => {
        const _items = { ..._ };
        delete _items[item.id];
        return _items;
      });
    },
    toggle: (item) => {
      items.update((_) => {
        if (!multiselect) {
          Object.keys(_).forEach((id) => (_[id] = false));
        }

        return { ..._, [item.id]: item.isOpen };
      });
    },
  });
</script>

<Content {...$$restProps} prose data-accordion>
  <slot />
</Content>