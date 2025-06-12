import { createRouter, createWebHistory } from 'vue-router';
import TypeFastHome from '@/components/TypeFastHome.vue';

export const landingPageRouter = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: TypeFastHome,
    },
    {
      path: '/a',
      name: 'HomeB',
      component: TypeFastHome,
    },
    {
      path: '/b',
      name: 'HomeC',
      component: TypeFastHome,
    },
    {
      path: '/d',
      name: 'HomeD',
      component: TypeFastHome,
    },
    {
      path: '/e',
      name: 'HomeE',
      component: TypeFastHome,
    },
    {
      path: '/f',
      name: 'HomeF',
      component: TypeFastHome,
    },
    {
      path: '/g',
      name: 'HomeG',
      component: TypeFastHome,
    },
  ],
});

export default [ landingPageRouter ];
