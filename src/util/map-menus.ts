import type { RouteRecordRaw } from 'vue-router'

function loadLocalRoutes() {
  const localRoutes: RouteRecordRaw[] = []
  // 导入所有文件路由对象 /**/表示任意文件夹 当如果main文件夹下的子文件夹还有子文件夹时 会报错 就要全部匹配
  const routesFiles: Record<string, any> = import.meta.glob('../router/main/**/*.ts', {
    eager: true
  })
  console.log(routesFiles)

  for (const key in routesFiles) {
    const modules = routesFiles[key]
    console.log(modules.default)
    localRoutes.push(modules.default)
  }

  console.log(localRoutes)
  //获取本地路由
  return localRoutes
}

export const mapMenusToRoutes = (userMenus: any[]) => {
  const localRoutes = loadLocalRoutes()

  // 定义一个将路由装进去的数组
  const routes: RouteRecordRaw[] = []
  // 动态判断那些路由需要被加载
  for (const menu of userMenus) {
    // console.log(menu);
    // 1.判断是否有子菜单
    if (menu.children) {
      // 2.判断是否有子菜单的path
      for (const child of menu.children) {
        // 3.判断是否有子菜单的path
        if (child.url) {
          // 4.判断是否有子菜单的path是否在本地路由中
          const hasRoute = localRoutes.find((route) => route.path === child.url)

          // 5.如果有就添加到路由中
          if (hasRoute) {
            // BUG: 这里有个问题 就是如果有多个子菜单的话 会重复添加路由
            console.log(hasRoute)

            routes.push(hasRoute)
          }
        }
      }
    }
  }

  return routes
}
