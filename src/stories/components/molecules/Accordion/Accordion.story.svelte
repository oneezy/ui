<script>
  import { Accordion, AccordionItem } from '$lib';

	export let Hst
  let expanded
</script>

<Hst.Story group="components" title="Molecules/Accordion">
  
  <Accordion id="testtt">
    <AccordionItem bind:expanded title="Title 1 Title 1 Title 1 Title 1 Title 1 Title 1 Title 1 Title 1 Title 1 Title 1 Title 1 ">Content 1</AccordionItem>
    <AccordionItem title="Title 2">Content 2</AccordionItem>
    <AccordionItem title="Title 3">Content 2</AccordionItem>
  </Accordion>
  
</Hst.Story>