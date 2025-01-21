import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior: (to, from, next) => {
    return { top: 0, behavior: 'instant' }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/About.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/Contact.vue')
    },
    {
      path: '/collections',
      name: 'collections',
      component: () => import('../views/Collections.vue')
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('../views/Search.vue')
    },
    {
      path: '/new',
      name: 'new',
      component: () => import('../views/New.vue')
    },
    {
      path: '/product-details/:productID?',
      name: 'product-details',
      component: () => import('../components/ProductDetails.vue')
    },
    {
      path: '/auth/',
      component: () => import('../components/Authentication/authenticate.vue'),
      children: [
        {
          path: 'login',
          name: 'login',
          meta: {
            transition: 'left'
          },
          component: () => import('../components/Authentication/Login.vue')
        },
        {
          path: 'sign-up',
          name: 'sign-up',
          meta: {
            transition: 'right'
          },
          component: () => import('../components/Authentication/SignUp.vue')
        }
      ]
    },
    {
      path: '/store/',
      component: () => import('../components/navigate-store/Store.vue'),
      children: [
        {
          path: 'cart',
          name: 'cart',
          meta: {
            transition: 'left'
          },
          component: () => import('../components/navigate-store/Cart/Cart.vue')
        },
        {
          path: 'favourite',
          name: 'favourite',
          meta: {
            transition: 'right'
          },
          component: () => import('../components/navigate-store/Favourite/Favourites.vue')
        },
        {
          path: '/settings',
          name: 'settings',
          component: () => import('../components/Settings.vue')
        }
      ]
    }
  ]
})

export default router
