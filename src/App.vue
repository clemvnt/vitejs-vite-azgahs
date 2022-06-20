<script setup lang="ts">
import { ref } from 'vue'
import Sidebar from './components/Sidebar.vue'
import Topbar from './components/Topbar.vue'
import Card from './components/Card.vue'
import Icon from './components/Icon.vue'
import SearchModal from './components/SearchModal.vue'
import Field from './components/Field.vue'
import GroupBox from './components/GroupBox.vue'
import Datagrid from './components/Datagrid.vue'

const menus = ref([
  { icon: 'i-mdi-file-tree-outline', children: [{ caption: 'File' }] },
  { icon: 'i-mdi-format-list-bulleted', children: [{ caption: 'File' }] },
  { icon: 'i-mdi-database-sync-outline', children: [{ caption: 'File' }] },
  { icon: 'i-mdi-play-circle-outline', children: [{ caption: 'File' }] }
])

const searchModalVisible = ref(false)

function toggleTheme() {
  document.documentElement.classList.toggle('dark')
}

function showSearchModal() {
  searchModalVisible.value = true
}
</script>

<template>
  <Sidebar :menus="menus">
    <template #logo>
      <Icon name="i-logos-nomad" />
    </template>
  </Sidebar>
  <main>
    <Topbar>
      <template #actions>
        <button @click="showSearchModal()">
          <Icon name="i-ic-search" size="large" />
        </button>
        <button @click="toggleTheme()">
          <Icon name="i-ic-outline-dark-mode" size="large" />
        </button>
        <button>
          <Icon name="i-ic-round-notifications-none" size="large" />
        </button>
        <button>
          <Icon name="i-ic-outline-person-2" size="large" />
        </button>
      </template>
    </Topbar>
    <div class="container">
      <div
        style="display: flex; flex-direction: column; flex: 1; overflow: auto"
      >
        <div
          style="
            display: flex;
            justify-content: space-between;
            margin-bottom: 1rem;
          "
        >
          <div>
            <span style="font-weight: 300">Order > OrderView > </span>
            <span style="font-weight: 500">OrderListUI</span>
          </div>
          <div style="display: flex; gap: 0.75rem">
            <button class="button primary-button">Enregistrer</button>
            <button class="button secondary-button">Rafraichir</button>
          </div>
        </div>
        <div style="display: flex; flex: 1; gap: 1rem; overflow: auto">
          <Card
            style="
              width: 18rem;
              display: flex;
              flex-direction: column;
              gap: 0.5rem;
            "
          >
            <GroupBox label="General">
              <Field label="Name" />
              <Field label="Description" />
              <Field label="Entity view" />
              <Field label="Module" />
              <Field label="Title" />
              <Field label="Icon" />
              <Field label="Open mode" />
            </GroupBox>
            <GroupBox label="Behavior">
              <Field label="Load data on start" />
              <Field label="Mono record" />
              <Field label="Records by page" />
              <Field label="Editing UI view" />
              <Field label="Adding UI view" />
            </GroupBox>
            <GroupBox label="Documentation">
              <textarea
                rows="5"
                style="
                  border: 1px solid var(--border);

                  padding: 0.125rem 0.5rem;
                  font-size: 0.875rem;
                  outline: none;
                  background: var(--block-background);
                  border-radius: 0.125rem;
                "
              ></textarea>
            </GroupBox>
          </Card>
          <Card style="flex: 1; display: flex; flex-direction: column">
            <div class="tabs">
              <div class="tab">Template</div>
              <div class="tab active-tab">Properties (5)</div>
              <div class="tab">Sub views (0)</div>
              <div class="tab">Actions (0)</div>
              <div class="tab">Pre-validation rules (0)</div>
              <div class="tab">Event rules (0)</div>
              <div class="tab">Methods (0)</div>
              <div class="tab">Computeds (0)</div>
              <div class="tab">Fields (0)</div>
              <div class="tab">Inherited UI views (0)</div>
            </div>
            <div style="display: flex; gap: 1rem; overflow: auto">
              <div
                style="
                  display: flex;
                  flex: 1;
                  flex-direction: column;
                  gap: 0.5rem;
                  overflow: auto;
                "
              >
                <div
                  style="display: flex; gap: 0.75rem; justify-content: flex-end"
                >
                  <button class="button primary-button">Ajouter</button>
                  <button class="button secondary-button">Supprimer</button>
                </div>
                <Datagrid />
              </div>
              <div
                style="
                  width: 18rem;
                  display: flex;
                  flex-direction: column;
                  gap: 1rem;
                  overflow: auto;
                "
              >
                <GroupBox label="General">
                  <Field label="Name" />
                  <Field label="Caption" />
                  <Field label="Module" />
                  <Field label="Data type" />
                  <Field label="Maximum length" />
                  <Field label="Getter" />
                  <Field label="Setter" />
                  <Field label="Visible" />
                  <Field label="Required" />
                  <Field label="Read only" />
                  <Field label="Lookup" />
                </GroupBox>
                <GroupBox label="Filter">
                  <Field label="Filterable" />
                  <Field label="Quick search" />
                  <Field label="Default operator" />
                  <Field label="Visible" />
                  <Field label="Position" />
                </GroupBox>
                <GroupBox label="Grid">
                  <Field label="Visible" />
                  <Field label="Position" />
                  <Field label="Caption" />
                  <Field label="Sortable" />
                  <Field label="Frozen" />
                  <Field label="Auto size" />
                  <Field label="Width" />
                </GroupBox>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  </main>
  <SearchModal v-model="searchModalVisible" />
</template>

<style scoped>
main {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  overflow: auto;
}

.container {
  padding: 1rem;
  display: flex;
  flex: 1;
  overflow: auto;
}

.button {
  font-size: 0.875rem;
  padding: 0.25rem 0.5rem;
  transition: 0.5s all;
  border-radius: 0.125rem;
}

.primary-button {
  background: var(--primary);
  color: var(--primary-foreground);
}

.primary-button:hover {
  background: var(--primary-darker);
}

.secondary-button {
  background: var(--neutral);
}

.secondary-button:hover {
  background: var(--neutral-darker);
}

.tabs {
  display: flex;
  border-bottom: 1px solid var(--border);
  margin-bottom: 1rem;
}

.tab {
  font-size: 0.875rem;
  display: flex;
  padding: 0.5rem;
  align-items: center;
  white-space: nowrap;
}

.active-tab {
  box-sizing: border-box;
  box-shadow: inset 0 -2px 0 #47d16c;
  font-weight: 500;
}

.group-box {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
}

.label {
  font-size: 0.75rem;
  font-weight: 300;
}

.input {
  border: 1px solid var(--border);
  padding: 0.125rem 0.5rem;
  font-size: 0.875rem;
  outline: none;
  background: var(--block-background);
  border-radius: 0.125rem;
}
</style>
