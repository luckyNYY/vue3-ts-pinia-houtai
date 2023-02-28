import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/LoginView.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/register/RegisterView.vue')
  },
  {
    path: '/',
    name: 'home',
    component: () => import('../views/home/HomeView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
