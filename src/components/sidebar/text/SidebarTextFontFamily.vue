<template>
  <div class="font-family">
    <input type="text" class="font-family__input" />

    <!-- Список семейства шрифтов -->
    <v-menu>
      <template v-slot:activator="{ props }">
        <v-btn v-bind="props">
          <v-icon icon="iconArrowAlt" size="8" />
        </v-btn>
      </template>

      <v-list class="dropdown">
        <v-list-item v-for="(font, i) in fonts" :key="i" class="dropdown__item">
          {{ font }}
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script setup>
import { useEditorStore } from '@/stores/editor'

const { editor } = storeToRefs(useEditorStore())

const fonts = [
  'Arial, sans-serif',
  'Helvetica, sans-serif',
  'Times New Roman, serif',
  'Georgia, serif',
  'Courier New, monospace',
  'Verdana, sans-serif',
  'Geneva, sans-serif',
  'Trebuchet MS, sans-serif',
  'Arial Black, sans-serif',
  'Impact, sans-serif',
  'Lucida Console, monospace',
]

const currentFont = computed(() => {
  return editor.value
})
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
