<script>
	import { Content, CountUp, viewport } from '$lib'


// export let stats = writable(
// 	{ name: 'Users', value: '8956', type: 'decimal', duration: 1000 },
// 	{ name: 'Bots', value: '2740', type: 'decimal', duration: 1000 },
// 	{ name: 'Exchanges', value: '2', type: 'decimal', duration: 1000 },
// 	{ name: 'Trading Pairs', value: '106', type: 'decimal', duration: 3000 }
// )

export let stats = [
	{ name: 'Users', value: '8956', type: 'decimal', duration: 1000 },
	{ name: 'Bots', value: '2740', type: 'decimal', duration: 1000 },
	{ name: 'Exchanges', value: '2', type: 'decimal', duration: 1000 },
	{ name: 'Trading Pairs', value: '106', type: 'decimal', duration: 3000 }
]

  /*
  **********************************************************************************
    We need to put populate the <Stats /> component depending on it's environment
  **********************************************************************************

	// import { env } from '$env/dynamic/public'
	import { describe } from '$lib'
  import { stats } from '../stores/stats'

	async function fetchData() {
		// const response = await fetch(env.PUBLIC_APIURL + '/describe')
    const response = await fetch('https://api-dev.scavengerbot.io/v1/describe')
		const data = await response.json()
		describe.set(data.data)
		// loading = false
	}

	// on mount update the describe store every 1 minute (60,000ms)
	onMount(async () => {
		await fetchData()

		const interval = setInterval(async () => {
			await fetchData()
		}, 60000)
	})

	// on destroy, stop the interval
	onDestroy(() => {
		clearInterval(interval)
	})
*/
</script>

<Content class="w-full flex items-center justify-center lg:mx-0 lg:w-auto lg:gap-20">
	<!-- {#each $stats as stat} -->
	{#each stats as stat}
		<div class="w-1/2 lg:w-auto grid lg:gap-4">
			<h4
				class="text--primary text-center font-mono font-black min-w-[4ch] tracking-tight

         text-3xl 
      sm:text-5xl 
      md:text-6xl
      lg:text-7xl  
      "
			>
				<CountUp
					initial={1}
					value={stat.value}
					duration={stat.duration}
					step={1}
					format={true}
					notation={'compact'}
					display={'short'}
					symbol={'symbol'}
					type={'decimal'}
				/>
			</h4>

			<p class="text-xs mt-1 text-center text--dim font-normal lg:text-lg lg:-mt-2 capitalize">
				{stat.name}
			</p>
		</div>
	{/each}
</Content>
