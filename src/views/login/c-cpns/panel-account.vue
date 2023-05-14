<template>
  <div class="panel-account">
    <el-form
      label-width="60px"
      :rules="rules"
      :model="accountForm"
      size="large"
      status-icon
      ref="formRef"
    >
      <el-form-item label="账号" prop="name">
        <el-input v-model="accountForm.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="accountForm.password" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { ElMessage } from 'element-plus'
import type { ElForm, FormRules } from 'element-plus'
import useLoginStore from '@/store/login/login'
import type { IAccount } from '@/types'
import { localCache } from '@/utils/cache'
// import { accountLoginRequest } from '@/service/login/login'

const loginStore = useLoginStore()

const accountForm = reactive<IAccount>({
  name: localCache.getCache('name') ?? '',
  password: localCache.getCache('password') ?? ''
})

const rules = reactive<FormRules>({
  name: [
    { required: true, message: '请输入账号信息', trigger: 'blur' },
    { min: 6, max: 20, message: '必须是6~20个字符组成', trigger: 'blur' }
  ],
  password: [
    {
      required: true,
      message: '必须输入密码信息',
      trigger: 'blur'
    },
    {
      pattern: /^[a-z,0-9]{6,20}$/, //使用正则
      message: '必须是6~20个字母或数字组成',
      trigger: 'blur'
    }
  ]
})

// 账号登录逻辑
// 获取表单真实dom
const formRef = ref<InstanceType<typeof ElForm>>()
function loginAction(isRemPwd: boolean) {
  formRef.value?.validate((valid: boolean) => {
    if (valid) {
      // console.log('提交验证成功的信息')
      // 获取账户和密码
      const name = accountForm.name
      const password = accountForm.password

      // 发送请求
      // accountLoginRequest({ name, password }).then((res) => {
      //   console.log(res)
      // })
      loginStore.loginAccountAction({ name, password }).then(() => {
        if (isRemPwd) {
          localCache.setCache('name', name)
          localCache.setCache('password', password)
        } else {
          localCache.deleteCache('name')
          localCache.deleteCache('password')
          // localCache.deleteCache('isRemPwd')
        }
      })
    } else {
      // console.log('提交验证失败的信息', fields)
      ElMessage.error('Oops, 请您输入正确的面')
    }
  })
}

// 默认子组件中的属性不会暴露出去 可以通过这个方法暴露子组件内容
defineExpose({
  loginAction
})
</script>

<style lang="less" scoped>
.panel-account {
  color: red;
}
</style>
