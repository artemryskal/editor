<template>
  <editor-content :editor="editor" class="editor" />
</template>

<script setup>
import { EditorContent } from '@tiptap/vue-3'
import { initTipTap } from '@/composables/editor'
import { useEditorStore } from '@/stores/editor'

const { editor } = storeToRefs(useEditorStore())

onMounted(() => {
  initTipTap()
})
</script>

<style lang="scss" scoped>
.editor {
  display: flex;
  flex-direction: column;
  background: rgb(var(--v-theme-editor_background));
  color: rgb(var(--v-theme-editor_text));
  min-height: calc(100% - 88px);
  max-width: 644px;
  margin: 44px auto;

  :deep(.tiptap) {
    outline: none;
  }
}
</style>
