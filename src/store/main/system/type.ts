export interface ISystemState {
  usersList: IUsersItem[]
  usersTotalCount: number
}

interface IUsersItem {
  id: number
  name: string
  password: string
  cellphone: string
  departmentId: number
  enable: number
  roleId: number
  createAt: string
  updateAt: string
  realname: string
}
