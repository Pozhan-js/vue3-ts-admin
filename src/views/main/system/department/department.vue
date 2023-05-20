<template>
  <div class="department">
    <pages-search @query-click="handleQueryClick" @reset-click="handleResetClick"></pages-search>
    <pages-content ref="contentRef"></pages-content>
  </div>
</template>

<script setup lang="ts" name="department">
import PagesSearch from './c-cpns/pages-search.vue'
import PagesContent from './c-cpns/pages-content.vue'
import { ref } from 'vue'

const contentRef = ref<InstanceType<typeof PagesContent>>()

const handleQueryClick = (formData: any) => {
  contentRef.value?.fetchPageListData(formData)
}

// 重置请求
function handleResetClick() {
  contentRef.value?.fetchPageListData()
}
</script>

<style scoped></style>
