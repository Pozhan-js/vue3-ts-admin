import { defineStore } from 'pinia'
import { accountLoginRequest } from '@/service/login/login'
import type { IAccount } from '@/types'
import { localCache } from '@/util/cache'

const LOGIN_TOKEN = 'token'

const useLoginStore = defineStore('loginStore', {
  state: () => {
    return {
      id: '',
      name: '',
      token: localCache.getCache(LOGIN_TOKEN)
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
    }
  }
})

export default useLoginStore
