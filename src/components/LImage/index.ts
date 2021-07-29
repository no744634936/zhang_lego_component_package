import { App } from 'vue'  // App是一个类型
import LImage from './LImage.vue'

LImage.install =(app: App)=>{
    // 这句话的意思是，所有vue，template标签里，不用引用就可以使用LImage 组件
    app.component(LImage.name, LImage) 
}

export default LImage