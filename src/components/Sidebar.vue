<script setup lang="ts">
import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core'

import Icon from './Icon.vue'

defineProps<{ menus: { icon: string; children: { caption: string }[] }[] }>()

const sidebarRef = ref()
const menuRef = ref()
const activeMenu = ref()
const pinnedMenu = ref(false)

onClickOutside(menuRef, (event) => {
  if (
    !pinnedMenu.value &&
    activeMenu.value &&
    !sidebarRef.value.contains(event.target)
  ) {
    console.log(event)
    activeMenu.value = undefined
  }
})

function handleMenuButtonClick(menu: any) {
  console.log(activeMenu.value, menu)
  activeMenu.value = activeMenu.value === menu ? undefined : menu
}

function handleMenuPinButtonClick() {
  pinnedMenu.value = !pinnedMenu.value
}
</script>

<template>
  <div ref="sidebarRef" class="sidebar">
    <div class="logo">
      <slot name="logo" />
    </div>
    <div class="menus">
      <slot name="menus">
        <button
          v-for="menu in menus"
          :key="menu.icon"
          @click="handleMenuButtonClick(menu)"
        >
          <Icon :name="menu.icon" size="large" />
        </button>
      </slot>
    </div>
  </div>
  <div
    ref="menuRef"
    v-if="activeMenu"
    class="menu"
    :class="{ 'pinned-menu': pinnedMenu }"
  >
    <div class="menu-actions">
      <button @click="handleMenuPinButtonClick()">
        <Icon
          :name="pinnedMenu ? 'i-ic-round-pin-off' : 'i-ic-round-push-pin'"
        />
      </button>
    </div>
  </div>
  <div v-if="activeMenu && !pinnedMenu" class="unpinned-overlay"></div>
</template>

<style scoped>
.sidebar {
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  width: 4rem;
  background: var(--block-background);
  border-right: 1px solid var(--border);
}

.logo > :deep(*) {
  margin: 0 auto;
  width: 2rem;
  height: 2rem;
  margin-bottom: 2rem;
}

.menus {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 0.75rem;
  flex: 1;
}

.menus > :deep(*) {
  border-radius: 0.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 3rem;
  width: 3rem;
  transition: 0.1s all;
}

.menus > :deep(*):hover {
  background: var(--border);
}

.menu {
  padding: 1rem 0.5rem;
  display: flex;
  flex-direction: column;
  width: 20rem;
  background: var(--block-background);
  border-right: 1px solid var(--border);
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 2;
  left: 4rem;
}

.menu-actions {
  display: flex;
  justify-content: flex-end;
}

.pinned-menu {
  position: relative;
  left: 0;
}

.unpinned-overlay {
  background: rgba(0, 0, 0, 0.5);
  pointer-events: none;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  left: 4rem;
}
</style>
