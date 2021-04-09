import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
//import Demo1 from '../views/Demo1.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/demo1',
    naem: 'demo1',
    component: () => import('../views/Demo1.vue')
    //component: Demo1
  },
  {
    path: '/demo2',
    name: 'demo2',
    component: () => import('../views/Demo2.vue')
  },
  {
    path: '/demo3',
    name: 'demo3',
    component: () => import('../views/Demo3.vue')
  },
  {
    path: '/demo4',
    name: 'demo4',
    component: () => import('../views/Demo4_commputed.vue')

  },
  {
    path: '/demo5',
    name: 'demo5',
    component: () => import('../views/Demo5_binding.vue')
  },
  {
    path: '/demo6',
    name: 'demo6',
    component: () => import('../views/Demo6_form.vue')
  },
  {
    path: '/demo7',
    name: 'demo7',
    component: () => import('../views/Demo7_slot.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
