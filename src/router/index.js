import { createWebHistory, createRouter } from 'vue-router'
 import { setTitle } from '@/services/utils.js';
import HomeView from '@/views/HomeView.vue'

const routes = [
  { path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: 'Home',
    },
  },
  { path: '/our-people',
    name: 'people',
    component: () => import('../views/OurPeople.vue'),
    meta: {
      title: 'Our People',
    },
  },
  { path: '/what-we-do',
    name: 'what-we-do',
    component: () => import('../views/WhatWeDo.vue'),
    meta: {
      title: 'What We Do',
    },
  },
  { path: '/books',
    name: 'books',
    component: () => import('../views/BooksView.vue'),
    meta: {
      title: 'Books',
    },
  },
  { path: '/store',
    name: 'store',
    component: () => import('../views/StoreView.vue'),
    meta: {
      title: 'Store',
    },
  },
  { path: '/contact',
    name: 'contact',
    component: () => import('../views/ContactView.vue'),
    meta: {
      title: 'Contact',
    },
  },
  { path: '/testimonials',
    name: 'testimonials',
    component: () => import('../views/TestimonialsView.vue'),
    meta: {
      title: 'Testimonials',
    },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})
// update title
router.beforeEach((to, _, next) => {
  setTitle(to);
  next();
});

export default router
