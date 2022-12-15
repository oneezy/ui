export function mediaQuery(query: any, defaultState?: boolean): {
    subscribe: (this: void, run: import("svelte/store").Subscriber<boolean>, invalidate?: ((value?: boolean | undefined) => void) | undefined) => import("svelte/store").Unsubscriber;
};
