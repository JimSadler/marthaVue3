import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import PeopleView from '@/views/OurPeople.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/people', component: PeopleView },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})
export default router
