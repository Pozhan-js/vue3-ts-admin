import { createApp } from 'vue'
// 样式重置
import 'normalize.css'

import '@/assets/css/index.less'
import App from './App.vue'
import router from './router'
import pinia from './store'
import RegisterIcon from './global/register-icons'

// 1.element Plus全局注册
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
// app.use(ElementPlus)

const app = createApp(App)
app.use(RegisterIcon)
app.use(router)
app.use(pinia)
app.mount('#app')
