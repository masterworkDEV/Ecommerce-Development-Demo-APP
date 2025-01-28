import { createRouter, createWebHistory } from 'vue-router'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  scrollBehavior: () => {
    return { top: 0, behavior: 'auto' }
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
      path: '/category/:categoryType',
      name: 'category',
      component: () => import('../views/Category.vue')
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
        }
      ]
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
      path: '/settings',
      name: 'settings',
      component: () => import('../components/Settings.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/check-out',
      name: 'check-out',
      component: () => import('../components/ProceedToCheckout.vue'),
      meta: {
        requiresAuth: true
      }
    }
  ]
})

const getActiveUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener()
        resolve(user)
      },
      reject
    )
  })
}

router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (await getActiveUser()) {
      next()
    } else {
      alert('you do not have access to this route')
      next('/auth/login')
    }
  } else {
    next()
  }
})
export default router
