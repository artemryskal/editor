import { Editor } from '@tiptap/vue-3'
import { default as TipParagraph } from '@tiptap/extension-paragraph'
import StarterKit from '@tiptap/starter-kit'
import Bold from '@tiptap/extension-bold'
import Italic from '@tiptap/extension-italic'
import Underline from '@tiptap/extension-underline'
import TextStyle from '@tiptap/extension-text-style'
import FontFamily from '@tiptap/extension-font-family'
import { useEditorStore } from '@/stores/editor'

// Схема параграфа
const Paragraph = TipParagraph.extend({
  addAttributes: () => ({
    style: {
      default: null,
      renderHTML: ({ style }) => ({ style }),
    },
  }),
})

// Функция инициализация
export const initTipTap = () => {
  try {
    const editorStore = storeToRefs(useEditorStore())
    editorStore.editor.value = new Editor({
      preserveStyles: true,
      extensions: [
        Paragraph,
        Bold,
        Italic,
        Underline,
        StarterKit,
        TextStyle,
        FontFamily,
      ],
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
