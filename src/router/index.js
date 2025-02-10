import { createWebHistory, createRouter } from 'vue-router'

import HomeView from '@/views/HomeView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/our-people', name: 'people', component: () => import('../views/OurPeople.vue')},
  { path: '/what-we-do', name: 'what-we-do', component: () => import('../views/WhatWeDo.vue')},
  { path: '/books', name: 'books', component: () => import('../views/BooksView.vue')},
  { path: '/store', name: 'store', component: () => import('../views/StoreView.vue')},
  { path: '/contact', name: 'contact', component: () => import('../views/ContactView.vue')},
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router
