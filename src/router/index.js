import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '@/layouts/MainLayout.vue'
import EditorView from '@/views/EditorView.vue'
import HeaderBase from '@/components/header/HeaderBase.vue'
import SidebarBase from '@/components/sidebar/SidebarBase.vue'

const routes = [
  {
    path: '/editor',
    component: MainLayout,
    children: [
      {
        path: ':id',
        name: 'editor',
        components: {
          default: EditorView,
          header: HeaderBase,
          sidebar: SidebarBase,
        },
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
