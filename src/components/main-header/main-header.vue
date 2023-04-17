<template>
  <div class="main-header">
    <div class="menu-icon" @click="handleMenuIconClick">
      <el-icon size="25px">
        <!-- 动态组件可以将字符串转换成组件 -->
        <component :is="isFold ? 'Expand' : 'Fold'"></component>
      </el-icon>
    </div>
    <div class="content">
      <div class="breadcrumb">面包屑</div>
      <HeaderInfo></HeaderInfo>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import HeaderInfo from './c-cpns/HeaderInfo.vue'

const emit = defineEmits(['handleHold'])

const isFold = ref(false)

const handleMenuIconClick = () => {
  isFold.value = !isFold.value

  emit('handleHold', isFold.value)
}
</script>

<style lang="less" scoped>
.main-header {
  display: flex;
  align-items: center;
  flex: 1;
  height: 100%;

  .menu-icon {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    padding: 0 18px;
  }
}
</style>
