import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/LoginView.vue'
import store from '../store'

import routes_recepcionista from './recepcionistas'
import routes_gerente from './gerente'

const homePageUsers = {
  gerente: '/gerente',
  recepcionista: '/recepcionista',
}

function isAuth() {
  return store.state.auth;
}
function getHomeUser() {
  return homePageUsers[store.state.user.rol];
}

/**
 * Rutas protegidas por autenticación:  meta 'requireAuth'  -> boolean
 * Rutas protegidas por rol:            meta 'authRole'     -> string
 */
const routes = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
    beforeEnter: (to, from, next) => {
      if (isAuth()) {
        next(getHomeUser());
      } else {
        next();
      }
    }
  },
  {
    path: '/gerente',
    name: 'gerente',
    meta: { requireAuth: true, authRole: 'gerente'},
    children: [
      ...routes_gerente,
    ]
  },
  {
    path: '/recepcionista',
    name: 'recepcionista',
    meta: { requireAuth: true, authRole: 'recepcionista'},
    children: [
      ...routes_recepcionista,
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

/**
 * Middleware para rutas protegidas por autenticación
*/
router.beforeEach((to, from, next) => {
  if (to.matched.some(route => route.meta.requireAuth)) {
    if (!isAuth() && to.name !== 'Login') {
      next({ name: 'login' });
    } else {
      next();
    }
  } else {
    next();
  }
});

/**
 * Middleware para autenticación de roles
 */
router.beforeEach((to, from, next) => {
  if (!to.meta.authRole) {
    next();
  } else {
    if (to.meta.authRole === store.state.user.rol) {
      next();
    } else {
      next(getHomeUser());
    }
  }
});

export default router
