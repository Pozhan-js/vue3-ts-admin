<template>
  <div class="user-model">
    <el-dialog
      v-model="dialogVisible"
      :title="isNewRef ? '新建用户' : '修改用户'"
      width="30%"
      center
    >
      <div class="form">
        <el-form :model="userForm" :label-width="100" size="large">
          <el-form-item label="用户名" prop="name">
            <el-input v-model="userForm.name" placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item label="真实姓名" prop="realname">
            <el-input v-model="userForm.realname" placeholder="请输入真实姓名"></el-input>
          </el-form-item>
          <el-form-item label="密码" v-if="isNewRef" prop="password">
            <el-input v-model="userForm.password" placeholder="请输入密码" show-password></el-input>
          </el-form-item>
          <el-form-item label="手机号码" prop="cellphone">
            <el-input
              v-model="userForm.cellphone"
              placeholder="请输入手机号码"
              show-password
            ></el-input>
          </el-form-item>
          <el-form-item label="选择角色" prop="roleId">
            <!-- <el-input v-model="userForm.roleId" placeholder="请选择角色" show-password></el-input> -->
            <el-select v-model="userForm.roleId" placeholder="请选择角色" style="width: 100%">
              <template v-for="item in entireRoles" :key="item.id">
                <el-option :label="item.name" :value="item.id"></el-option>
              </template>
            </el-select>
          </el-form-item>
          <el-form-item label="选择角色" prop="departmentId">
            <!-- <el-input
              v-model="userForm.departmentId"
              placeholder="请选择部门"
              show-password
            ></el-input> -->
            <el-select v-model="userForm.departmentId" placeholder="请选择部门" style="width: 100%">
              <template v-for="item in entireDepartments" :key="item.id">
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
  realname: '',
  password: '',
  cellphone: '',
  roleId: '',
  departmentId: ''
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
    for (const key in editInfo) {
      userForm[key] = editInfo[key]
    }
  } else {
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
    systemStore.editUserDataAction(editData.value.id, userForm)
  } else {
    systemStore.newUserDataAction(userForm)
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
