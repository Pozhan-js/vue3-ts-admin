/*
 * @Author: Why so serious my dear 854059946@qq.com
 * @Date: 2023-06-24 11:49:36
 * @LastEditors: Why so serious my dear 854059946@qq.com
 * @LastEditTime: 2023-06-24 16:28:47
 * @FilePath: /vue3-ts-admin/src/service/main/system/system.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
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

// 删除部门信息
export function deletePageById(pageName: string, id: number) {
  return HYRequest.delete({
    url: `/${pageName}/${id}`
  })
}
// 新增用户
export function newPagesData(pageName: string, pageInfo: any) {
  return HYRequest.post({
    url: `/${pageName}`,
    data: pageInfo
  })
}

// 编辑按钮
export function editPagesData(pageName: string, id: number, pageInfo: any) {
  return HYRequest.patch({
    url: `/${pageName}/${id}`,
    data: pageInfo
  })
}
