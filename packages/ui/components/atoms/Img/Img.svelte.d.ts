/** @typedef {typeof __propDef.props}  ImgProps */
/** @typedef {typeof __propDef.events}  ImgEvents */
/** @typedef {typeof __propDef.slots}  ImgSlots */
export default class Img extends SvelteComponentTyped<{
    [x: string]: any;
    alt: any;
    src: any;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type ImgProps = typeof __propDef.props;
export type ImgEvents = typeof __propDef.events;
export type ImgSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        alt: any;
        src: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
