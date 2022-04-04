import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/vehiculos',
    name: 'Vehiculo',
    component: () => import(/* webpackChunkName: "vehiculo" */ '../views/Vehiculos.vue')
  },
  {
    path: '/ingresar',
    name: 'Ingresar',
    component: () => import(/* webpackChunkName: "ingresar" */ '../views/Ingresar.vue')
  },
  {
    path: '/registrarse',
    name: 'Registrarse',
    component: () => import(/* webpackChunkName: "registrarse" */ '../views/Registrarse.vue'),

  },
  {
    path: '/reservar',
    name: 'Reservar',
    component: () => import(/* webpackChunkName: "reservar" */ '../views/Reservar.vue')
  },
  {
    path: '/empleado',
    name: 'Empleado',
    component: () => import(/* webpackChunkName: "empleado" */ '../views/Empleado.vue')
  },
  {
    path: '/reportes',
    name: 'Reportes',
    component: () => import(/* webpackChunkName: "empleado" */ '../views/Reporte.vue')
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

const tokenValido = (token) => {
  if ((token.toString()).startsWith('Bearer')) {
    return true
  }
  return false
}

router.beforeEach((to, from, next) => {
  const tokenGenerado = to.query.token
  if (to.path == "/" || to.path == "/ingresar" || to.path == "/registrarse") {
    next()
  }
  if (tokenValido(tokenGenerado)) {
    console.log("Token valido")
    next()
  } else {
    console.log("Token inválido")
  }

})


export default router
