<template>
  <div class="user">
    <UserSearch @queryClick="handleQueryClick" @resetClick="handleResetClick"></UserSearch>
    <UserContent
      ref="contentRef"
      @new-click="handleNewBtnClick"
      @new-edit="handleEditClick"
    ></UserContent>
    <UserModel ref="userModelRef" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import UserSearch from './c-cpns/UserSearch.vue'
import UserContent from './c-cpns/UserContent.vue'
import UserModel from './c-cpns/UserModel.vue'
// 获取组件ref
const contentRef = ref<InstanceType<typeof UserContent>>()

//获取dialog组件实列
const userModelRef = ref<InstanceType<typeof UserModel>>()

// 获取表格数据
function handleQueryClick(formData: any) {
  // console.log(formData)
  contentRef.value?.fetchUserListData(formData)
}

// 重置请求
function handleResetClick() {
  contentRef.value?.fetchUserListData()
}

// 改变dialog组件显示
const handleNewBtnClick = () => {
  userModelRef.value?.setDialogVisible()
}

// 修改弹窗
const handleEditClick = (editInfo: any) => {
  userModelRef.value?.setDialogVisible(false, editInfo)
  // console.log('编辑', editInfo)
}
</script>

<style lang="less" scoped>
.user {
  border-radius: 20px;
  overflow: hidden;
  padding-bottom: 20px;
}
</style>
