/** @typedef {typeof __propDef.props}  CountUpProps */
/** @typedef {typeof __propDef.events}  CountUpEvents */
/** @typedef {typeof __propDef.slots}  CountUpSlots */
export default class CountUp extends SvelteComponentTyped<{
    value: any;
    symbol?: string | undefined;
    display?: string | undefined;
    type?: string | undefined;
    currency?: string | undefined;
    notation?: string | undefined;
    currencySign?: string | undefined;
    unit?: string | undefined;
    initial?: number | undefined;
    duration?: number | undefined;
    step?: number | undefined;
    roundto?: number | undefined;
    format?: null | undefined;
    locale?: string | undefined;
    sign?: string | undefined;
    grouping?: boolean | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type CountUpProps = typeof __propDef.props;
export type CountUpEvents = typeof __propDef.events;
export type CountUpSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        value: any;
        symbol?: string | undefined;
        display?: string | undefined;
        type?: string | undefined;
        currency?: string | undefined;
        notation?: string | undefined;
        currencySign?: string | undefined;
        unit?: string | undefined;
        initial?: number | undefined;
        duration?: number | undefined;
        step?: number | undefined;
        roundto?: number | undefined;
        format?: null | undefined;
        locale?: string | undefined;
        sign?: string | undefined;
        grouping?: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
