<template>
  <div class="editor">
    <EditorContent :editor="editor" class="editor__place" />
    <EditorMenu class="editor__btn" />
  </div>
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
  max-width: 644px;
  margin: 44px auto;

  :deep(.tiptap) {
    outline: none;
  }

  &__place {
    display: flex;
    flex-direction: column;
    background: rgb(var(--v-theme-editor_background));
    color: rgb(var(--v-theme-editor_text));
  }

  &__btn {
    flex-grow: 1;
  }

  // Сброс стилей vuetify в редакторе
  :deep(.tiptap) {
    font-family: 'Times New Roman', Times, serif;

    b,
    strong {
      font-weight: 600;
    }
  }
}
</style>
