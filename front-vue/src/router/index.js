import { createRouter, createWebHistory } from 'vue-router'
import CreateClient from '../views/CreateClient.vue'
import EditClient from '../views/EditClient.vue'
import ListClient  from '../views/ListClient.vue'
import PageNotFound  from '../views/PageNotFound.vue'
import ViewClient from '../views/ViewClient.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/lits',
    component: ListClient
  },
  {
    path: '/lits',
    name: 'Lista',
    component: ListClient
  },
  {
    path: '/creat',
    name: 'Cadastro',
    component: CreateClient
  },
  {
    path: '/edit/:id',
    name: 'Edit',
    component: EditClient
  },
  {
    path: '/view/:id',
    name: 'View',
    component: ViewClient
  },
  {
    path: '/:pathMatch(.*)*',
    name:'PageNotFound',
    component: PageNotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
