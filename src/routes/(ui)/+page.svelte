<script>
	import Version from '$lib/Version/Version.svelte';
	import App from '$lib/components/atoms/App/App.svelte';
</script>

<h1 class="text-3xl font-bold underline">Welcome to your library project</h1>
<App class="bg-green-500">
	<p>Create your package using @sveltejs/package and preview/showcase your work with SvelteKit</p>
	<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

	<Version />
</App>
