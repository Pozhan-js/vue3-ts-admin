<template>
  <div class="login-penal">
    <!-- 顶部标题 -->
    <h1 class="title">合贵后台管理系统</h1>
    <!-- 中间类容tabs -->
    <div class="tabs">
      <el-tabs type="border-card" v-model="activeName" stretch>
        <!-- 账号登录的pane -->
        <el-tab-pane label="User" name="account">
          <template #label>
            <div class="label">
              <el-icon><UserFilled /></el-icon>
              <span class="text">账号登录</span>
            </div>
          </template>
          <panel-account ref="accountRef"></panel-account>
        </el-tab-pane>

        <!-- 手机登录的pane -->
        <el-tab-pane label="Config" name="phone">
          <template #label>
            <div class="label">
              <el-icon><Iphone /></el-icon>
              <span class="text">手机登录</span>
            </div>
          </template>
          <panel-phone></panel-phone>
        </el-tab-pane>
      </el-tabs>
    </div>
    <!-- 底部区域 -->
    <div class="controls">
      <el-checkbox v-model="isRemPwd" label="记住密码" size="large" />
      <el-link type="primary">忘记密码</el-link>
    </div>
    <el-button
      class="login-btn"
      type="primary"
      size="large"
      @click="handleLoginBtnClick"
    >
      立即登录
    </el-button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import PanelAccount from './panel-account.vue'
import PanelPhone from './panel-phone.vue'

const isRemPwd = ref<boolean>(false)
const activeName = ref<string>('account')

// 获取组件实例
const accountRef = ref<InstanceType<typeof PanelAccount>>()

// <InstanceType<typeof PanelAccount>>表示 PanelAccount这个构造函数的返回值的类型
// InstanceType可以得到返回值类型
// 加单理解就是可以得到组件实例类型

const handleLoginBtnClick = () => {
  if (activeName.value === 'phone') {
    // console.log('用户在进行手机登录')accountRef
  } else {
    accountRef.value?.loginAction()
    console.log('用户在进行账号登录')
  }
}
</script>

<style lang="less" scoped>
.login-penal {
  width: 330px;
  margin-bottom: 150px;

  .title {
    text-align: center;
    margin-bottom: 15px;
  }

  .label {
    display: flex;
    align-items: center;
    justify-content: center;

    .text {
      margin-left: 10px;
    }
  }

  .controls {
    margin-top: 12px;
    display: flex;

    justify-content: space-between;
  }

  .login-btn {
    margin-top: 10px;
    width: 100%;
  }
}
</style>
