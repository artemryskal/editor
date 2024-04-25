import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { custom } from '@/assets/icons'
import 'vuetify/styles'

const vuetify = createVuetify({
  components,
  directives,
  defaults: {
    global: {
      ripple: false,
      elevation: 0,
    },
    VIcon: {
      size: 14,
    },
  },
  theme: {
    defaultTheme: 'dark',
    themes: {
      dark: {
        dark: true,
        colors: {
          background: '#3A3A3A',
          surface: '#262626',
          primary: '#6290E4',
          accent: '#F6641E',
          border: '#3a3a3a',
          text: '#F5F5F5',
          text_grey: '#797979',
          popup: '#1E1E1E',
          secondary: '#313131',
          secondary_light: '#F0F0F0',
          editor_background: '#fff',
          editor_text: '#000',
        },
      },
    },
  },
  icons: {
    defaultSet: 'custom',
    sets: {
      custom,
    },
  },
})

export default vuetify
