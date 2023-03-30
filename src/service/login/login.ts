import http from '..'
// import { LOGIN_TOKEN } from '@/global/constants'
// import { localCache } from '@/util/cache'
import type { IAccount } from '@/types'

// 获取token接口
export function accountLoginRequest(account: IAccount) {
  return http.post({
    url: '/login',
    data: account
  })
}

// 获取用户权限接口
export function getUserInfoById(id: number) {
  return http.get({
    url: `/users/${id}`
    // headers: {
    //   Authorization: `Bearer ${localCache.getCache(LOGIN_TOKEN)}`
    // }
    //  注意在 传递授权信息时 一定要查看  Bearer 是否携带 要是服务器做了相应处理可以不带
  })
}
