import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/ordenes',
    name: 'orders',
    component: () => import('../views/OrdersView.vue')
  },
  {
    path: '/camiones',
    name: 'trucks',
    component: () => import('../views/TrucksView.vue')
  },
  {
    path: '/direcciones',
    name: 'address',
    component: () => import('../views/LocationsView.vue')
  },
  {
    path: '/conductores',
    name: 'drivers',
    component: () => import('../views/DriversView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
