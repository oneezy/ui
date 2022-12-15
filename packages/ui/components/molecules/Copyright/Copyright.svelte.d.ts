/** @typedef {typeof __propDef.props}  CopyrightProps */
/** @typedef {typeof __propDef.events}  CopyrightEvents */
/** @typedef {typeof __propDef.slots}  CopyrightSlots */
export default class Copyright extends SvelteComponentTyped<{
    date?: number | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type CopyrightProps = typeof __propDef.props;
export type CopyrightEvents = typeof __propDef.events;
export type CopyrightSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        date?: number | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export {};
