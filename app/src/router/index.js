import Note from '@/views/Note.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
     {
      path:'/',
      name:'Home',
      component: Note
    },
  ],
})

export default router
