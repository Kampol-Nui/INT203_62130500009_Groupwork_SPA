import { createRouter, createWebHistory } from 'vue-router'
//import Home from '../views/Home.vue'
import Women from '../views/Women.vue'
import Men from '../views/Men.vue'
import Home from '../views/Home.vue'
import Favourite from '../views/Favourite.vue'
import AddProd from '../views/AddProducts.vue'
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
    path: '/addProd',
    name: 'Form',
    component: AddProd
  },
  {
    path: '/men',
    name: 'Men',
    component: Men
  },
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
