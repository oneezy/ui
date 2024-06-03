<script>
	import { Title, Button, Image, Effect } from '$lib';
	import IconAirplane from '~icons/bi/airplane';

	let href = 'https://oneezy.com';
	let classes = 'preview relative rounded-lg flex min-h-[6rem] container flex-wrap items-center justify-center gap-2 overflow-x-hidden p-4';
</script>

<!-- default -->
<Title subheading="default" />
<div class={classes}>
	<Button>default</Button>
</div>

<!-- presets -->
<Title subheading="presets" />
<div class={classes}>
	<Button>button</Button>
	<Button neutral>neutral</Button>
	<Button primary>primary</Button>
	<Button secondary>secondary</Button>
	<Button accent>accent</Button>
	<Button ghost>ghost</Button>
	<Button glass>glass</Button>
	<Button link>link</Button>
</div>

<!-- outline -->
<Title subheading="outline" />
<div class={classes}>
	<Button outline>neutral</Button>
	<Button outline primary>primary</Button>
	<Button outline secondary>secondary</Button>
	<Button outline accent>accent</Button>
</div>

<!-- tonal -->
<Title subheading="tonal" />
<div class={classes}>
	<Button tonal>button</Button>
	<Button tonal neutral>neutral</Button>
	<Button tonal primary>primary</Button>
	<Button tonal secondary>secondary</Button>
	<Button tonal accent>accent</Button>
</div>

<!-- glass -->
<Title subheading="glass" />
<div class={classes}>
	<Effect front animate repeat
		gradient="var(--color-secondary), var(--color-primary), var(--color-secondary)"
		linear="to right"
	/>
	<Button glass>glass</Button>
	<Button glass invert>invert</Button>
</div>

<!-- sizes -->
<Title subheading="sizes" />
<div class={classes}>
	<Button xl>xl button</Button>
	<Button lg>lg button</Button>
	<Button md>md button</Button>
	<Button sm>sm button</Button>
	<Button xs>sm button</Button>
</div>

<!-- href -->
<Title subheading="href" />
<div class={classes}>
	<Button {href}>text</Button>
	<Button {href} secondary><IconAirplane />text</Button>
	<Button {href}>text<IconAirplane /></Button>
	<Button {href}>text<IconAirplane />text</Button>
	<Button {href} class="w-full"><IconAirplane />text<IconAirplane /></Button>
</div>

<!-- icon -->
<Title subheading="icon" />
<div class={classes}>
	<Button icon xl><IconAirplane /></Button>
	<Button icon lg><IconAirplane /></Button>
	<Button icon><IconAirplane /></Button>
	<Button icon sm><IconAirplane /></Button>
	<Button icon xs><IconAirplane /></Button>
</div>

<!-- text + icon -->
<Title subheading="text + icon" />
<div class={classes}>
	<Button class="w-40"><IconAirplane />text</Button>
	<Button class="w-40">text<IconAirplane /></Button>
	<Button class="w-40">text<IconAirplane />text</Button>
	<Button class="w-40"><IconAirplane />text<IconAirplane /></Button>
</div>

<style>
	.preview {
		border: 1px solid light-dark(var(--color-neutral-200),var(--color-neutral-600));
		background-image: repeating-linear-gradient(
			45deg,
			light-dark(var(--color-neutral-100),var(--color-neutral-700)),
			light-dark(var(--color-neutral-100),var(--color-neutral-700)) 13px,
			light-dark(var(--color-neutral-200),var(--color-neutral-800)) 13px,
			light-dark(var(--color-neutral-200),var(--color-neutral-800)) 14px
		);

		background-size: 40px 40px;
	}
</style>
