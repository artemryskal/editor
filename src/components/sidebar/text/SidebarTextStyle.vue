<template>
  <div class="d-flex align-center">
    <!-- Жирный шрифт -->
    <v-btn
      icon="iconBold"
      class="pa-1"
      :class="{ 'v-btn--active': isBold }"
      @click="toggle('bold')" />

    <!-- Курсив -->
    <v-btn
      icon="iconCursive"
      class="ml-2 pa-1"
      :class="{ 'v-btn--active': isItalic }"
      @click="toggle('italic')" />

    <!-- Подчеркивание -->
    <v-btn
      icon="iconUnderline"
      class="ml-2 pa-1"
      :class="{ 'v-btn--active': isUnderline }"
      @click="toggle('underline')" />
  </div>
</template>

<script setup>
import { useEditorStore } from '@/stores/editor'

const { editor } = storeToRefs(useEditorStore())

// Проверка состояния жирного шрифта
const isBold = computed(() => {
  return !!editor.value?.isActive('bold')
})

// Проверка на курсив
const isItalic = computed(() => {
  return !!editor.value?.isActive('italic')
})

// Проверка на подчеркивание
const isUnderline = computed(() => {
  return !!editor.value?.isActive('underline')
})

// Переключатель стилей
const toggle = (type) => {
  if (type === 'bold') editor.value.chain().focus().toggleBold().run()
  else if (type === 'italic') editor.value.chain().focus().toggleItalic().run()
  else editor.value.chain().focus().toggleUnderline().run()
}
</script>

<style lang="scss" scoped>
:deep(.v-btn__overlay) {
  transition: opacity 0.15s;
}
</style>
