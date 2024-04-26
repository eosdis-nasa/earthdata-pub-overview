import { createWebHistory, createRouter } from 'vue-router';
import Home from '@/components/Home';
import GettingStarted from '@/components/GettingStarted';
import DataPublicationGuidelines from '@/components/DataPublicationGuidelines';
import PageNotFound from '@/components/PageNotFound';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
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
    component: PageNotFound
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  base: process.env.BASE_URL
});

export default router;
