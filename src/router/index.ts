import { useLoginStore } from '@/stores/login'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: () => import('../views/DashboardView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.name !== 'login' && !useLoginStore().isLogin) {
    next({ name: 'login' })
  } else if (to.name === 'login' && useLoginStore().isLogin) {
    next({ name: 'Dashboard' })
  } else {
    next()
  }
})

export default router
