import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/LoginView.vue'
import HomeGerenteView from '@/views/gerente/HomeGerentView.vue'
import HomeRecepView from '@/views/recepcionista/HomeRecepView.vue'
import store from '../store'

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
      {
        path: '',
        name: 'gerente-home',
        component: HomeGerenteView,
      },
      {
        path: 'huespedes',
        name: 'gerente-huespedes',
      },
      {
        path: 'habitaciones',
        name: 'gerente-habitaciones',
      },
      {
        path: 'recepcionistas',
        name: 'gerente-recepcionistas',
      },
      {
        path: 'reportes',
        name: 'gerente-reportes',
      },
      {
        path: '',
        name: 'gerente-create-habitacion'
      }
    ]
  },
  {
    path: '/recepcionista',
    name: 'recepcionista',
    meta: { requireAuth: true, authRole: 'recepcionista'},
    children: [
      {
        path: '',
        name: 'recepcionista-home',
        component: HomeRecepView
      },
      {
        path: 'huespedes',
        name: 'recepcionista-huespedes',
      },
      {
        path: 'habitaciones',
        name: 'recepcionista-habitaciones',
      },
      {
        path: 'reservas',
        name: 'recepcionista-reservas',
      },
      {
        path: 'check',
        name: 'recepcionista-check',
      },
      {
        path: 'reportes',
        name: 'recepcionista-reportes',
      },
      {
        path: 'cochera',
        name: 'recepcionista-cochera',
      },
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
