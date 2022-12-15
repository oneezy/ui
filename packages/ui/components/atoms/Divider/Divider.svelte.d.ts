/** @typedef {typeof __propDef.props}  DividerProps */
/** @typedef {typeof __propDef.events}  DividerEvents */
/** @typedef {typeof __propDef.slots}  DividerSlots */
export default class Divider extends SvelteComponentTyped<{
    height: any;
    position?: string | undefined;
    color?: string | undefined;
    shape?: string | undefined;
    flip?: null | undefined;
    invert?: null | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type DividerProps = typeof __propDef.props;
export type DividerEvents = typeof __propDef.events;
export type DividerSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        height: any;
        position?: string | undefined;
        color?: string | undefined;
        shape?: string | undefined;
        flip?: null | undefined;
        invert?: null | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
