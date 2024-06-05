<script>
	import { Title, Button, Image, Effect, Preview} from '$lib';
	import IconAirplane from '~icons/bi/airplane';

	let href = 'https://oneezy.com';
	let classes = 'preview relative rounded-lg flex min-h-[6rem] container flex-wrap items-center justify-center gap-2 overflow-x-hidden p-4';
</script>

<!-- default -->
<Preview name="default">
	<Button>default</Button>
</Preview>

<!-- presets -->
<Preview name="presets">
	<Button>button</Button>
	<Button neutral>neutral</Button>
	<Button primary>primary</Button>
	<Button secondary>secondary</Button>
	<Button accent>accent</Button>
	<Button ghost>ghost</Button>
	<Button glass>glass</Button>
	<Button link>link</Button>
</Preview>

<!-- outline -->
<Preview name="outline">
	<Button outline>neutral</Button>
	<Button outline primary>primary</Button>
	<Button outline secondary>secondary</Button>
	<Button outline accent>accent</Button>
</Preview>

<!-- tonal -->
<Preview name="tonal">
	<Button tonal>button</Button>
	<Button tonal neutral>neutral</Button>
	<Button tonal primary>primary</Button>
	<Button tonal secondary>secondary</Button>
	<Button tonal accent>accent</Button>
</Preview>

<!-- glass -->
<Preview name="glass">
	<Effect front animate repeat
		gradient="var(--color-secondary), var(--color-primary), var(--color-secondary)"
		linear="to right"
	/>
	<Button glass>glass</Button>
	<Button glass invert>invert</Button>
</Preview>

<!-- sizes -->
<Preview name="sizes">
	<Button xl>X-Large</Button>
	<Button lg>Large</Button>
	<Button md>Normal</Button>
	<Button sm>Small</Button>
	<Button xs>Tiny</Button>
</Preview>

<!-- href -->
<Preview name="href">
	<Button {href}>text</Button>
	<Button {href} secondary><IconAirplane />text</Button>
	<Button {href}>text<IconAirplane /></Button>
	<Button {href}>text<IconAirplane />text</Button>
	<Button {href} class="w-full"><IconAirplane />text<IconAirplane /></Button>
</Preview>

<!-- icon -->
<Preview name="icon">
	<Button icon xl><IconAirplane /></Button>
	<Button icon lg><IconAirplane /></Button>
	<Button icon><IconAirplane /></Button>
	<Button icon sm><IconAirplane /></Button>
	<Button icon xs><IconAirplane /></Button>
</Preview>

<!-- text + icon -->
<Preview name="text + icon">
	<Button class="w-40"><IconAirplane />text</Button>
	<Button class="w-40">text<IconAirplane /></Button>
	<Button class="w-40">text<IconAirplane />text</Button>
	<Button class="w-40"><IconAirplane />text<IconAirplane /></Button>
</Preview>