<script>
	import {Test} from '$lib';
</script>

<!-- Default data -->
<Test />

<!-- Custom data -->
<Test>
	{#snippet left()}Custom Left Content{/snippet}
	{#snippet center()}Custom Center Content{/snippet}
	{#snippet right()}Custom Right Content{/snippet}
</Test>
