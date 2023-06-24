<!--
 * @Author: Why so serious my dear 854059946@qq.com
 * @Date: 2023-06-24 11:49:36
 * @LastEditors: Why so serious my dear 854059946@qq.com
 * @LastEditTime: 2023-06-24 16:02:23
 * @FilePath: /vue3-ts-admin/src/views/main/system/department/department.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="department">
    <pages-search @query-click="handleQueryClick" @reset-click="handleResetClick"></pages-search>
    <pages-content ref="contentRef" @new-click="handleNewClick" @new-edit="handleEditClick"></pages-content>
    <pages-model ref="modelRef"></pages-model>
  </div>
</template>

<script setup lang="ts" name="department">
import PagesSearch from './c-cpns/pages-search.vue'
import PagesContent from './c-cpns/pages-content.vue'
import PagesModel from './c-cpns/pages-model.vue'
import { ref } from 'vue'

const contentRef = ref<InstanceType<typeof PagesContent>>()

const handleQueryClick = (formData: any) => {
  contentRef.value?.fetchPageListData(formData)
}

// 重置请求
function handleResetClick() {
  contentRef.value?.fetchPageListData()
}

// TODO获取模态框实例  获取组件的ref实例e
const modelRef = ref<InstanceType<typeof PagesModel>>()
// 点击新建部门
function handleNewClick() {
  modelRef.value?.setDialogVisible()
}
// 点击修改部门
function handleEditClick(itemData: any) {
  modelRef.value?.setDialogVisible(false, itemData)
}
</script>

<style scoped></style>
