import * as Icons from '@element-plus/icons'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { createApp, createVNode } from 'vue'
import App from './App.vue'
import router from './router/index'
import { key, store } from './store/index'


const app=createApp(App)
app.use(router)
app.use(store,key)
app.use(ElementPlus)
app.mount('#app')

//全局注册组件
// 方式一
// Object.keys(Icons).forEach((key)=>{
//   app.component(key,Icons[key as keyof typeof Icons])
// })

// 方式二
const Icon =(props:{ icon :string})=>{
  const { icon } =props;
  return createVNode (Icons[icon as keyof typeof Icons])
}
app.component('Icon',Icon)