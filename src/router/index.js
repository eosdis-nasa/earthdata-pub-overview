import { createWebHistory, createRouter }  from 'vue-router'
import Home from '@/components/Home'
import PageNotFound from '@/components/PageNotFound'

import Instructions from '@/components/testing/Instructions'
import ContentReview from '@/components/testing/ContentReview'
import SelectDAAC from '@/components/testing/SelectDAAC'
import CompleteAccessionReq from '@/components/testing/CompleteAccessionReq'
import ReviewDashboard from '@/components/testing/ReviewDashboard'
import CompletePublicationReq from '@/components/testing/CompletePublicationReq'
import ReviewRequests from '@/components/testing/ReviewRequests'
import KnownIssues from '@/components/testing/KnownIssues'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/instructions',
    name: 'Instructions',
    component: Instructions
  },
  {
    path: '/instructions/contentreview',
    name: 'ContentReview',
    component: ContentReview
  },
  {
    path: '/instructions/selectdaac',
    name: 'SelectDAAC',
    component: SelectDAAC
  },
  {
    path: '/instructions/accessionreq',
    name: 'CompleteAccessionReq',
    component: CompleteAccessionReq
  },
  {
    path: '/instructions/reviewdashboard',
    name: 'ReviewDashboard',
    component: ReviewDashboard
  },
  {
    path: '/instructions/publicationreq',
    name: 'CompletePublicationReq',
    component: CompletePublicationReq
  },
  {
    path: '/instructions/reviewrequests',
    name: 'ReviewRequests',
    component: ReviewRequests
  },
  {
    path: '/instructions/knownissues',
    name: 'KnownIssues',
    component: KnownIssues
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
