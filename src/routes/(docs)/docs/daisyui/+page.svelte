<script>
	function showModal() {
		const modal = document.getElementById('my_modal');
		modal.showModal();
	}
</script>

<div class="grid max-w-sm gap-2">
	<label class="input input-bordered flex items-center gap-2">
		<input type="text" class="grow" placeholder="Search" />
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 16 16"
			fill="currentColor"
			class="h-4 w-4 opacity-70"
			><path
				fill-rule="evenodd"
				d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
				clip-rule="evenodd"
			/></svg
		>
	</label>
	<label class="input input-bordered flex items-center gap-2">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 16 16"
			fill="currentColor"
			class="h-4 w-4 opacity-70"
			><path
				d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z"
			/><path
				d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z"
			/></svg
		>
		<input type="text" class="grow" placeholder="Email" />
	</label>
	<label class="input input-bordered flex items-center gap-2">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 16 16"
			fill="currentColor"
			class="h-4 w-4 opacity-70"
			><path
				d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z"
			/></svg
		>
		<input type="text" class="grow" placeholder="Username" />
	</label>
	<label class="input input-bordered flex items-center gap-2">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 16 16"
			fill="currentColor"
			class="h-4 w-4 opacity-70"
			><path
				fill-rule="evenodd"
				d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
				clip-rule="evenodd"
			/></svg
		>
		<input type="password" class="grow" value="password" />
	</label>
	<label class="form-control">
		<div class="label">
			<span class="label-text">Your bio</span>
			<span class="label-text-alt">Alt label</span>
		</div>
		<textarea class="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
		<div class="label">
			<span class="label-text-alt">Your bio</span>
			<span class="label-text-alt">Alt label</span>
		</div>
	</label>
	<div class="flex flex-col">
		<input type="checkbox" class="toggle" checked />

		<div class="form-control w-52">
			<label class="label cursor-pointer">
				<span class="label-text">Remember me</span>
				<input type="checkbox" class="toggle toggle-primary" checked />
			</label>
		</div>
		<div class="form-control w-52">
			<label class="label cursor-pointer">
				<span class="label-text">Remember me</span>
				<input type="checkbox" class="toggle toggle-secondary" checked />
			</label>
		</div>
		<div class="form-control w-52">
			<label class="label cursor-pointer">
				<span class="label-text">Remember me</span>
				<input type="checkbox" class="toggle toggle-accent" checked />
			</label>
		</div>
	</div>
</div>

<div class="navbar bg-base-100">
	<div class="navbar-start">
		<div class="dropdown">
			<div tabindex="0" role="button" class="btn btn-ghost btn-circle">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h16M4 18h7"
					/></svg
				>
			</div>
			<ul
				tabindex="0"
				class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
			>
				<li><a>Homepage</a></li>
				<li><a>Portfolio</a></li>
				<li><a>About</a></li>
			</ul>
		</div>
	</div>
	<div class="navbar-center">
		<a class="btn btn-ghost text-xl">daisyUI</a>
	</div>
	<div class="navbar-end">
		<button class="btn btn-ghost btn-circle">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-5 w-5"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				><path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
				/></svg
			>
		</button>
		<button class="btn btn-ghost btn-circle">
			<div class="indicator">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
					/></svg
				>
				<span class="badge badge-xs badge-primary indicator-item"></span>
			</div>
		</button>
	</div>
</div>

<ul class="menu bg-base-200 rounded-box w-56">
	<li>
		<a>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-5 w-5"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				><path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
				/></svg
			>
			Item 2
		</a>
	</li>
	<li>
		<a>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-5 w-5"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				><path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
				/></svg
			>
			Item 1
		</a>
	</li>
	<li>
		<a>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-5 w-5"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				><path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
				/></svg
			>
			Item 3
		</a>
	</li>
</ul>
<label class="swap swap-rotate">
	<input type="checkbox" /><!-- this hidden checkbox controls the state -->
	<svg class="swap-on h-10 w-10 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
		><path
			d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"
		/></svg
	>
	<svg
		class="swap-off h-10 w-10 fill-current"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		><path
			d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"
		/></svg
	>
</label>

<label class="btn btn-circle swap swap-rotate">
	<input type="checkbox" /><!-- this hidden checkbox controls the state -->
	<svg
		class="swap-off fill-current"
		xmlns="http://www.w3.org/2000/svg"
		width="32"
		height="32"
		viewBox="0 0 512 512"
		><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg
	>
	<svg
		class="swap-on fill-current"
		xmlns="http://www.w3.org/2000/svg"
		width="32"
		height="32"
		viewBox="0 0 512 512"
		><polygon
			points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"
		/></svg
	>
</label>

<button class="btn" onclick={showModal}>open modal</button>
<dialog id="my_modal" class="modal modal-bottom sm:modal-middle">
	<div class="modal-box">
		<h3 class="text-lg font-bold">Hello!</h3>
		<p class="py-4">Press ESC key or click outside to close</p>
	</div>
	<form method="dialog" class="modal-backdrop">
		<button>close</button>
	</form>
</dialog>

<details class="dropdown">
	<summary class="btn m-1">open or close</summary>
	<ul class="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
		<li><a>Item 1</a></li>
		<li><a>Item 2</a></li>
	</ul>
</details>

<div class="stack">
	<div class="card bg-base-200 w-36 text-center shadow-md">
		<div class="card-body">A</div>
	</div>
	<div class="card bg-base-200 w-36 text-center shadow">
		<div class="card-body">B</div>
	</div>
	<div class="card bg-base-200 w-36 text-center shadow-sm">
		<div class="card-body">C</div>
	</div>
</div>

<div class="card glass w-96">
	<figure>
		<img
			src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
			alt="car!"
		/>
	</figure>
	<div class="card-body">
		<h2 class="card-title">Life hack</h2>
		<p>How to park your car at your garage?</p>
		<div class="card-actions justify-end">
			<button class="btn btn-primary">Learn now!</button>
		</div>
	</div>
</div>

<div class="flex flex-wrap gap-4">
	<button class="btn">Button</button>
	<button class="btn btn-neutral">Neutral</button>
	<button class="btn btn-primary">Primary</button>
	<button class="btn btn-secondary">Secondary</button>
	<button class="btn btn-accent">Accent</button>
	<button class="btn btn-ghost">Ghost</button>
	<button class="btn btn-link">Link</button>

	<button class="btn btn-info">Info</button>
	<button class="btn btn-success">Success</button>
	<button class="btn btn-warning">Warning</button>
	<button class="btn btn-error">Error</button>

	<button class="btn btn-outline">Default</button>
	<button class="btn btn-outline btn-primary">Primary</button>
	<button class="btn btn-outline btn-secondary">Secondary</button>
	<button class="btn btn-outline btn-accent">Accent</button>

	<button class="btn btn-outline btn-info">Info</button>
	<button class="btn btn-outline btn-success">Success</button>
	<button class="btn btn-outline btn-warning">Warning</button>
	<button class="btn btn-outline btn-error">Error</button>

	<button class="btn btn-lg">Large</button>
	<button class="btn">Normal</button>
	<button class="btn btn-sm">Small</button>
	<button class="btn btn-xs">Tiny</button>

	<button class="btn glass">Glass button</button>

	<button class="btn" disabled="disabled">Disabled using attribute</button>
	<button class="btn btn-disabled" tabindex="-1" role="button" aria-disabled="true"
		>Disabled using class name</button
	>

	<button class="btn btn-square">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-6 w-6"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			><path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M6 18L18 6M6 6l12 12"
			/></svg
		>
	</button>
	<button class="btn btn-square btn-outline">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-6 w-6"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			><path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M6 18L18 6M6 6l12 12"
			/></svg
		>
	</button>

	<button class="btn btn-circle">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-6 w-6"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			><path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M6 18L18 6M6 6l12 12"
			/></svg
		>
	</button>
	<button class="btn btn-circle btn-outline">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-6 w-6"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			><path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M6 18L18 6M6 6l12 12"
			/></svg
		>
	</button>

	<button class="btn">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-6 w-6"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			><path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
			/></svg
		>
		Button
	</button>

	<button class="btn">
		Button
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-6 w-6"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			><path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
			/></svg
		>
	</button>

	<button class="btn btn-square">
		<span class="loading loading-spinner"></span>
	</button>
</div>
