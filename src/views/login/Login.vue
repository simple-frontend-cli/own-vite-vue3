<script setup lang="ts">
import { ref } from 'vue'

import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

const $router = useRouter();
const store = useStore();

// 登录
const login = (params: { name: string, password: string }) => {
  store.dispatch('login', params).then((res) => {
    $router.push("/");
  })
}

</script>

<template>
  <button @click="login({ name: 'xxx', password: '123' })">登录</button>
</template>

<style scoped lang="less">
button {
  cursor: pointer;
}
</style>
