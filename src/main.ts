/*
 * @Author: Why so serious my dear 854059946@qq.com
 * @Date: 2023-06-24 11:49:36
 * @LastEditors: Why so serious my dear 854059946@qq.com
 * @LastEditTime: 2023-06-24 20:55:43
 * @FilePath: /vue3-ts-admin/src/main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from 'vue'
// 样式重置
import 'normalize.css'

import '@/assets/css/index.less'
import App from './App.vue'
import router from './router'
import store from './store'
import RegisterIcon from '@/global/register-icons'

// 1.element Plus全局注册
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
// app.use(ElementPlus)

const app = createApp(App)
app.use(RegisterIcon)
// use方法相当于让app去执行这个函数传入函数一个app对象
app.use(store)
app.use(router)

app.mount('#app')
