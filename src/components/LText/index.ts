import { App } from 'vue'  // App是一个类型
import LText from './LText.vue'

LText.install =(app: App)=>{
    // 这句话的意思是，所有vue，template标签里，不用引用就可以使用LText 组件
    app.component(LText.name, LText)
}

export default LText