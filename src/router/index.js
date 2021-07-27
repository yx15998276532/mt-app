import Vue from 'vue'
import VueRouter from 'vue-router'
import Default from '@/layout/default.vue'
import Blank from '@/layout/blank.vue'
import goodsList from '@/page/goodsList.vue'
import Index from '@/page/index.vue'
import ChangeCity from '../page/changeCity.vue'
import Login from '../page/Login.vue'
import Register from '../page/Register.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Default',
    component: Default,
    redirect: 'index',
    children: [
      {
        path: 's/:name',
        name: 'goods',
        component: goodsList
      }, {
        path: '/index',
        name: 'Index',
        component: Index
      }, {
        path: '/changeCity',
        name: 'ChangeCity',
        component: ChangeCity
      }]
  }, {
    path: '/blank',
    name: 'Blank',
    component: Blank,
    children: [
      {
        path: 'login',
        name: 'Login',
        component: Login
      }, {
        path: 'register',
        name: 'Registe',
        component: Register
      }]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
