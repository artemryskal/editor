import { h, createApp } from 'vue'
import singleSpaVue from 'single-spa-vue'
import App from './App.vue'
import router from '@/router'
import vuetify from '@/plugins/vuetify'

const lc = singleSpaVue({
  createApp,
  appOptions: {
    render() {
      return h(App, {})
    },
  },
  handleInstance(instance, props) {
    instance.use(router)
    instance.use(vuetify)
  },
})

export const { bootstrap, mount, unmount } = lc
