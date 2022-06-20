<script setup lang="ts">
defineProps<{ name: string; size?: 'default' | 'large' }>()
</script>

<template>
  <div :class="[name, size === 'large' ? 'large' : undefined]"></div>
</template>

<style scoped>
.large {
  font-size: 1.5rem;
}
</style>
