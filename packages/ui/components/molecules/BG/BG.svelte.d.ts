/** @typedef {typeof __propDef.props}  BgProps */
/** @typedef {typeof __propDef.events}  BgEvents */
/** @typedef {typeof __propDef.slots}  BgSlots */
export default class Bg extends SvelteComponentTyped<{
    [x: string]: any;
    isPlaying?: null | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type BgProps = typeof __propDef.props;
export type BgEvents = typeof __propDef.events;
export type BgSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        isPlaying?: null | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
