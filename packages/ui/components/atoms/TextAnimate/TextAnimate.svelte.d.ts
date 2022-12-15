/** @typedef {typeof __propDef.props}  TextAnimateProps */
/** @typedef {typeof __propDef.events}  TextAnimateEvents */
/** @typedef {typeof __propDef.slots}  TextAnimateSlots */
export default class TextAnimate extends SvelteComponentTyped<{
    [x: string]: any;
    isPlaying?: null | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type TextAnimateProps = typeof __propDef.props;
export type TextAnimateEvents = typeof __propDef.events;
export type TextAnimateSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        isPlaying?: null | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export {};
