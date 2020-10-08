import Vue from 'vue'
import VueRouter from 'vue-router'
import Tabbar from '../views/Tabbar'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Tabbar',
    component: Tabbar,
    children: [
      {
        path: '/',
        name: 'home',
        component: () => import('@/views/Home')
      },
  
      {
        path: '/menu',
        name: 'menu',
        component: () => import('@/views/Menu.vue')
      },
      {
        path: '/hot',
        name: 'hot',
        component: () => import('@/views/Hot.vue')
      },
      {
        path: '/cart',
        name: 'cart',
        component: () => import('@/views/cart/index.vue')
      },
      {
        path: '/about',
        name: 'About',
        component: () => import('@/views/About.vue')
      }
      
    ]
  }
 
]



const router = new VueRouter({
  routes
})

export default router
