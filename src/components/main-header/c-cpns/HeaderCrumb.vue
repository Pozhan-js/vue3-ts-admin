<template>
  <div class="crumb">
    <el-breadcrumb separator-icon="ArrowRight">
      <template v-for="item in breadcrumbs" :key="item.name">
        <el-breadcrumb-item :to="item.path">{{ item.name }}</el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { mapPathToBreadcrumb } from '@/utils/map-menus'
import useLoginStore from '@/store/login/login'
//获取现实面包屑的数据
const route = useRoute()
const loginStore = useLoginStore()

const breadcrumbs = computed(() => {
  return mapPathToBreadcrumb(route.path, loginStore.userMenus)
})

// console.log(breadcrumbs)
</script>

<style lang="less" scoped>
.crumb {
  color: red;
}
</style>
