<!--
 * @Author: Why so serious my dear 854059946@qq.com
 * @Date: 2023-06-24 15:46:43
 * @LastEditors: Why so serious my dear 854059946@qq.com
 * @LastEditTime: 2023-06-24 16:39:24
 * @FilePath: /vue3-ts-admin/src/views/main/system/department/c-cpns/pages-model.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="user-model">
    <el-dialog v-model="dialogVisible" :title="isNewRef ? '新建部门' : '修改部门'" width="30%" center>
      <div class="form">
        <el-form :model="userForm" label-width="100px" size="large">
          <el-form-item label="部门名称" prop="name">
            <el-input v-model="userForm.name" placeholder="请输入部门名称"></el-input>
          </el-form-item>
          <el-form-item label="部门领导" prop="leader">
            <el-input v-model="userForm.leader" placeholder="请输入部门领导"></el-input>
          </el-form-item>
          <el-form-item label="选择部门" prop="parentId">
            <el-select v-model="userForm.parentId" placeholder="请选择部门" style="width: 100%">
              <template v-for=" item  in  entireDepartments " :key="item.id">
                <el-option :label="item.name" :value="item.id"></el-option>
              </template>
            </el-select>
          </el-form-item>
        </el-form>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="handleConfirmClick"> 确定 </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>
<script lang="ts" setup>
import { reactive, ref } from 'vue'
import useMainStore from '@/store/main/main'
import useSystemStore from '@/store/main/system/system'
import { storeToRefs } from 'pinia'

const dialogVisible = ref(false)

const mainStore = useMainStore()
const systemStore = useSystemStore()
// 将store中的数据转换成响应式数据 因为解构会失去响应式
let { entireDepartments, entireRoles } = storeToRefs(mainStore)

const userForm = reactive({
  name: '',
  leader: '',
  parentId: '',
})

const isNewRef = ref(true)
const editData = ref()

// 定义设置dialogVisible的方法
const setDialogVisible = (isNew: boolean = true, editInfo?: any) => {
  // 控制选项显示的变量
  isNewRef.value = isNew
  //如果变量为false 而且editInfo没有值则表示是修改操作
  if (!isNew && userForm) {
    editData.value = editInfo
    // TODO请求携带参数错误
    for (const key in userForm) {
      userForm[key] = editInfo[key]
    }
  } else {
    // TODO 新建用户的时候清空表单
    for (const key in userForm) {
      userForm[key] = ''
    }
    editData.value = null
  }
  // 这里定义一个方法是为了 在状态改变之前做一次拦截 可以在状态改变之前加一些 判断条件
  dialogVisible.value = true
}

// 点及确定按钮的时候
// BUG: 不能直接使用userForm 会导致数据不更新
const handleConfirmClick = () => {
  dialogVisible.value = false
  if (!isNewRef.value && editData.value) {
    systemStore.editPagesDataAction('department', editData.value.id, userForm)
  } else {
    systemStore.newPagesDataAction('department', userForm)
  }
}

defineExpose({
  setDialogVisible
})
</script>

<style lang="less" scoped>
.form {
  padding: 0 20px;
}
</style>
