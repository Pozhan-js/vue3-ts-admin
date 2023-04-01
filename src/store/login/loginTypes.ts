export interface IUserInfo {
  id: number
  name: string
  cellphone: string
  createAt: string
  updateAt: string
  role: Role
  department: Department
}

export interface Role {
  id: number
  name: string
  intro: string
  createAt: string
  updateAt: string
}

export interface Department {
  id: number
  name: string
  createAt: string
  updateAt: string
}
