/** @typedef {typeof __propDef.props}  SocialProps */
/** @typedef {typeof __propDef.events}  SocialEvents */
/** @typedef {typeof __propDef.slots}  SocialSlots */
export default class Social extends SvelteComponentTyped<{
    socials?: ({
        id: string;
        view: string;
        name: string;
        url: string;
        size?: undefined;
        box?: undefined;
    } | {
        id: string;
        view: string;
        name: string;
        url: string;
        size: string;
        box: string;
    } | {
        id: string;
        name: string;
        url: string;
        view?: undefined;
        size?: undefined;
        box?: undefined;
    })[] | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
    get socials(): ({
        id: string;
        view: string;
        name: string;
        url: string;
        size?: undefined;
        box?: undefined;
    } | {
        id: string;
        view: string;
        name: string;
        url: string;
        size: string;
        box: string;
    } | {
        id: string;
        name: string;
        url: string;
        view?: undefined;
        size?: undefined;
        box?: undefined;
    })[];
}
export type SocialProps = typeof __propDef.props;
export type SocialEvents = typeof __propDef.events;
export type SocialSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        socials?: ({
            id: string;
            view: string;
            name: string;
            url: string;
            size?: undefined;
            box?: undefined;
        } | {
            id: string;
            view: string;
            name: string;
            url: string;
            size: string;
            box: string;
        } | {
            id: string;
            name: string;
            url: string;
            view?: undefined;
            size?: undefined;
            box?: undefined;
        })[] | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
