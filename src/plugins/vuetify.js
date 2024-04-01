import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { custom } from '@/assets/icons/index'
import 'vuetify/styles'

const vuetify = createVuetify({
  components,
  directives,
  defaults: {
    global: {
      ripple: false,
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
          background: '#262626',
          surface: '#262626',
          primary: '#6290E4',
          accent: '#F6641E',
          border: '#3a3a3a',
          text: '#F5F5F5',
          text_grey: '#797979',
          popup: '#1E1E1E',
          secondary: '#313131',
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
