<script>
	import { Page } from '$lib';
	let { children = null, id = null, ...props } = $props();

	let dividerFill = 'fill-neutral-50-800';
	let dividerWidth = '150%';
	let dividerHeight = '14vw';
</script>

<!-- Title Inside
:::::::::::::::::::::::::::::::: -->
<Page
	id="page-1"
	class="bg-primary"
	title="Title"
	tagline="Your awesome title inside"
	dividerTop
	dividerBottom
	{dividerFill}
	{dividerWidth}
	{dividerHeight}
>
	hello
</Page>

<!-- title outside
:::::::::::::::::::::::::::::::: -->
<Page
	id="page-2"
	class="bg-primary"
	title="Title Outside"
	titleOutside
	tagline="Your awesome title outiside"
	dividerTop
	dividerBottom
	{dividerFill}
	{dividerWidth}
	{dividerHeight}
>
	hello
</Page>

<!-- default 
:::::::::::::::::::::::::::::::: -->
<Page />
