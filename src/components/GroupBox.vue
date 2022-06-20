<script setup lang="ts">
import { ref } from 'vue'
import Icon from './Icon.vue'

const expanded = ref(false)

defineProps<{ label: string }>()
</script>

<template>
  <div class="group-box">
    <div class="group-box-label">
      <button class="expand-button" @click="expanded = !expanded">
        <Icon
          :name="
            expanded ? 'i-ic-baseline-expand-less' : 'i-ic-baseline-expand-more'
          "
          size="large"
        />
      </button>
      <div>{{ label }}</div>
    </div>
    <slot v-if="expanded" />
  </div>
</template>

<style scoped>
.group-box {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.group-box-label {
  font-size: 0.875rem;
  font-weight: 400;
  display: flex;
  align-items: center;
}
</style>
