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
		AccordionItem,
		Review
	} from '$lib';
	let {
		data,
		metaData,
		pageData,
		aboutData,
		servicesData,
		reviewData,
		faqData,
		children,
		...props
	} = $props();

	let classes = 'card grid items-center justify-start flex-1';

	let dividerFill = 'fill-neutral-50-800';
	let dividerWidth = '150%';
	let dividerHeight = 'calc(14vw + 1px)';

	// Extract the "Home" page data and the rest of the pages
	let meta = data.metaData[0];
	let homePage = data.pageData.find((page) => page.pageSlug === 'home');
	let otherPages = data.pageData.filter((page) => page.pageSlug !== 'home');

	$inspect(data.reviewData);
</script>

<!-- Home -->
{#if homePage}
	<Hero
		class="min-h-[90vh] lg:min-h-[80svh]"
		logo
		effect={true}
		logoSrc={meta.brandLogo}
		logoSmall={meta.brandLogoSmall}
		logoLarge={meta.brandLogoLarge}
		id={homePage.pageSlug}
		title={homePage.pageTitle}
		tagline={homePage.pageTagline}
		company={meta.companyName}
		button1="Schedule Appointment"
		button1Link="tel:{meta.companyPhone}"
		button2="Get Directions"
		button2Link="#contact"
		src="/images/office.jpg"
		gradient="var(--color-primary), transparent, var(--color-secondary)"
		divider
		{dividerFill}
		{dividerWidth}
		{dividerHeight}
	/>
{/if}

<!-- Quick Links -->
<Section
	class="relative z-10 my-20 grid grid-cols-2 items-center justify-center gap-4 p-4 md:flex md:flex-row md:gap-10 lg:-mt-52 lg:mb-20 "
>
	<Card total="4" glass />
</Section>

{#each otherPages as page}
	<Page
		class="relative relative min-h-[80vh] overflow-hidden {page.pageSlug ===
		'services'
			? 'bg-neutral-200-700'
			: ''}"
		id={page.pageSlug}
		title={page.pageTitle}
		tagline={page.pageTagline}
		titleOutside={page.pageSlug === 'contact' ? true : false}
		dividerTop={page.pageSlug === 'contact' || 'services' ? true : false}
		dividerStuck={page.pageSlug === 'contact' ? true : false}
		dividerBottom
		{dividerWidth}
		{dividerHeight}
		{dividerFill}
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

		{#if page.pageSlug === 'testimonials'}
			<!-- <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4"> -->
			<!-- <div class="flex flex-wrap gap-4"> -->
			<div class="columns-1 gap-4 sm:columns-2 md:columns-3">
				<Review
					reviews={data.reviewData}
					class="mx-2 my-8 break-inside-avoid"
				/>
			</div>
		{/if}

		{#if page.pageSlug === 'contact'}
			<Map
				address={meta.companyAddress}
				zoom={14}
				class="absolute inset-0 -z-10 translate-y-1/8 scale-[2]"
			/>
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
				{/each}
			</Accordion>
		{/if}
	</Page>
{/each}
