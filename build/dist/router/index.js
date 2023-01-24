import { createRouter, createWebHashHistory } from '../../_snowpack/pkg/vue-router.js'

const routes = [
  {
    path: '/',
    name: 'Hame',
    component: () => import("../pages/index.vue.js"),
  },
  {
    path: '/concerts',
    name: 'Concerts',
    component: () => import("../pages/concerts.vue.js"),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import("../pages/about.vue.js"),
  },
  {
    path: '/mesreservations',
    name: 'mesreservations',
    component: () => import("../pages/mesreservations.vue.js"),
  },

  { 
    path: '/concerts/:concert_id',
    component: () => import("../pages/concerts/concert.vue.js"),
  },

  { 
    path: '/contact',
    component: () => import("../pages/contact.vue.js"),
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router;