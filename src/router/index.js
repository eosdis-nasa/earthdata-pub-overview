import { createWebHistory, createRouter }  from 'vue-router'
import Home from '@/components/Home'
import PageNotFound from '@/components/PageNotFound'

import Beta from '@/components/Beta'
import Instructions from '@/components/testing/Instructions'
import ContentReview from '@/components/testing/ContentReview'
import SelectDAAC from '@/components/testing/SelectDAAC'
import CompleteAccessionReq from '@/components/testing/CompleteAccessionReq'
import ReviewDashboard from '@/components/testing/ReviewDashboard'

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
    path: '/contentreview',
    name: 'ContentReview',
    component: ContentReview
  },
  {
    path: '/selectdaac',
    name: 'SelectDAAC',
    component: SelectDAAC
  },
  {
    path: '/accession',
    name: 'CompleteAccessionReq',
    component: CompleteAccessionReq
  },
  {
    path: '/reviewdashboard',
    name: 'ReviewDashboard',
    component: ReviewDashboard
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
