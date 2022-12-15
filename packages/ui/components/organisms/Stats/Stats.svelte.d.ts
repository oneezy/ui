/** @typedef {typeof __propDef.props}  StatsProps */
/** @typedef {typeof __propDef.events}  StatsEvents */
/** @typedef {typeof __propDef.slots}  StatsSlots */
export default class Stats extends SvelteComponentTyped<{
    stats?: {
        name: string;
        value: string;
        type: string;
        duration: number;
    }[] | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type StatsProps = typeof __propDef.props;
export type StatsEvents = typeof __propDef.events;
export type StatsSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        stats?: {
            name: string;
            value: string;
            type: string;
            duration: number;
        }[] | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
