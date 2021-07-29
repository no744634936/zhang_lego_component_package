<template>
  <div 
    :style="style_props" 
    class="l-shape-component" 
    @click.prevent="handleClick"
  ></div>
</template>
<script lang="ts">

import { defineComponent } from 'vue'
import componentCommonFunc from '../../hooks/componentCommonFunc'
import {shape_component_default_props, shape_component_css_props_name_arr} from "../../defaultProps"

// array that contains style props
export default defineComponent({
  name: 'l-shape',
  props: {
    ...shape_component_default_props
  },
  setup (props) {
    // 重用并且简化
    // 抽离并且获得 styleProps
    const { style_props, handleClick} = componentCommonFunc(props, shape_component_css_props_name_arr)
    return {
       style_props,
       handleClick
    }
  }
})
</script>