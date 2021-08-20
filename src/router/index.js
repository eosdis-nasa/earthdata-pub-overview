import { createWebHistory, createRouter }  from 'vue-router'
import Home from '@/components/Home'
import Beta from '@/components/Beta'
import Feedback from '@/components/Feedback'
import Instructions from '@/components/Instructions'
import Task1 from '@/components/Task1'
import PageNotFound from '@/components/PageNotFound'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/beta',
    name: 'Beta',
    component: Beta,
    alias: '/beta'
  },
  {
    path: '/instructions',
    name: 'Instructions',
    component: Instructions
  },
  {
    path: '/feedback',
    name: 'Feedback',
    component: Feedback
  },
  {
    path: '/task1',
    name: 'Task1',
    component: Task1
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
