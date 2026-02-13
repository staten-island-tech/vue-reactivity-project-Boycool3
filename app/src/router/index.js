import { createRouter, createWebHistory } from 'vue-router'
import BurgerMaker from '@/views/BurgerMaker.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
     {
      path:'/',
      name:'Burger',
      component: BurgerMaker
    },
  ],
})

export default router
