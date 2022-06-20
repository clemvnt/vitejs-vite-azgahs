<script setup lang="ts">
defineProps<{ label: string }>()
</script>

<template>
  <div class="form-group">
    <label class="label">{{ label }}</label>
    <slot><input class="input" type="text" /></slot>
  </div>
</template>

<style scoped>
.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
}

.label {
  font-size: 0.75rem;
}

.input {
  border: 1px solid var(--border);
  padding: 0.125rem 0.375rem;
  font-size: 0.875rem;
  outline: none;
  background: var(--block-background);
  border-radius: 0.125rem;
}
</style>
