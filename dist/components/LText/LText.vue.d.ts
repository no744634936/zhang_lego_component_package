declare const _default: import("vue").DefineComponent<{
    isEditing: {
        type: BooleanConstructor;
        default: boolean;
    };
    tag: {
        type: StringConstructor;
        default: string;
    };
}, {
    style_props: import("vue").ComputedRef<Pick<{
        [key: string]: any;
    }, string>>;
    handleClick: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    isEditing?: unknown;
    tag?: unknown;
} & {
    isEditing: boolean;
    tag: string;
} & {}>, {
    isEditing: boolean;
    tag: string;
}>;
export default _default;
