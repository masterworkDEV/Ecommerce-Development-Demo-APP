import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/user-dashboard',
      component: () => import('../components/UserDashboard.vue'),
      children: [
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
          path: '/deals',
          name: 'deals',
          component: () => import('../views/Deals.vue')
        },
        {
          path: '/cart',
          name: 'cart',
          component: () => import('../components/Cart.vue')
        },
        {
          path: '/favourite',
          name: 'favourite',
          component: () => import('../components/Favourites.vue')
        },
        {
          path: '/settings',
          name: 'settings',
          component: () => import('../components/Settings.vue')
        },
        {
          path: '/check-out',
          name: 'check-out',
          component: () => import('../components/CheckOutPage.vue')
        }
      ]
    },
    {
      path: '/guest-user',
      component: () => import('../components/GuestUser.vue'),
      children: [
        {
          path: '/',
          name: 'home',
          component: () => import('../views/HomeView.vue')
        },
        {
          path: '/collections',
          name: 'collections',
          component: () => import('../views/Collections.vue')
        },
        {
          path: '/new',
          name: 'new',
          component: () => import('../views/New.vue')
        },

        {
          path: '/deals',
          name: 'deals',
          component: () => import('../views/Deals.vue')
        },
        {
          path: '/cart',
          name: 'cart',
          component: () => import('../components/Cart.vue')
        },
        {
          path: '/favourite',
          name: 'favourite',
          component: () => import('../components/Favourites.vue')
        },
        {
          path: '/auth/',
          component: () => import('../components/authenticate.vue'),
          children: [
            {
              path: 'login',
              name: 'login',
              component: () => import('../components/Login.vue')
            },
            {
              path: 'sign-up',
              name: 'sign-up',
              component: () => import('../components/SignUp.vue')
            }
          ]
        }
      ]
    }
    //  protected routes or Users only
  ],
  scrollBehavior: (to, from, next) => {
    return { top: 0, behavior: 'smooth' }
  }
})

export default router
