import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../LoginView.vue'
import AboutView from '../views/AboutView.vue'
import store from '../store'

/**
 * Rutas protegidas: meta 'requireAuth'
 */
const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
    meta: { requireAuth: true }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(route => route.meta.requireAuth)) {
    if (store.state.auth) {
      next()
    } else {
      next('/'); // Ruta de login
    }
  } else {
    next();
  }
})

export default router
