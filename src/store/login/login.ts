import { defineStore } from 'pinia'
import { accountLoginRequest, getUserInfoById, getUserMenusByRoleId } from '@/service/login/login'
import type { IAccount } from '@/types'
import { localCache } from '@/util/cache'
import { mapMenusToRoutes } from '@/util/map-menus'
import { LOGIN_TOKEN } from '@/global/constants'
import router from '@/router'

// 定义state类型
interface ALLState {
  userInfo: any
  token: any
  userMenus: any
}

const useLoginStore = defineStore('loginStore', {
  // NOTE: 因为state里面的数据是要作响应式的 所有都是proxy包裹
  state: (): ALLState => {
    return {
      // ??表示当前面数据没有值时 将 ?? 后面的空字符串赋值
      token: localCache.getCache(LOGIN_TOKEN) ?? '',
      userInfo: localCache.getCache('userInfo') ?? {},
      userMenus: localCache.getCache('userMenus') ?? []
    }
  },
  getters: {},
  actions: {
    async loginAccountAction(account: IAccount) {
      try {
        const loginRes = await accountLoginRequest(account)
        const id = loginRes.data.id
        this.token = loginRes.data.token

        localCache.setCache(LOGIN_TOKEN, this.token)

        // 1.获取用户权限
        const userInfoResult = await getUserInfoById(id)
        this.userInfo = userInfoResult?.data

        // 2.获取权限menu
        const userMenuData = await getUserMenusByRoleId(userInfoResult?.data.role.id)
        this.userMenus = userMenuData?.data

        // 3.持久化token
        localCache.setCache('userInfo', this.userInfo) //本地缓存用户信息
        localCache.setCache('userMenus', this.userMenus) // 本地缓存权限列表

        // 获取动态路由列表  RouteRecordRaw时路由对象的类型
        const routes = mapMenusToRoutes(this.userMenus)
        // 动态加载路由
        routes.forEach((route) => router.addRoute('/main', route))
        // 路由跳转
        router.push('/main')
      } catch (error) {
        console.log(error)
      }
    }
  }
})

export default useLoginStore
