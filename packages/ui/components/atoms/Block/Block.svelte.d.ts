/** @typedef {typeof __propDef.props}  BlockProps */
/** @typedef {typeof __propDef.events}  BlockEvents */
/** @typedef {typeof __propDef.slots}  BlockSlots */
export default class Block extends SvelteComponentTyped<{
    [x: string]: never;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type BlockProps = typeof __propDef.props;
export type BlockEvents = typeof __propDef.events;
export type BlockSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: never;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export {};
