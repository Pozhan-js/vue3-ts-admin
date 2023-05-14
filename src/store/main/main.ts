import { defineStore } from 'pinia'
import { getEntireRoles, getEntireDepartments } from '@/service/main/main'

interface MainState {
  entireRoles: any[]
  entireDepartments: any[]
}

const useMainStore = defineStore('main', {
  state: (): MainState => ({
    entireRoles: [],
    entireDepartments: []
  }),
  actions: {
    async fetchEntireDataAction() {
      const rolesResult = await getEntireRoles()
      const departmentsResult = await getEntireDepartments()
      // console.log(rolesResult, departmentsResult)

      this.entireRoles = rolesResult?.data.list
      this.entireDepartments = departmentsResult?.data.list
    }
  }
})

export default useMainStore
