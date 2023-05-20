import HYRequest from '@/service'

/* 或区系统菜单中的用户列表 */
export const getUserList = (params: any) => {
  return HYRequest.post({
    url: '/users/list',
    data: params
  })
}

/* 删除用户列表中数据 */
export const deleteUserInfo = (id: number) => {
  return HYRequest.delete({
    url: `/users/${id}`
  })
}

// 新增用户
export function newUserData(userInfo: any) {
  return HYRequest.post({
    url: '/users',
    data: userInfo
  })
}

// 修改表格数据
export function editUserData(id: number, userInfo: any) {
  return HYRequest.patch({
    url: `/users/${id}`,
    data: userInfo
  })
}

/* 针对页面增删改查 */
export function postPageListData(pageName: string, userInfo: any) {
  return HYRequest.post({
    url: `/${pageName}/list`,
    data: userInfo
  })
}
