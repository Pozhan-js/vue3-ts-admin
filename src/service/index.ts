import HYRequest from './request'
import { BASE_URL1, TIME_OUT1 } from './config'

const hyRequest = new HYRequest({
  baseURL: BASE_URL1,
  timeout: TIME_OUT1,
  interceptors: {}
})

export default hyRequest
