/** @typedef {typeof __propDef.props}  IntroProps */
/** @typedef {typeof __propDef.events}  IntroEvents */
/** @typedef {typeof __propDef.slots}  IntroSlots */
export default class Intro extends SvelteComponentTyped<{
    [x: string]: never;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type IntroProps = typeof __propDef.props;
export type IntroEvents = typeof __propDef.events;
export type IntroSlots = typeof __propDef.slots;
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
