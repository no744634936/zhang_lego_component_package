(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('vue'), require('lodash-es')) :
    typeof define === 'function' && define.amd ? define(['exports', 'vue', 'lodash-es'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.ZhangLegoComponents = {}, global.Vue, global._));
}(this, (function (exports, vue, lodashEs) { 'use strict';

    /* eslint-disable */
    // 所有component共有的方法就抽取出来做成一个hook
    const componentCommonFunc = (props, text_component_css_props_name_arr) => {
        // /挑选出与css有关的属性跟默认值
        const style_props = vue.computed(() => lodashEs.pick(props, text_component_css_props_name_arr));
        // 点击后的回调函数所以是个function
        const handleClick = () => {
            if (props.actionType === 'url' && props.url && !props.isEditing) {
                window.location.href = props.url;
            }
        };
        return {
            style_props,
            handleClick,
        };
    };

    // 所有component共有的属性。
    const common_props_with_default_value = {
        // actions
        actionType: '',
        url: '',
        // size
        height: '',
        width: '318px',
        paddingLeft: '0px',
        paddingRight: '0px',
        paddingTop: '0px',
        paddingBottom: '0px',
        // border type
        borderStyle: 'none',
        borderColor: '#000',
        borderWidth: '0',
        borderRadius: '0',
        // shadow and opacity
        boxShadow: '0 0 0 #000000',
        opacity: '1',
        // position and x,y
        // position: 'absolute',
        left: '0',
        top: '0',
        right: '0'
    };
    // 文本component特有的属性,加上所有component共有的属性。
    const text_component_props_with_defalut_value = {
        // basic props - font styles
        text: '正文内容',
        fontSize: '14px',
        fontFamily: '',
        fontWeight: 'normal',
        fontStyle: 'normal',
        textDecoration: 'none',
        lineHeight: '1',
        textAlign: 'left',
        color: '#000000',
        backgroundColor: '',
        ...common_props_with_default_value
    };
    // 图片component特有的属性,加上所有component共有的属性。
    const image_component_props_with_defalut_value = {
        src: 'test.url',
        ...common_props_with_default_value
    };
    //
    const shape_component_props_with_defalut_value = {
        backgroundColor: '',
        ...common_props_with_default_value
    };
    // 当组件在被编辑的时候，跳转链接无效
    // hooks/componentCommonFunc.ts 文件里有与之相关的判断
    const isEditingProp = {
        isEditing: {
            type: Boolean,
            default: false
        }
    };
    //  使用泛型
    const generate_component_props = (props_obj) => {
        const component_props = {};
        for (const key in props_obj) {
            component_props[key] = {
                type: key.constructor,
                default: props_obj[key]
            };
        }
        return { ...component_props, ...isEditingProp };
    };
    //LText.vue 的props里需要添加component_default__props。
    const component_default__props = generate_component_props(text_component_props_with_defalut_value);
    // 去掉 "actionType","url","text" 只留保留 text 组件的css 属性的数组
    const text_component_css_props_name_arr = lodashEs.without(Object.keys(text_component_props_with_defalut_value), "actionType", "url", "text");
    // 
    const image_component_default_props = generate_component_props(image_component_props_with_defalut_value);
    const image_component_css_props_name_arr = lodashEs.without(Object.keys(image_component_props_with_defalut_value), 'actionType', 'url', 'src');
    //
    const shape_component_default_props = generate_component_props(shape_component_props_with_defalut_value);
    const shape_component_css_props_name_arr = lodashEs.without(Object.keys(shape_component_props_with_defalut_value), 'actionType', 'url');

    var script$2 = vue.defineComponent({
        name: "l-text",
        props: {
            tag: { type: String, default: 'div' },
            ...component_default__props
        },
        setup(props) {
            console.log("props", props);
            const { style_props, handleClick } = componentCommonFunc(props, text_component_css_props_name_arr);
            console.log("style_props", style_props);
            return {
                style_props,
                handleClick,
            };
        },
    });

    const _withId$1 = /*#__PURE__*/vue.withScopeId("data-v-6bf95b7a");

    const render$2 = /*#__PURE__*/_withId$1((_ctx, _cache, $props, $setup, $data, $options) => {
      return (vue.openBlock(), vue.createBlock(vue.Fragment, null, [
        vue.createCommentVNode(" component 根据tag属性的值，自动转变标签类型 "),
        (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.tag), {
          style: _ctx.style_props,
          class: "l-text-component",
          onClick: _ctx.handleClick
        }, {
          default: _withId$1(() => [
            vue.createTextVNode(vue.toDisplayString(_ctx.text), 1 /* TEXT */)
          ]),
          _: 1 /* STABLE */
        }, 8 /* PROPS */, ["style", "onClick"]))
      ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
    });

    script$2.render = render$2;
    script$2.__scopeId = "data-v-6bf95b7a";
    script$2.__file = "src/components/LText/LText.vue";

    script$2.install = (app) => {
        // 这句话的意思是，所有vue，template标签里，不用引用就可以使用LText 组件
        app.component(script$2.name, script$2);
    };

    // array that contains style props
    var script$1 = vue.defineComponent({
        name: 'l-image',
        props: {
            ...image_component_default_props
        },
        setup(props) {
            // 重用并且简化
            // 抽离并且获得 styleProps
            const { style_props, handleClick } = componentCommonFunc(props, image_component_css_props_name_arr);
            return {
                style_props,
                handleClick
            };
        }
    });

    const _withId = /*#__PURE__*/vue.withScopeId("data-v-1e970aa2");

    const render$1 = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {
      return (vue.openBlock(), vue.createBlock("img", {
        style: _ctx.style_props,
        class: "l-image-component",
        onClick: _cache[1] || (_cache[1] = vue.withModifiers((...args) => (_ctx.handleClick && _ctx.handleClick(...args)), ["prevent"])),
        src: _ctx.src
      }, null, 12 /* STYLE, PROPS */, ["src"]))
    });

    script$1.render = render$1;
    script$1.__scopeId = "data-v-1e970aa2";
    script$1.__file = "src/components/LImage/LImage.vue";

    script$1.install = (app) => {
        // 这句话的意思是，所有vue，template标签里，不用引用就可以使用LImage 组件
        app.component(script$1.name, script$1);
    };

    // array that contains style props
    var script = vue.defineComponent({
        name: 'l-shape',
        props: {
            ...shape_component_default_props
        },
        setup(props) {
            // 重用并且简化
            // 抽离并且获得 styleProps
            const { style_props, handleClick } = componentCommonFunc(props, shape_component_css_props_name_arr);
            return {
                style_props,
                handleClick
            };
        }
    });

    function render(_ctx, _cache, $props, $setup, $data, $options) {
      return (vue.openBlock(), vue.createBlock("div", {
        style: _ctx.style_props,
        class: "l-shape-component",
        onClick: _cache[1] || (_cache[1] = vue.withModifiers((...args) => (_ctx.handleClick && _ctx.handleClick(...args)), ["prevent"]))
      }, null, 4 /* STYLE */))
    }

    script.render = render;
    script.__file = "src/components/LShape/LShape.vue";

    script.install = (app) => {
        // 这句话的意思是，所有vue，template标签里，不用引用就可以使用LShape 组件
        app.component(script.name, script);
    };

    const components = [
        script$2,
        script$1,
        script,
    ];
    const install = (app) => {
        components.forEach(component => {
            // 这句话的意思是，所有vue，template标签里，不用引用就可以直接使用LText，LImage ，LShape组件
            app.component(component.name, component);
        });
    };
    //所有组件一次性全部导出并且作为插件使用
    var index = {
        install
    };

    exports.LImage = script$1;
    exports.LShape = script;
    exports.LText = script$2;
    exports['default'] = index;
    exports.install = install;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
