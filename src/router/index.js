import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Blog from '../views/Allpost.vue'
import Post from '../views/Post.vue'
import Mobile from '../views/Mobile.vue'
import blog from '../views/Blogs.vue'
import contact from '../views/Contact.vue'
import contactm from '../views/Contactm.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/blogs',
    name: 'Blog',
    component: Blog
  },

  {
    path: '/post/:id',
    name: 'Post',
    component: Post
  },
  {
    path: '/Mobile/',
    name: 'Mobile',
    component: Mobile
  },
  {
    path: '/blog/',
    name: 'blog',
    component: blog
  },
  {
    path: '/contact/',
    name: 'contact',
    component: contact
  },
  {
    path: '/contactm/',
    name: 'contactm',
    component: contactm
  },

  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
