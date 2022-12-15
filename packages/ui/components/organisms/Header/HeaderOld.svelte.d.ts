/** @typedef {typeof __propDef.props}  HeaderOldProps */
/** @typedef {typeof __propDef.events}  HeaderOldEvents */
/** @typedef {typeof __propDef.slots}  HeaderOldSlots */
export default class HeaderOld extends SvelteComponentTyped<{
    class: any;
    headerHeight?: null | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    left: {};
    center: {};
    right: {};
    default: {};
}> {
}
export type HeaderOldProps = typeof __propDef.props;
export type HeaderOldEvents = typeof __propDef.events;
export type HeaderOldSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        class: any;
        headerHeight?: null | undefined;
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
