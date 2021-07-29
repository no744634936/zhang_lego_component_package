declare const componentCommonFunc: (props: {
    [key: string]: any;
}, text_component_css_props_name_arr: string[]) => {
    style_props: import("vue").ComputedRef<Pick<{
        [key: string]: any;
    }, string>>;
    handleClick: () => void;
};
export default componentCommonFunc;
