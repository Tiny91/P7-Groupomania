import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/deconnect',
    name: 'Deconnexion',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "deconnect" */ '../views/Deconnexion.vue')
  },
  {
    path: '/posts',
    name: 'Posts',
    component: () => import(/* webpackChunkName: "posts" */ '../views/Posts.vue')
  },
  {
    path: '/OnePost',
    name: 'OnePost',
    component: () => import(/* webpackChunkName: "post" */ '../views/OnePost.vue')
  },
  {
    path: '/Inscription',
    name: 'Inscription',
    component: () => import(/* webpackChunkName: "inscription" */ '../views/Inscription.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
