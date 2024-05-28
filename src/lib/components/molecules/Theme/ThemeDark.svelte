<script>
	import { ModeWatcher, setMode, mode, toggleMode } from 'mode-watcher';
	import { Button } from '$lib';
	import IconSun from '~icons/solar/sun-2-bold';
	import IconMoon from '~icons/solar/moon-stars-bold';

	function handleModeChange() {
		if ($mode === 'light') {
			setMode('dark');
		} else {
			setMode('light');
		}
	}
</script>

<ModeWatcher />
<Button
	onclick={handleModeChange}
	class="place-items-center rounded-full bg-transparent py-4 text-2xl text-blue-500 hover:bg-transparent"
>
	{#if $mode === 'light'}
		<IconMoon />
	{:else}
		<IconSun />
	{/if}
</Button>

<!-- 
<button class="btn btn-primary" onclick={() => setMode('light')}>Set Light Mode</button>
<button class="btn btn-primary" onclick={() => setMode('dark')}>Set Dark Mode</button> -->
