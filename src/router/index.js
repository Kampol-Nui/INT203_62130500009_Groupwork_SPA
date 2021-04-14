import { createRouter, createWebHistory } from 'vue-router'
//import Home from '../views/Home.vue'
import Women from '../views/Women.vue'
import Home from '../views/Home.vue'
import Favourite from '../views/Favourite.vue'
import Form from '../components/items/Form.vue'
const routes = [
  {
    path: '/women',
    name: 'Women',
    component: Women
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/fav',
    name: 'Favourite',
    component: Favourite
  },
  {
    path: '/form',
    name: 'Form',
    component: Form
  },
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
