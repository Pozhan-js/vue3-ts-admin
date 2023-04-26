/// <reference types="vite/client" />

// 意思是所有导出的.vue文件都是从src中导出的 类型为string

// declare module "*.vue" {
//   const src: string
//   export default src
// }

// declare module '*.vue' {
//   import { DefineComponent } from 'vue'
//   const component: DefineComponent
//   export default component
// }
