<script setup lang="ts">
import { MenuItemType } from './type'

import { ref } from 'vue'
import { useRouter } from 'vue-router'

import { CaretDown, CaretForward } from '@vicons/ionicons5' // 图标库

import MenuComponent from '../Menu/index.vue' // 引用组件本身

const $router = useRouter()

interface PropsType {
  data: MenuItemType[]
  parentId?: string
  open?: boolean
}
// defineProps的数据类型(PropsType)暂无法从外部 type 中引入
withDefaults(defineProps<PropsType>(), {
  data: () => [], // 引用类型必须return
  parentId: '',
  open: true,
})

// 当前选中菜单
const CurItem = ref<string>('')
// 展开的菜单
const OpenMenu = ref<string[]>([])

// 菜单切换
const handleMenu = (item: MenuItemType) => {
  if (!item.children || item.children.length === 0) {
    CurItem.value = item.title
    $router.push({ path: item.path })
  } else {
    let curOpenMenu: string[] = OpenMenu.value.map((item) => item)
    const ChildDom: any = document.getElementById(item.name)
    if (ChildDom?.className.indexOf('nav-open-ul') > -1) {
      ChildDom.className = 'nav-menu-ul nav-close-ul'
      const CurIndex = curOpenMenu.indexOf(item.name)
      curOpenMenu.splice(CurIndex, 1)
    } else {
      ChildDom.className = 'nav-menu-ul nav-open-ul'
      curOpenMenu.push(item.name)
    }
    OpenMenu.value = curOpenMenu
  }
}
</script>

<template>
  <ul
    class="nav-menu-ul"
    :class="open ? 'nav-open-ul' : 'nav-close-ul'"
    v-if="data.length"
    :id="parentId"
  >
    <li v-for="(item, index) in data" :key="index">
      <div class="menu-operate-div" @click="handleMenu(item)">
        <!-- <span class="menu-icon-span" v-if="item?.children && item?.children.length"></span> -->
        <span
          :class="
            item.title === CurItem ? 'normal-menu active-menu' : 'normal-menu'
          "
        >
          {{ item.title }}
        </span>
        <span
          class="menu-expand-span"
          v-if="item?.children && item?.children.length"
        >
          <caret-forward v-if="OpenMenu.indexOf(item.name)" />
          <caret-down v-else />
        </span>
      </div>
      <menu-component
        :data="item?.children || []"
        :parentId="item.name"
        :open="false"
      />
    </li>
  </ul>
</template>

<style scoped lang="less">
.nav-menu-ul {
  width: auto;
  list-style: none;

  > li {
    overflow: hidden;
  }

  .menu-operate-div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 2rem 0.5rem 4rem;
    cursor: pointer;

    > span {
      display: flex;
      align-items: center;

      > svg {
        width: 100%;
      }
    }

    .menu-expand-span {
      width: 1.25rem;
    }
  }

  .normal-menu {
    font-size: 1rem;
  }

  .active-menu {
    color: pink;
  }
}

@keyframes open-menu-animation {
  0% {
    transform: translateX(20%);
  }

  100% {
    transform: translateX(0);
  }
}

.nav-open-ul {
  animation: open-menu-animation 0.5s ease;
}

.nav-close-ul {
  display: none;
}
</style>
