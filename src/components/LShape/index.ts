import { App } from 'vue'  // App是一个类型
import LShape from './LShape.vue'

LShape.install =(app: App)=>{
    // 这句话的意思是，所有vue，template标签里，不用引用就可以使用LShape 组件
    app.component(LShape.name, LShape)
}

export default LShape