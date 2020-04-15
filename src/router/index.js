import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/index',
    name: 'Index',
    component: Index
  },
  {
    path: '/',
    redirect:"/index"
  },
  {
    path: '/base',
    name: 'Base',
    component: () => import( '../views/base/base.vue'),
  },
  {
    path: '/base/invitation',
    name: 'Invitation',
    component: () => import('../views/base/invitation.vue')
  },
  {
    path: '/index/detail',
    name: 'Detail',
    component: () => import( '../views/detail.vue')
  },
  {
    path: '/shoppingCart',
    name: 'ShoppingCart',
    component: () => import( '../views/shoppingCart.vue')
  },
  {
    path: '/notes',
    name: 'Notes',
    component: () => import('../views/notes.vue')
  },
  {
    path: '/userLogin',
    name: 'UserLogin',
    component: () => import('../views/user/userLogin.vue')
  },
  {
    path: '/userRegister',
    name: 'UserRegister',
    component: () => import( '../views/user/userRegister.vue')
  },
  {
    path: '/user',
    name: 'User',
    redirect:"/user/myIndex",
    component: () => import('../views/user/user.vue'),
    children:[
      {
        path: 'myIndex',
        name: 'MyIndex',
        component: () => import('@/components/user/index.vue'),
      },
      {
        path: 'myPasswordSafe',
        name: 'MyPasswordSafe',
        component: () => import('@/components/user/userPasswordSafe.vue'),
      },
      {
        path: 'myInfo',
        name: 'MyInfo',
        component: () => import('@/components/user/personInfo.vue'),
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
