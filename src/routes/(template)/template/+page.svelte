<script>
	import {
		Hero,
		Page,
		Section,
		Container,
		Content,
		Divider,
		Card,
		Map,
		Title,
		Accordion,
		AccordionItem
	} from '$lib';
	let { children, ...props } = $props();

	let classes = 'card grid items-center justify-start flex-1';

	let dividerFill = 'fill-neutral-50-800';
	let dividerWidth = '150%';
	let dividerHeight = 'calc(14vw + 1px)';
</script>

<!-- Home -->
<Hero id="home" />

<!-- Quick Links -->
<Section
	class="my-20 grid grid-cols-2 items-center justify-center gap-4 p-4 md:flex md:flex-row md:gap-10 "
>
	<Card total="4" />
</Section>

<!-- About -->
<Page
	id="about"
	title="About Us"
	tagline="See why we are the best in the business"
	dividerBottom
	{dividerFill}
	{dividerWidth}
	{dividerHeight}
>
	<div
		class="flex flex-col flex-col-reverse md:flex-row md:gap-10 md:even:flex-row-reverse"
	>
		<Content text class={classes} />
		<Content img class={classes} />
	</div>
	<div
		class="flex flex-col flex-col-reverse md:flex-row md:gap-10 md:even:flex-row-reverse"
	>
		<Content text class={classes} />
		<Content img class={classes} />
	</div>
	<div
		class="flex flex-col flex-col-reverse md:flex-row md:gap-10 md:even:flex-row-reverse"
	>
		<Content text class={classes} />
		<Content img class={classes} />
	</div>
</Page>

<!-- Services -->
<Page
	id="services"
	title="Our Services"
	dividerTop
	dividerBottom
	{dividerWidth}
	{dividerHeight}
	class="bg-neutral-200-700"
>
	<div
		class="grid grid-cols-1 place-items-center items-center justify-center gap-10 p-4 pb-20 md:grid-cols-3"
	>
		<Card total="9" />
	</div>
</Page>

<!-- Testimonials -->
<Page
	id="testimonials"
	title="Testimonials"
	tagline="What our customers say about us"
>
	<div
		class="my-20 grid grid-cols-2 items-center justify-center gap-4 p-4 md:flex md:flex-row md:gap-10"
	>
		<Card total="3" />
	</div>
</Page>

<!-- Contact Us -->
<Page
	id="contact"
	title="Contact Us"
	titleOutside
	tagline="Call us today to schedule an appointment"
	class="relative min-h-[80vh] overflow-hidden"
	dividerTop
	dividerBottom
	dividerStuck
	{dividerWidth}
	{dividerHeight}
>
	<Map
		address="5385 Laurel, Beaumont, TX, 77707"
		zoom={12}
		class="absolute inset-0 -z-10 translate-y-1/8 scale-[2]"
	/>
</Page>

<!-- FAQ -->
<Page id="faq" title="FAQ" tagline="Frequently Asked Questions" dividerBottom>
	<Accordion>
		<AccordionItem id="1">
			{#snippet control()}Question{/snippet}
			{#snippet panel()}This is a description{/snippet}
		</AccordionItem>
		<hr class="hr" />
		<AccordionItem id="2">
			{#snippet control()}Accordion 2{/snippet}
			{#snippet panel()}This is a description{/snippet}
		</AccordionItem>
		<hr class="hr" />
		<AccordionItem id="3">
			{#snippet control()}Accordion 3 (disabled){/snippet}
			{#snippet panel()}This is a description{/snippet}
		</AccordionItem>
		<hr class="hr" />
		<AccordionItem id="4">
			{#snippet control()}Accordion 4{/snippet}
			{#snippet panel()}This is a description{/snippet}
		</AccordionItem>
	</Accordion>
</Page>
