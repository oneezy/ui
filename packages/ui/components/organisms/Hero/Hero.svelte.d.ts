/** @typedef {typeof __propDef.props}  HeroProps */
/** @typedef {typeof __propDef.events}  HeroEvents */
/** @typedef {typeof __propDef.slots}  HeroSlots */
export default class Hero extends SvelteComponentTyped<{
    [x: string]: never;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
    title: {};
    description: {};
}> {
}
export type HeroProps = typeof __propDef.props;
export type HeroEvents = typeof __propDef.events;
export type HeroSlots = typeof __propDef.slots;
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
        title: {};
        description: {};
    };
};
export {};
