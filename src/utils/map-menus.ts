import type { RouteRecordRaw } from 'vue-router'
/**
 *
 * @returns
 */
function loadLocalRoutes() {
  const localRoutes: RouteRecordRaw[] = []
  // 导入所有文件路由对象 /**/表示任意文件夹 当如果main文件夹下的子文件夹还有子文件夹时 会报错 就要全部匹配
  const routesFiles: Record<string, any> = import.meta.glob('../router/main/**/*.ts', {
    eager: true
  })

  for (const key in routesFiles) {
    const modules = routesFiles[key]
    localRoutes.push(modules.default)
  }
  //获取本地路由
  return localRoutes
}

// 匹配第一个子菜单
export let firstMenu: any = null

/**
 *
 * @param userMenus 用户的菜单
 * @returns
 */
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
          // NOTE 记录第一个被匹配

          if (!firstMenu && hasRoute) {
            firstMenu = child
          }

          // 5.如果有就添加到路由中
          if (hasRoute) {
            // BUG: 这里有个问题 就是如果有多个子菜单的话 会重复添加路由

            // 这里表示当子路由第一次匹配的时候
            if (!routes.find((item) => item.path === menu.url)) {
              // 添加顶层路由 将当前子路由的路径当做重定向的路径
              routes.push({ path: menu.url, redirect: hasRoute.path })
            }
            // 添加子路由菜单
            routes.push(hasRoute)
          }
        }
      }
    }
  }

  // console.log('最终路由对象', routes)

  return routes
}

/**
 *
 * @param path 匹配的路径
 * @param userMenus 所有的菜单
 */
export const mapPathToMenu = (path: string, userMenus: any[]) => {
  for (const menu of userMenus) {
    for (const submenu of menu.children) {
      if (submenu.url === path) {
        return submenu
      }
    }
  }
}

interface IBreadCrumbs {
  name: string
  path?: string
}

export const mapPathToBreadcrumb = (path: string, userMenus: any[]) => {
  const breadCrumb: IBreadCrumbs[] = []
  for (const menu of userMenus) {
    for (const submenu of menu.children) {
      if (submenu.url === path) {
        // NOTE: 这里的path是路由的path 匹配顶层菜单
        breadCrumb.push({ name: menu.name, path: menu.url })
        // NOTE 这里的path是路由的path 匹配子菜单
        breadCrumb.push({ name: submenu.name, path: submenu.url })
      }
    }
  }

  return breadCrumb
}
