import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'

dayjs.extend(utc)

// 格式化零时区时间
export const formateDate = (utcString: string, formate = `YYYY-MM-DD HH:mm:ss`) => {
  const resultTime = dayjs.utc(utcString).utcOffset(8).format(formate) // 2019-03-06T09:11:55Z
  return resultTime
}
