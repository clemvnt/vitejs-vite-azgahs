<template>
  <div class="card"><slot /></div>
</template>

<style scoped>
.card {
  background: var(--block-background);
  border: 1px solid var(--border);
  padding: 0.5rem 0.75rem;
  overflow: auto;
}
</style>
