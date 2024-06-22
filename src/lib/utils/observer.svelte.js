import { useIntersectionObserver } from 'runed';

let activeNode = null;

export function observer(node) {
	if (!node.id) {
		// console.warn('Element used with observer must have an id');
		return;
	}

	const observer = useIntersectionObserver(
		() => node,
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					// Remove 'active' class from the previously active node and its link
					if (activeNode && activeNode !== node) {
						activeNode.classList.remove('active');
						if (activeNode.id) {
							const activeLink = document.querySelector(`a[href="#${activeNode.id}"]`);
							if (activeLink) {
								activeLink.classList.remove('active');
							}
						}
					}

					// Set the new active node and add 'active' class to it and its link
					activeNode = node;
					node.classList.add('active');
					if (node.id) {
						const link = document.querySelector(`a[href="#${node.id}"]`);
						if (link) {
							link.classList.add('active');
						}
					}
				}
			});
		},
		{ threshold: 0.5 }
	);

	return {
		destroy() {
			// Cleanup observer if the element is removed
			observer.stop();
			if (node === activeNode) {
				activeNode = null;
			}
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

<h2 id="id-1" use:observer>1</h2>
<h2 id="id-2" use:observer>2</h2>
<h2 id="id-3" use:observer>3</h2>
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
