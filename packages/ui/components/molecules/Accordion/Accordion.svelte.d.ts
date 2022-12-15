/** @typedef {typeof __propDef.props}  AccordionProps */
/** @typedef {typeof __propDef.events}  AccordionEvents */
/** @typedef {typeof __propDef.slots}  AccordionSlots */
export default class Accordion extends SvelteComponentTyped<{
    [x: string]: any;
    multiselect?: boolean | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type AccordionProps = typeof __propDef.props;
export type AccordionEvents = typeof __propDef.events;
export type AccordionSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        multiselect?: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export {};
