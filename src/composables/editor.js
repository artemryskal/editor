import { Editor } from '@tiptap/vue-3'
import { default as TipParagraph } from '@tiptap/extension-paragraph'
import StarterKit from '@tiptap/starter-kit'
import Bold from '@tiptap/extension-bold'
import Italic from '@tiptap/extension-italic'
import Underline from '@tiptap/extension-underline'
import { useEditorStore } from '@/stores/editor'
import doc from '@/mocks/doc.js'

// Плагин для параграфа
const Paragraph = TipParagraph.extend({
  addAttributes() {
    return {
      style: {
        default: null,
        renderHTML: (attributes) => ({
          style: attributes.style,
        }),
      },
    }
  },
})

// Функция инициализация
export const initTipTap = () => {
  try {
    const editorStore = storeToRefs(useEditorStore())
    editorStore.editor.value = new Editor({
      preserveStyles: true,
      content: doc,
      extensions: [Paragraph, Bold, Italic, Underline, StarterKit],
      onSelectionUpdate(e) {
        // Проверяем выделен ли текст
        const { view, state } = e.editor
        const { from, to } = view.state.selection
        const text = state.doc.textBetween(from, to, '')
        editorStore.active.text = !!text
      },
    })
    return true
  } catch (e) {
    return false
  }
}
