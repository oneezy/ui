/** @typedef {typeof __propDef.props}  ButtonProps */
/** @typedef {typeof __propDef.events}  ButtonEvents */
/** @typedef {typeof __propDef.slots}  ButtonSlots */
export default class Button extends SvelteComponentTyped<{
    [x: string]: any;
    href?: null | undefined;
    display?: string | undefined;
    button?: null | undefined;
    position?: null | undefined;
    state?: null | undefined;
    icon?: null | undefined;
    box?: null | undefined;
    size?: number | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type ButtonProps = typeof __propDef.props;
export type ButtonEvents = typeof __propDef.events;
export type ButtonSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        href?: null | undefined;
        display?: string | undefined;
        button?: null | undefined;
        position?: null | undefined;
        state?: null | undefined;
        icon?: null | undefined;
        box?: null | undefined;
        size?: number | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export {};
