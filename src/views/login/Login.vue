<template>
  <div class="login">
    <loginPenal></loginPenal>
  </div>
</template>

<script lang="ts" setup>
import loginPenal from './c-cpns/login-penal.vue'
</script>

<style lang="less" scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  background: url('@/assets/img/login-bg.svg');
}
</style>
