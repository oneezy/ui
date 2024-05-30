<script>
	import { Accordion, AccordionItem } from '$lib';

	const lorem =
		'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit esse nisi eligendi fuga! Quas nisi repellat adipisci animi repellendus incidunt laborum sunt qui nesciunt, ducimus saepe sapiente sed ut labore. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit esse nisi eligendi fuga! Quas nisi repellat adipisci animi repellendus incidunt laborum sunt qui nesciunt, ducimus saepe sapiente sed ut labore.';

	let multiple = $state(false);
	let value = $state(['1']);
</script>

<label class="flex items-center gap-2">
	<input type="checkbox" bind:checked={multiple} />
	<span class="label-text">Allow multiple</span>
</label>

<pre class="pre">Open: {value.join(', ')}</pre>

<Accordion {multiple} bind:value>
	<AccordionItem id="1">
		{#snippet control()}Accordion 1{/snippet}
		{#snippet panel()}{lorem}{/snippet}
	</AccordionItem>
	<hr class="hr" />
	<AccordionItem id="2">
		{#snippet control()}Accordion 2{/snippet}
		{#snippet panel()}{lorem}{/snippet}
	</AccordionItem>
	<hr class="hr" />
	<AccordionItem id="3" disabled>
		{#snippet control()}Accordion 3 (disabled){/snippet}
		{#snippet panel()}{lorem}{/snippet}
	</AccordionItem>
	<hr class="hr" />
	<AccordionItem id="4">
		{#snippet control()}Accordion 4{/snippet}
		{#snippet panel()}{lorem}{/snippet}
	</AccordionItem>
</Accordion>
