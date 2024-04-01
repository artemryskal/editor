import { createRouter, createWebHistory } from 'vue-router'

const EditorView = () => import('@/views/EditorView.vue')

const routes = [
  {
    path: '/editor/:id',
    name: 'editor',
    component: EditorView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
