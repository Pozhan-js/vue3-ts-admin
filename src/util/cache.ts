enum CacheType {
  local,
  session
}

class Cache {
  storage: Storage

  constructor(type: CacheType) {
    this.storage = type == CacheType.local ? localStorage : sessionStorage
  }
  setCache(key: string, value: any) {
    if (value) {
      this.storage.setItem('token', JSON.stringify(value))
    }
  }

  getCache(key: string) {
    const value = this.storage.getItem(key)
    if (value) {
      return JSON.parse(value)
    }
  }

  deleteCache(key: string) {
    this.storage.removeItem(key)
  }

  clearCache() {
    this.storage.clear()
  }
}

const localCache = new Cache(CacheType.local)
const sessionCache = new Cache(CacheType.session)

export { localCache, sessionCache }
