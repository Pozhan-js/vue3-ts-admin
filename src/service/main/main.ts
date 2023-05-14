// 表示当前目录的父级目录下的index文件中 为什么是index呢？因为index文件会自动识别
import HYRequest from '..'

export function getEntireRoles() {
  return HYRequest.post({
    url: '/role/list'
  })
}

export function getEntireDepartments() {
  return HYRequest.post({
    url: '/department/list'
  })
}
