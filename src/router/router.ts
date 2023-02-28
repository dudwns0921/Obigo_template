import BrowsePage from 'pages/BrowsePage.vue';
import SearchPage from 'pages/SearchPage.vue';
import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  { path: '/', component: BrowsePage },
  { path: '/search', component: SearchPage },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
