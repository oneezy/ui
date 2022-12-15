export const screenH: import("svelte/store").Writable<number>;
export const screenW: import("svelte/store").Writable<number>;
export const scrollY: import("svelte/store").Writable<number>;
export const mouse: import("svelte/store").Writable<{
    x: number;
    y: number;
}>;
export const scrollDir: import("svelte/store").Readable<"down" | "up">;
export const scrollUp: import("svelte/store").Readable<boolean>;
export const scrollDown: import("svelte/store").Readable<boolean>;
export const scrollTop: import("svelte/store").Readable<boolean>;
export const scrollBottom: import("svelte/store").Readable<boolean>;
export function mouseMove(e: any): void;
