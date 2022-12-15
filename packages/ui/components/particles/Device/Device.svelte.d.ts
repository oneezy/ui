/** @typedef {typeof __propDef.props}  DeviceProps */
/** @typedef {typeof __propDef.events}  DeviceEvents */
/** @typedef {typeof __propDef.slots}  DeviceSlots */
export default class Device extends SvelteComponentTyped<{
    device: any;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type DeviceProps = typeof __propDef.props;
export type DeviceEvents = typeof __propDef.events;
export type DeviceSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        device: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
