import { useIntersectionObserver } from 'runed';

// use:observer (action)
export function observer(node) {
	// Create a global map to keep track of all observed elements
	const observedElements = new Map();

	const observer = useIntersectionObserver(
		() => node,
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					// Remove 'active' class from all previously observed elements and links
					observedElements.forEach((value, key) => {
						key.classList.remove('active');
						if (key.id) {
							const link = document.querySelector(`a[href="#${key.id}"]`);
							if (link) {
								link.classList.remove('active');
							}
						}
					});

					// Add 'active' class to the intersecting element and its link
					node.classList.add('active');
					if (node.id) {
						const link = document.querySelector(`a[href="#${node.id}"]`);
						if (link) {
							link.classList.add('active');
						}
					}

					// Update the currently active element in the map
					observedElements.set(node, true);
				} else {
					// Remove 'active' class if the element is no longer intersecting
					node.classList.remove('active');
					if (node.id) {
						const link = document.querySelector(`a[href="#${node.id}"]`);
						if (link) {
							link.classList.remove('active');
						}
					}

					// Remove the element from the active elements map
					observedElements.delete(node);
				}
			});
		},
		// { threshold: 0.5, rootMargin: '0px 0px -25% 0px' }
		{ threshold: 0.75, rootMargin: '0px 0px -25% 0px' }
	);

	// Add the current node to the observed elements map
	observedElements.set(node, true);

	return {
		destroy() {
			// Cleanup observer if the element is removed
			observer.stop();
			observedElements.delete(node);
		}
	};
}

/* EXAMPLE USAGE:
*******************************************************************
<script>
  import { observer } from './observer.svelte.js';
</script>

<a href="#id-1">Link 1</a>
<a href="#id-2">Link 2</a> 
<a href="#id-3">Link 3</a>

<section id="id-1" use:observer>1</section>
<section id="id-2" use:observer>2</section>
<section id="id-3" use:observer>3</section>
*******************************************************************/

/* Is Observering?
 *******************************************************************/
export function isObserving(target, root, isIntersecting) {
	useIntersectionObserver(
		() => target(),
		(entries) => {
			const entry = entries[0];
			if (!entry) return;
			isIntersecting(entry.isIntersecting);
		},
		{ root: () => root() }
	);
}

/* EXAMPLE USAGE:
*******************************************************************
<script>
  import { isObserving } from './observer.svelte.js';

	let target = $state(null);
	let root = $state(null);
	let isIntersecting = $state(false);

	isObserving(
		() => target, 
		() => root, 
		(value) => isIntersecting = value);
</script>

<header class="{isIntersecting ? 'active' : ''}">
	Intersecting? {isIntersecting ? 'yes' : 'no'}
</header>

<hr bind:this={target} />
*******************************************************************/
