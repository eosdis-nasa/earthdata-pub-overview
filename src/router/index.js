import { createWebHistory, createRouter }  from 'vue-router'
import Home from '@/components/Home'
import PageNotFound from '@/components/PageNotFound'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
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
