/** @typedef {typeof __propDef.props}  ThemeProps */
/** @typedef {typeof __propDef.events}  ThemeEvents */
/** @typedef {typeof __propDef.slots}  ThemeSlots */
export default class Theme extends SvelteComponentTyped<{
    [x: string]: never;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type ThemeProps = typeof __propDef.props;
export type ThemeEvents = typeof __propDef.events;
export type ThemeSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: never;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
