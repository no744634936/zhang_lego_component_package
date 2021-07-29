import { App } from 'vue'  // App是一个类型
import LText from './components/LText/index'
import LImage from './components/LImage/index'
import LShape from './components/LShape'

const components=[
    LText,
    LImage,
    LShape,
]

const install= (app: App)=>{
    components.forEach(component=>{
        // 这句话的意思是，所有vue，template标签里，不用引用就可以直接使用LText，LImage ，LShape组件
        app.component(component.name, component)
    })
}

//单个组件导出并且作为插件使用
export{
    LText,
    LImage,
    LShape,
    install,
}

//所有组件一次性全部导出并且作为插件使用
export default {
    install
}