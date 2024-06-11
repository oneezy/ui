<script>
	import {
		Hero,
		Page,
		Section,
		Container,
		Content,
		Card,
		Map,
		Image,
		Mask,
		Accordion,
		AccordionItem
	} from '$lib';
	// let { children, ...props } = $props();
	let { data, pageData, aboutData, servicesData, faqData, children, ...props } =
		$props();

	let classes = 'card grid items-center justify-start flex-1';

	let dividerFill = 'fill-neutral-50-800';
	let dividerWidth = '150%';
	let dividerHeight = 'calc(14vw + 1px)';

	// Extract the "Home" page data and the rest of the pages
	let homePage = data.pageData.find((page) => page.pageSlug === 'home');
	let otherPages = data.pageData.filter((page) => page.pageSlug !== 'home');
</script>

<!-- Home -->
{#if homePage}
	<Hero
		id={homePage.pageSlug}
		title={homePage.pageTitle}
		tagline={homePage.pageTagline}
		button1="Schedule Appointment"
		button1Link="tel:8888888888"
		button2="Get Directions"
		button2Link="/contact"
		src="/images/office.jpg"
		gradient="var(--color-primary), transparent, var(--color-secondary)"
		divider
	/>
{/if}

<!-- Quick Links -->
<Section
	class="my-20 grid grid-cols-2 items-center justify-center gap-4 p-4 md:flex md:flex-row md:gap-10 "
>
	<Card total="4" />
</Section>

{#each otherPages as page}
	<Page
		id={page.pageSlug}
		title={page.pageTitle}
		tagline={page.pageTagline}
		class="relative"
		dividerBottom
		{dividerFill}
		{dividerWidth}
		{dividerHeight}
	>
		<!-- About -->
		{#if page.pageSlug === 'about'}
			{#each data.aboutData as about}
				<div
					class="flex flex-col flex-col-reverse md:flex-row md:gap-10 md:even:flex-row-reverse"
				>
					<Content text>
						<h2>{about.title}</h2>
						<p>{about.description}</p>
					</Content>
					<Content class={classes}>
						<Mask
							ratio="2/1"
							mask="/masks/rounded.svg"
							src={about.image}
							alt={about.title}
							class="size-96 rounded-lg shadow-lg"
						/>
					</Content>
				</div>
			{/each}
		{/if}

		<!-- Services -->
		{#if page.pageSlug === 'services'}
			<div
				class="grid auto-rows-fr grid-cols-1 gap-10 p-4 pb-20 md:grid-cols-3"
			>
				{#each data.servicesData as service}
					<Card title={service.title} description={service.description} />
				{/each}
			</div>
		{/if}

		<!-- FAQ -->
		{#if page.pageSlug === 'faq'}
			<Accordion>
				{#each data.faqData as faq, index}
					<AccordionItem id={'accordion-item-' + index}>
						{#snippet control()}{faq.question}{/snippet}
						{#snippet panel()}{faq.answer}{/snippet}
					</AccordionItem>
					<hr class="hr" />
				{/each}
			</Accordion>
		{/if}
	</Page>
{/each}

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
