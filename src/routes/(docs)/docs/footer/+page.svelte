<script>
	import { Preview, Footer, Logo, Copyright, Social } from '$lib';
</script>

<Footer>
	{#snippet left()}
		<Logo />
	{/snippet}

	{#snippet center()}
		<Copyright />
	{/snippet}

	{#snippet right()}
		<Social
			google="https://google.com/username"
			facebook="https://facebook.com/username"
			twitter="https://twitter.com/username"
			youtube="https://youtube.com/username"
			instagram="https://instagram.com/username"
		/>
	{/snippet}
</Footer>

<Preview>
	<Footer>
		{#snippet left()}
			<Logo />
		{/snippet}

		{#snippet center()}
			<Copyright />
		{/snippet}

		{#snippet right()}
			<Social
				class="hover:text-primary-500 text-neutral-400"
				youtube="https://youtube.com/username"
				twitter="https://twitter.com/username"
				facebook="https://facebook.com/username"
			/>
		{/snippet}
	</Footer>
</Preview>

<Preview>
	<footer class="body-font text-gray-600">
		<div
			class="container mx-auto flex flex-col items-center py-8 px-5 sm:flex-row"
		>
			<!-- left -->
			<a
				href="#link"
				class="Title-font flex items-center justify-center font-medium text-gray-900 md:justify-start"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					class="h-10 w-10 rounded-full bg-indigo-500 p-2 text-white"
					viewBox="0 0 24 24"
				>
					<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
					></path>
				</svg>
				<span class="ml-3 text-xl">Tailblocks</span>
			</a>

			<p
				class="mt-4 text-sm text-gray-500 sm:mt-0 sm:ml-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:pl-4"
			>
				© 2020 Tailblocks —
				<a
					href="https://twitter.com/knyttneve"
					class="ml-1 text-gray-600"
					rel="noopener noreferrer"
					target="_blank">@knyttneve</a
				>
			</p>

			<!-- right -->
			<span
				class="mt-4 inline-flex justify-center sm:mt-0 sm:ml-auto sm:justify-start"
			>
				<a href="#link" class="text-gray-500">
					<svg
						fill="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						class="h-5 w-5"
						viewBox="0 0 24 24"
					>
						<path
							d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
						></path>
					</svg>
				</a>
				<a href="#link" class="ml-3 text-gray-500">
					<svg
						fill="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						class="h-5 w-5"
						viewBox="0 0 24 24"
					>
						<path
							d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
						></path>
					</svg>
				</a>
				<a href="#link" class="ml-3 text-gray-500">
					<svg
						fill="none"
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						class="h-5 w-5"
						viewBox="0 0 24 24"
					>
						<rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
						<path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"
						></path>
					</svg>
				</a>
				<a href="#link" class="ml-3 text-gray-500">
					<svg
						fill="currentColor"
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="0"
						class="h-5 w-5"
						viewBox="0 0 24 24"
					>
						<path
							stroke="none"
							d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
						></path>
						<circle cx="4" cy="4" r="2" stroke="none"></circle>
					</svg>
				</a>
			</span>
		</div>
	</footer>
</Preview>
