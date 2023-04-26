import { localCache } from '@/util/cache'
import { createRouter, createWebHashHistory } from 'vue-router'
import { LOGIN_TOKEN } from '@/global/constants'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/main'
    },
    {
      name: 'login',
      path: '/login',
      component: () => import('@/views/login/login.vue')
    },
    {
      name: 'main',
      path: '/main',
      component: () => import('@/views/main/main.vue')
    },
    {
      path: '/:pathMatch(.*)', //表示所有为被发现的路由都会跳转到这个页面
      component: () => import('@/views/not-found/NotFound.vue')
    }
  ]
})

// 指定路由守卫
// 参数：to（跳转到的位置） from（从哪里转过来的位置）
// 返回值：返回值决定导航的路径（不返回或者返回undefined，默认跳转）
// 举个列子：/=>/main
// TODO: 路由守卫

router.beforeEach((to, _, next) => {
  const token = localCache.getCache(LOGIN_TOKEN)
  // 字符串以xxx开头
  if (to.path.startsWith('/main') && !token) {
    // return '/login'
    next({ name: 'Login' })
  } else {
    next()
  }
})

export default router
