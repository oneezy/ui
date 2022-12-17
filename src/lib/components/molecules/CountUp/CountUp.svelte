<script>
	import { viewport } from '$lib'

  const uuid = Date.now()
  
  // const uuid = crypto.randomUUID()
	
	// properties
  export let value;
  export let initial 				= 0;
  export let duration 			= 3000;
  export let step 					= 1;
  export let roundto 				= 1;
	
	// formatting
  export let format 				= null;
	export let locale 				= 'en';
	
	// must be used together
	export let notation 			= 'compact' 		// standard | compact | scientific | engineering
	export let display 				= 'short'		 		// short | long
	
	// formatting
	export let symbol 				= 'symbol'		 	// symbol | narrowSymbol | code | name
	export let currency 			= 'usd'					
	export let currencySign 	= 'accounting'	
	export let sign 					= 'auto' 				// auto | always | exceptZero | negative | never
	export let type 					= 'currency' 		// decimal | currency | percent | unit
	export let unit 					= 'short'				// short | long | narrow
				
	// experimental
	export let grouping 			= true 					// always | auto | false | min2 | true
	// export let round 					= 'halfCeil'   	// ceil | floor | expand | trunc | halfCeil | halfFloor | halfExpand | halfTrunc | halfEven 

	
  function formattedNumber(input) {
    if (format) {
      return Math.round(input).toLocaleString(locale, {
				notation: notation,
				compactDisplay: display,
				style: type,
				currency: currency,
				currencyDisplay: symbol, 
				currencySign: currencySign,
				signDisplay: sign,
				unitDisplay: unit,
				
				// experimental
				useGrouping: grouping
			});
    }
    return input;
  }

  const counterResult = [];
  const timers = [];

  const max = parseInt(value);
  while (duration / ((max - initial) / step) < 2) {
    step++;
  }

  counterResult[uuid] = initial; 
	
	function results() {
		timers[uuid] = setInterval(() => {
			if (counterResult[uuid] <= max) {
				counterResult[uuid] += step;
			} 
			else {
				clearInterval(timers[uuid]);
				counterResult[uuid] = Math.round(max / roundto) * roundto;
			}
		}, duration / ((max - initial) / step));
	}
	

  // wait for a bit...
  function wait(func, time = 500) {
    setTimeout(() => {
			results()
    }, time);
  }
</script>

<span
	use:viewport
	on:enterViewport={wait}
	on:change={wait}>
	{formattedNumber(counterResult[uuid])}
</span>