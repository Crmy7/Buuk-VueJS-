import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Hame',
    component: () => import('../pages/index.vue'),
  },
  {
    path: '/concerts',
    name: 'Concerts',
    component: () => import('../pages/concerts.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../pages/about.vue'),
  },
  {
    path: '/mesreservations',
    name: 'mesreservations',
    component: () => import('../pages/mesreservations.vue'),
  },

  { 
    path: '/concerts/:concert_id',
    component: () => import('../pages/concerts/concert.vue'),
  },

  { 
    path: '/contact',
    component: () => import('../pages/contact.vue'),
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router;