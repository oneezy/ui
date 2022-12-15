/** @typedef {typeof __propDef.props}  DialogProps */
/** @typedef {typeof __propDef.events}  DialogEvents */
/** @typedef {typeof __propDef.slots}  DialogSlots */
export default class Dialog extends SvelteComponentTyped<{
    [x: string]: any;
    text?: string | undefined;
    type?: string | undefined;
    tooltip?: null | undefined;
}, {
    keydown: KeyboardEvent;
} & {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type DialogProps = typeof __propDef.props;
export type DialogEvents = typeof __propDef.events;
export type DialogSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        text?: string | undefined;
        type?: string | undefined;
        tooltip?: null | undefined;
    };
    events: {
        keydown: KeyboardEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export {};
