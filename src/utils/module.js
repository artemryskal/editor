import * as modules from '@/mocks/doc'
import { useEditorStore } from '@/stores/editor'

// Вставка заголовка
export const insertTitle = () => {
  const { editor } = storeToRefs(useEditorStore())
  editor.value
    .chain()
    .focus('end')
    .insertContent(modules.titlePlaceholder, {
      parseOptions: {
        preserveWhitespace: false,
      },
    })
    .run()
}

// Вставка параграфа
export const insertParagraph = () => {
  const { editor } = storeToRefs(useEditorStore())
  editor.value
    .chain()
    .focus('end')
    .insertContent(modules.paragraphPlaceholder, {
      parseOptions: {
        preserveWhitespace: false,
      },
    })
    .run()
}
