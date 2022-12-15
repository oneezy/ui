/** @typedef {typeof __propDef.props}  TitleProps */
/** @typedef {typeof __propDef.events}  TitleEvents */
/** @typedef {typeof __propDef.slots}  TitleSlots */
export default class Title extends SvelteComponentTyped<{
    [x: string]: any;
    title?: null | undefined;
    subtitle?: null | undefined;
    subheader?: null | undefined;
    subheading?: null | undefined;
    tagline?: null | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type TitleProps = typeof __propDef.props;
export type TitleEvents = typeof __propDef.events;
export type TitleSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        title?: null | undefined;
        subtitle?: null | undefined;
        subheader?: null | undefined;
        subheading?: null | undefined;
        tagline?: null | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export {};
