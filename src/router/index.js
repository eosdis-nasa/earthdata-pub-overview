import { createWebHistory, createRouter }  from 'vue-router'
import Home from '@/components/Home'
import DataProducerResources from '@/components/DataProducerResources'
import Publication from '@/components/Publication'
import Daacs from '@/components/Daacs'
import HowToUseEdpub from '@/components/HowToUseEdpub'
import GettingStarted from '@/components/GettingStarted'
import DataPublicationGuidelines from '@/components/DataPublicationGuidelines'
import PageNotFound from '@/components/PageNotFound'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/data_producer_resources',
    name: 'Data Producer Resources',
    component: DataProducerResources
  },
  {
    path: '/data_producer_resources/data_publication',
    name: 'Data Publication',
    component: Publication
  },
  {
    path: '/data_producer_resources/nasa_daac',
    name: 'What is a NASA DAAC',
    component: Daacs
  },
  {
    path: '/data_producer_resources/how_to_use_edpub',
    name: 'How To Use Earthdata Pub',
    component: HowToUseEdpub
  },
  {
    path: '/getting_started',
    name: 'Getting Started',
    component: GettingStarted
  },
  {
    path: '/data_publication_guidelines',
    name: 'Data Publication Guidelines',
    component: DataPublicationGuidelines
  },
  {
    path: '/404*',
    name: '404',
    component: PageNotFound
  },
  {
    path: '/:catchAll(.*)',
    name: 'Not Found',
    component: PageNotFound,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  base: process.env.BASE_URL
});

export default router
