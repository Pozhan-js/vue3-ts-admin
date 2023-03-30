import { defineStore } from 'pinia'
import { accountLoginRequest } from '@/service/login/login'
import type { IAccount } from '@/types'
import { localCache } from '@/util/cache'
import { LOGIN_TOKEN } from '@/global/constants'
import router from '@/router'

const useLoginStore = defineStore('loginStore', {
  state: () => {
    return {
      id: '',
      name: '',
      // ??表示当前面数据没有值时 将 ?? 后面的空字符串赋值
      token: localCache.getCache(LOGIN_TOKEN) ?? ''
    }
  },
  getters: {},
  actions: {
    async loginAccountAction(account: IAccount) {
      const loginRes = await accountLoginRequest(account)
      // console.log(loginRes)
      this.id = loginRes.data.id
      this.name = loginRes.data.name
      this.token = loginRes.data.token

      // 持久化token
      localCache.setCache(LOGIN_TOKEN, this.token)
      // 路由跳转
      router.push('/main')
    }
  }
})

export default useLoginStore
