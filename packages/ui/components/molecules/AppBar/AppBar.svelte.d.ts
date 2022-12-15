/** @typedef {typeof __propDef.props}  AppBarProps */
/** @typedef {typeof __propDef.events}  AppBarEvents */
/** @typedef {typeof __propDef.slots}  AppBarSlots */
export default class AppBar extends SvelteComponentTyped<{
    [x: string]: any;
    position?: string | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    left: {};
    center: {};
    right: {};
    default: {};
}> {
}
export type AppBarProps = typeof __propDef.props;
export type AppBarEvents = typeof __propDef.events;
export type AppBarSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        position?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        left: {};
        center: {};
        right: {};
        default: {};
    };
};
export {};
