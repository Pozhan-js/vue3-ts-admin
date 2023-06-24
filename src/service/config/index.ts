/*
 * @Author: Why so serious my dear 854059946@qq.com
 * @Date: 2023-06-24 11:49:36
 * @LastEditors: Why so serious my dear 854059946@qq.com
 * @LastEditTime: 2023-06-24 12:06:24
 * @FilePath: /vue3-ts-admin/src/service/config/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// export const BASE_URL1 = 'http://152.136.185.210:5000'
// BASE_URL = 'http://111.230.245.205:8880'

let BASE_URL = ''
if (import.meta.env.PROD) {
  BASE_URL = 'http://123.207.32.32:5000'
  // BASE_URL = 'http://111.230.245.205:8880'
  // BASE_URL = 'http://111.230.245.205:8880'
} else {
  BASE_URL = 'http://123.207.32.32:5000'
  // BASE_URL = 'http://111.230.245.205:8880'
  // BASE_URL = 'http://111.230.245.205:8880'
}

export const TIME_OUT = 10000
export { BASE_URL }
