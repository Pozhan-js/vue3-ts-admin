import http from '..'
import type { IAccount } from '@/types'

export function accountLoginRequest(account: IAccount) {
  return http.post({
    url: '/login',
    data: account
  })
}
