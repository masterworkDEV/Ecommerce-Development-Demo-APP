import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
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
          path: '/cart',
          name: 'cart',
          component: () => import('../components/Cart/Cart.vue')
        },
        {
          path: '/favourite',
          name: 'favourite',
          component: () => import('../components/Favourite/Favourites.vue')
        },
        {
          path: '/auth/',
          component: () => import('../components/Authentication/authenticate.vue'),
          children: [
            {
              path: 'login',
              name: 'login',
              meta: {
                transition: 'slide-left'
              },
              component: () => import('../components/Authentication/Login.vue')
            },
            {
              path: 'sign-up',
              name: 'sign-up',
              meta: {
                transition: 'slide-right'
              },
              component: () => import('../components/Authentication/SignUp.vue')
            }
          ]
        }
      ]
    },

    //  protected routes or Users only
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
          component: () => import('../components/Cart/Cart.vue')
        },
        {
          path: '/favourite',
          name: 'favourite',
          component: () => import('../components/Favourite/Favourites.vue')
        },
        {
          path: '/settings',
          name: 'settings',
          component: () => import('../components/Settings.vue')
        },
        {
          path: '/check-out',
          name: 'check-out',
          component: () => import('../components/Cart/CheckOutPage.vue')
        }
      ]
    }
  ],
  scrollBehavior: (to, from, next) => {
    return { top: 0, behavior: 'smooth' }
  }
})

export default router
