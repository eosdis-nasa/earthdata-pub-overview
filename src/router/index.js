import { createWebHistory, createRouter }  from 'vue-router'
import Home from '@/components/Home'
import Daacs from '@/components/Daacs'
import Policy from '@/components/Policy'
import PageNotFound from '@/components/PageNotFound'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/daacs',
    name: 'DAACs',
    component: Daacs,
    alias: '/daacs'
  },
  {
    path: '/policy',
    name: 'Policy',
    component: Policy
  },
  {
    path: '/404*',
    name: '404',
    component: PageNotFound
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  base: process.env.BASE_URL
});

export default router
