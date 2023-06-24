<!--
 * @Author: Why so serious my dear 854059946@qq.com
 * @Date: 2023-06-24 11:49:36
 * @LastEditors: Why so serious my dear 854059946@qq.com
 * @LastEditTime: 2023-06-24 21:30:57
 * @FilePath: /vue3-ts-admin/src/views/main/analysis/dashboard/dashboard.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="dashboard">
    <el-row :gutter="10">
      <template v-for="item in 4" :key="item">
        <el-col :span="6">
          <count-card></count-card>
        </el-col>
      </template>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
import countCard from './c-cpns/count-card/count-card.vue'
</script>

<style lang="less" scoped>
.dashboard {
  color: red;
}
</style>
