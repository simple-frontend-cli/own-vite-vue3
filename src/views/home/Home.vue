<script setup lang="ts">
import { ref } from 'vue'

import MainLayout from '@/layouts/MainLayout/index.vue'
import HeaderComponent from '@/components/Header/index.vue'
import MenuComponent from '@/components/Menu/index.vue'

import { useStore } from 'vuex'

const store = useStore()
const { manus } = store.state.user
</script>

<template>
  <main-layout>
    <template v-slot:header>
      <header-component />
    </template>
    <template v-slot:nav>
      <menu-component :data="manus" />
    </template>
    <template v-slot:content>
      <router-view></router-view>
    </template>
  </main-layout>
</template>

<style scoped lang="less"></style>
