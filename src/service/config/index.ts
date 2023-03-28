// export const BASE_URL1 = 'http://152.136.185.210:5000'

let BASE_URL = ''
if (import.meta.env.PROD) {
  BASE_URL = 'http://111.230.245.205:8880'
} else {
  BASE_URL = 'http://111.230.245.205:8880'
}

export const TIME_OUT = 10000
export { BASE_URL }
