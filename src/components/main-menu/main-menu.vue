<template>
  <div class="main-menu">
    <!-- logo部分 -->
    <div class="logo">
      <img class="img" src="@/assets/img/logo.svg" alt="" />
      <h2 v-show="!isFold" class="title">快乐达管理系统</h2>
    </div>

    <!-- menu部分 -->
    <div class="menu">
      <el-menu
        active-text-color="#fff"
        text-color="#b7bdc3"
        background-color="#001529"
        :collapse="isFold"
      >
        <template v-for="item in userMenus" :key="item.id">
          <el-sub-menu :index="item.id + ''">
            <template #title>
              <el-icon>
                <component :is="item.icon.split('-icon-')[1]"></component>
              </el-icon>
              <span>{{ item.name }}</span>
            </template>

            <template v-for="subItem in item.children" :key="subItem.id">
              <el-menu-item :index="subItem.id + ''">
                {{ subItem.name }}
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>
        <!-- 系统总览 -->
      </el-menu>
    </div>
  </div>
</template>

<script lang="ts" setup>
// 使用store
import useLoginStore from '@/store/login/login'

defineProps({
  isFold: {
    type: Boolean,
    default: false
  }
})

const loginStore = useLoginStore()

const userMenus = loginStore.userMenus
</script>

<style lang="less" scoped>
.main-menu {
  width: 100%;
  height: 100%;
}
.logo {
  display: flex;
  height: 28px;
  padding: 12px 10px 8px 10px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;

  .img {
    height: 100%;
    margin: 0 10px;
  }

  .title {
    font-size: 16px;
    font-weight: 700;
    color: white;
    white-space: nowrap;
  }
}

.el-menu {
  border: none;
}
</style>
