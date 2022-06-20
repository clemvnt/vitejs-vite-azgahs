<script setup lang="ts">
import { onClickOutside } from '@vueuse/core'
import { computed, ref } from 'vue'
import Icon from './Icon.vue'

defineProps<{ modelValue: boolean | undefined }>()

const emit = defineEmits(['update:modelValue'])

const modal = ref()

const results = [
  'OrderListUI',
  'OrderEditUI',
  'OrderLookupUI',
  'ProductListUI',
  'ProductEditUI',
  'CategoryEditUI',
  'CategoryListUI'
]

const searchInputValue = ref()

const activeResults = computed(() =>
  searchInputValue.value
    ? results.slice(0, results.length - searchInputValue.value.length)
    : results
)

const searchResultListHeight = computed(() =>
  activeResults.value.length
    ? `${activeResults.value.length * 3 + 1.75}rem`
    : '0'
)

onClickOutside(modal, (event) => {
  emit('update:modelValue', false)
})
</script>

<template>
  <Teleport v-if="modelValue" to="body">
    <div class="search-modal-overlay">
      <div ref="modal" class="search-modal">
        <div class="search-input-group">
          <Icon name="i-ic-search" size="large" />
          <input v-model="searchInputValue" type="text" class="search-input" />
        </div>
        <div
          class="search-result-list"
          :style="{ height: searchResultListHeight }"
        >
          <div
            aria-hidden="true"
            class="search-result-highlight"
            style="transform: translateY(28px)"
          ></div>
          <ul>
            <div v-if="activeResults.length" class="search-result-group-header">
              UI views
            </div>
            <li
              v-for="result in activeResults"
              :key="result"
              class="search-result-item"
            >
              <div style="display: flex; align-items: center; width: 100%">
                <Icon
                  name="i-mdi-view-dashboard-edit"
                  style="margin-right: 1rem"
                />
                <div>{{ result }}</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.search-modal-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 10;
}

.search-modal {
  top: 20%;
  left: 50%;
  background: var(--background);
  border-radius: 0.25rem;
  border: 1px solid var(--border);
  width: 640px;
  overflow: hidden;
  position: fixed;
  transform-origin: 50%;
  outline: 0;
  padding: 0.5rem;
  transform: translateX(-50%) scale(1);
}

.search-input-group {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.search-input {
  flex: 1;
  background: transparent;
  outline: 0;
  font-size: 1.25rem;
}

.search-result-list {
  overflow-y: auto;
  transition: height 0.1s ease 0s;
  will-change: height;
  position: relative;
}

.search-result-highlight {
  position: absolute;
  height: 48px;
  top: 0;
  left: 0;
  border-radius: 8px;
  background: var(--block-background);
  width: 100%;
  z-index: -1;
  transition: transform 0.1s cubic-bezier(0, 0, 0.2, 1);
}

.search-result-group-header {
  display: flex;
  align-items: center;
  background: transparent;
  height: 1.75rem;
  font-size: 0.75rem;
  padding: 0 8px;
}

.search-result-item {
  display: flex;
  align-items: center;
  height: 3rem;
  font-size: 0.875rem;
  font-weight: 500;
  padding: 0 1rem;
  border-radius: 0.25rem;
  cursor: pointer;
  background: transparent;
  white-space: nowrap;
  transition: color 0.1s cubic-bezier(0, 0, 0.2, 1);
}
</style>
