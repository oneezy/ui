/** @typedef {typeof __propDef.props}  AccordionItemProps */
/** @typedef {typeof __propDef.events}  AccordionItemEvents */
/** @typedef {typeof __propDef.slots}  AccordionItemSlots */
export default class AccordionItem extends SvelteComponentTyped<{
    [x: string]: any;
    id?: string | undefined;
    title?: string | undefined;
    isOpen?: boolean | undefined;
    disabled?: boolean | undefined;
    ref?: null | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    title: {};
    default: {};
}> {
}
export type AccordionItemProps = typeof __propDef.props;
export type AccordionItemEvents = typeof __propDef.events;
export type AccordionItemSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        id?: string | undefined;
        title?: string | undefined;
        isOpen?: boolean | undefined;
        disabled?: boolean | undefined;
        ref?: null | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        title: {};
        default: {};
    };
};
export {};
