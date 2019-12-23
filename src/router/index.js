import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/table',
    name: 'table',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/table.vue')
  },
  {
    path: '/tools',
    name: 'tools',
    component: () => import('../views/tools.vue')
  },
  {
    path: '/clock',
    name: 'clock',
    component: () => import('../views/clock.vue')
  },
  {
    path: '/translate',
    name: 'translate',
    component: () => import('../views/features/translate.vue')
  },
  {
    path: '/base64',
    name: 'base64',
    component: () => import('../views/features/base64.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
