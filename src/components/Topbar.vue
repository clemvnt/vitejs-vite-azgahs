<script setup lang="ts">
import Icon from './Icon.vue'
</script>

<template>
  <div class="topbar">
    <div class="tabs">
      <div class="tab">
        <div>Home</div>
        <div
          class="i-ic-baseline-close small-icon"
          style="margin-left: 0.25rem"
        ></div>
      </div>
      <div class="tab active-tab">
        <div>OrderListUI</div>
        <div
          class="i-ic-baseline-close small-icon"
          style="margin-left: 0.25rem"
        ></div>
      </div>
    </div>
    <div class="actions">
      <slot name="actions" />
    </div>
  </div>
</template>

<style scoped>
.topbar {
  display: flex;
  justify-content: space-between;
  height: 2.5rem;
  background: var(--block-background);
  border-bottom: 1px solid var(--border);
}

.tabs {
  display: flex;
}

.tab {
  font-size: 0.875rem;
  display: flex;
  padding: 0 1rem;
  align-items: center;
}

.active-tab {
  box-sizing: border-box;
  box-shadow: inset 0 -2px 0 #47d16c;
}

.actions {
  display: flex;
  align-items: center;
  padding-right: 1rem;
  gap: 1rem;
}

.actions > :deep(*) {
  color: #a0a6ac;
}

.actions > :deep(*):hover {
  color: #82888d;
}
</style>
