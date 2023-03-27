import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/main'
    },
    {
      path: '/login',
      component: () => import('@/views/login/Login.vue')
    },
    {
      path: '/main',
      component: () => import('@/views/main/Main.vue')
    },
    {
      path: '/:pathMatch(.*)', //表示所有为被发现的路由都会跳转到这个页面
      component: () => import('@/views/not-found/NotFound.vue')
    }
  ]
})

export default router
