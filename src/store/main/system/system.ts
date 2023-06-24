/*
 * @Author: Why so serious my dear 854059946@qq.com
 * @Date: 2023-06-24 11:49:36
 * @LastEditors: Why so serious my dear 854059946@qq.com
 * @LastEditTime: 2023-06-24 13:14:07
 * @FilePath: /vue3-ts-admin/src/store/main/system/system.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineStore } from 'pinia'
import {
  getUserList,
  deleteUserInfo,
  newUserData,
  editUserData,
  postPageListData
} from '@/service/main/system/system'
import type { ISystemState } from './type'

const useSystemStore = defineStore('system', {
  // 当没有定义state时，是拿不到state的数据的
  state: (): ISystemState => ({
    usersList: [],
    usersTotalCount: 0,

    pageList: [],
    pageTotalCount: 0
  }),

  actions: {
    async postUserListAction(params: any) {
      const { data } = await getUserList(params)
      const { list, totalCount } = data
      this.usersList = list
      this.usersTotalCount = totalCount
    },
    async deleteUserInfoAction(id: number) {
      const deleteResult = await deleteUserInfo(id)
      // console.log(deleteResult)`
      // TODO:刘思成今晚绝对不玩游戏 2023-5-7
      // HACK 刷新列表数据
      this.postUserListAction({
        size: 10,
        offset: 0
      })
    },
    async newUserDataAction(userInfo: any) {
      const newResult = await newUserData(userInfo)
      this.postUserListAction({
        size: 10,
        offset: 0
      })
      console.log(newResult)
    },
    async editUserDataAction(id: number, userInfo: any) {
      // console.log('修改谣传数据', id, userInfo)
      const editResult = await editUserData(id, userInfo)
      console.log(editResult)

      this.postUserListAction({
        size: 10,
        offset: 0
      })
    },

    //真对页面增删改查
    async postPageListDataAction(pageName: string, userInfo: any) {
      const pageListResult = await postPageListData(pageName, userInfo)
      console.log(pageListResult)
      const { list, totalCount } = pageListResult?.data

      this.pageList = list
      this.pageTotalCount = totalCount
    }
  }
})

export default useSystemStore
