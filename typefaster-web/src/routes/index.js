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
      path: '/',
      name: 'HomeB',
      component: TypeFastHome,
    },
    {
      path: '/',
      name: 'HomeC',
      component: TypeFastHome,
    },
    {
      path: '/',
      name: 'HomeD',
      component: TypeFastHome,
    },
    {
      path: '/',
      name: 'HomeE',
      component: TypeFastHome,
    },
    {
      path: '/',
      name: 'HomeF',
      component: TypeFastHome,
    },
    {
      path: '/',
      name: 'HomeG',
      component: TypeFastHome,
    },
  ],
});

export default [ landingPageRouter ];
