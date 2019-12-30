import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    redirect: '/home/move'
  },
  {
    path: '/home',
    component: () => import('../views/Home.vue'),
    children: [{
      path: 'move',
      component: () => import('../views/move.vue')
    },
    {
      path: 'yingyuan',
      component: () => import('../views/yingyuan.vue')
    },
    {
      path: 'my',
      component: () => import('../views/my.vue')
    }]
  },
  {
    path: '/city',
    component: () => import('../views/city.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
