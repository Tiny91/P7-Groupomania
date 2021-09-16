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
    path: '/Profil',
    name: 'Profil',
    component: () => import(/* webpackChunkName: "profil" */ '../views/Profil.vue')
  },
  {
    path: '/Admin',
    name: 'Admin',
    component: () => import(/* webpackChunkName: "Admin" */ '../views/Admin.vue')
  },
  {
    path: '/CommentsByPost',
    name: 'CommentsByPost',
    component: () => import(/* webpackChunkName: "CommentsByPost" */ '../views/CommentsByPost.vue')
  },
  {
    path: '/SignUp',
    name: 'SignUp',
    component: () => import(/* webpackChunkName: "SignUp" */ '../components/users/SignUp.vue')
  },
  {
    path: '/DeleteUser',
    name: 'DeleteUser',
    component: () => import(/* webpackChunkName: "DeleteUser" */ '../components/users/DeleteUser.vue')
  },
  {
    path: '/DeletePost',
    name: 'DeletePost',
    component: () => import(/* webpackChunkName: "DeletePost" */ '../components/posts/DeletePost.vue')
  },
  {
    path: '/ModifyPost',
    name: 'ModifyPost',
    component: () => import(/* webpackChunkName: "ModifyPost" */ '../components/posts/ModifyPost.vue')
  },
  {
    path: '/addComment',
    name: 'addComment',
    component: () => import(/* webpackChunkName: "addComment" */ '../components/Comments/AddComment.vue')
  },
  {
    path: '/OnePost',
    name: 'OnePost',
    component: () => import(/* webpackChunkName: "OnePost" */ '../views/OnePost.vue')
  },
  {
    path: '/OnePost/:id',
    name: 'OnePost/:id',
    component: () => import(/* webpackChunkName: "OnePost" */ '../views/OnePost.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
