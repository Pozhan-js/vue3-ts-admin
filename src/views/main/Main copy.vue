<template>
  <div class="main">
    <h2>main</h2>
    <button @click="handleExitClick">退出登录</button>
    <!-- <div>{{ counterStore.counter }}-{{ counterStore.doubleCounter }}</div> -->
  </div>
</template>

<script lang="ts" setup>
import router from '@/router'
import { localCache } from '@/util/cache'
import { LOGIN_TOKEN } from '@/global/constants'
// import useCounterStore from '@/store/countent'

// const counterStore = useCounterStore()
const handleExitClick = () => {
  // 删除token
  localCache.deleteCache(LOGIN_TOKEN)
  // 页面跳转到 登录页面
  router.push('/login')
}
</script>

<style lang="less" scoped>
.main {
  color: red;
}
</style>
