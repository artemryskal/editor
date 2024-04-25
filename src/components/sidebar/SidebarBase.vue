<template>
  <v-navigation-drawer permanent class="sidebar">
    <!-- Настройки шрифта -->
    <SidebarText />
  </v-navigation-drawer>
</template>

<script setup>
import { useEditorStore } from '@/stores/editor'

const { editor } = storeToRefs(useEditorStore())
</script>

<style lang="scss" scoped>
.sidebar {
  position: fixed !important;
  border-right: 0;

  :deep(.sidebar__option) {
    padding: 20px;
    border-bottom: 1px solid rgba(var(--v-theme-border), 0.4);
  }

  :deep(.v-expansion-panel-title) {
    padding: 0;
  }

  :deep(.v-expansion-panel-text__wrapper) {
    margin-top: 15px;
    margin-left: 0;
  }
}
</style>
