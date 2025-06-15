import { createRouter, createWebHistory } from 'vue-router';
import TypeFastHome from '@/components/TypeFastHome.vue';
import HighScores from '@/components/HighScores.vue';
import TypingTest from '@/components/TypingTest.vue';

const navRoutes = [
  {
    path: '/home',
    name: 'Home',
    component: TypeFastHome,
  },
  {
    path: '/high-scores',
    name: 'High Scores',
    component: HighScores,
  }
];

const pushRoutes = [
  {
    path: '/typing-test',
    name: 'TypingTest',
    component: TypingTest,
  }
];

const routerRoutes = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...navRoutes, ...pushRoutes]
});

export const navigationRoutes = navRoutes;

export default routerRoutes;

