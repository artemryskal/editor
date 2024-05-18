<template>
  <div class="font-family">
    <input type="text" class="font-family__input" />
    <v-menu>
      <template #activator="{ props }">
        <v-btn v-bind="props">
          <v-icon icon="iconArrowAlt" size="8" />
        </v-btn>
      </template>
    </v-menu>
  </div>
</template>

<script setup>
import { useEditorStore } from '@/stores/editor'

const { editor } = storeToRefs(useEditorStore())
</script>

<style lang="scss" scoped>
.font-family {
  display: flex;

  &__input {
    flex-grow: 1;
    font: inherit;
    padding: 5px;
    border: 1px solid rgb(var(--v-theme-secondary));
    height: 27px;
    font-size: 12px;
    outline: none;
  }

  :deep(.v-btn) {
    width: 27px;
    height: 27px;
    min-width: 27px;
    min-height: 27px;
    border-radius: 0;
    padding: 0;
    background-color: rgb(var(--v-theme-secondary));
  }
}
</style>
