import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../views/LoginPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginPage
    },
    {
      path: '/welcome',
      name: 'Welcome',
      component: () => import('../views/Welcome.vue')
    },
    {
      path: '/authors',
      name: 'Authors',
      component: () => import('../views/Authors.vue')
    },
    {
      path: '/books',
      name: 'Books',
      component: () => import('../views/Books.vue')
    },
    {
      path: '/genres',
      name: 'Genres',
      component: () => import('../views/Genres.vue')
    }
  ]
})

export default router
