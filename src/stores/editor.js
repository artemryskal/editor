import { defineStore } from 'pinia'

export const useEditorStore = defineStore('editor', () => {
  const editor = ref(null)
  const active = reactive({
    text: false,
  })

  return { editor, active }
})
