import { defineStore } from 'pinia'
import { accountLoginRequest, getUserInfoById } from '@/service/login/login'
import type { IAccount } from '@/types'
import { localCache } from '@/util/cache'
import { LOGIN_TOKEN } from '@/global/constants'
import router from '@/router'

const useLoginStore = defineStore('loginStore', {
  // NOTE: 因为state里面的数据是要作响应式的 所有都是proxy包裹
  state: () => {
    return {
      // ??表示当前面数据没有值时 将 ?? 后面的空字符串赋值
      token: localCache.getCache(LOGIN_TOKEN) ?? '',
      userInfo: {}
    }
  },
  getters: {},
  actions: {
    async loginAccountAction(account: IAccount) {
      const loginRes = await accountLoginRequest(account)
      // console.log(loginRes)
      const id = loginRes.data.id
      // const name = loginRes.data.name
      this.token = loginRes.data.token

      // 持久化token
      localCache.setCache(LOGIN_TOKEN, this.token)

      // 获取用户权限
      const userInfoResult = await getUserInfoById(id)
      // console.log(userInfoResult)
      this.userInfo = userInfoResult.data

      // 路由跳转
      router.push('/main')
    }
  }
})

export default useLoginStore
