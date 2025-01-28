import { defineStore } from 'pinia'
import { ref, onMounted, watch } from 'vue'
import { useAsyncState } from '@vueuse/core'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import AdminReq from '../AdminRequests/AdminReq'

import axios from 'axios'

export const piniaStore = defineStore('counter', () => {
  const users = ref(['standard', 'admin'])
  const verifiedUser = ref(false)
  const displayVerifiedUser = ref(null)
  const welcomeNotification = ref(false)
  const welcomeMessage = ref('')

  const auth = ref(null)
  onMounted(() => {
    auth.value = getAuth()
    onAuthStateChanged(auth.value, (currentUser) => {
      if (currentUser) {
        verifiedUser.value = true
        displayVerifiedUser.value = currentUser
      } else {
        verifiedUser.value = false
        displayVerifiedUser.value = null
      }
    })
  })

  // toggle header and footer
  const navState = ref(true)
  const footerState = ref(true)

  // products display on page;
  const products = ref([])

  const API_URL = 'https://api.escuelajs.co/api/v1/products'

  const { state, isReady, isLoading } = useAsyncState(
    axios
      .get(API_URL)
      .then(({ data }) => {
        products.value = data.map((product) => ({ ...product, liked: false }))
        console.log(products.value)
      })
      .catch((error) => console.log(error))
  )

  // cart function

  // state
  const cart = ref([])
  const cartNotification = ref(false)
  const existedInCart = ref(false)
  const productTitle = ref('')

  const useAddToCart = (product) => {
    let checkAvailablity = cart.value.find((item) => item.title === product.title)
    if (checkAvailablity) {
      productTitle.value = product.title
      existedInCart.value = true
      checkAvailablity.quantity++

      setTimeout(() => {
        existedInCart.value = false
        productTitle.value = ''
      }, 2000)
    } else {
      cart.value.push({ ...product, quantity: 1 })
      cartNotification.value = true
      productTitle.value = product.title

      setTimeout(() => {
        cartNotification.value = false
        productTitle.value = ''
      }, 2000)
    }
  }

  const useDelProductFromCart = (product) => {
    const checkAvailablity = cart.value.find((item) => item.id === product.id)

    return (cart.value = cart.value.filter((item) => item.id !== checkAvailablity))
  }

  // function favourite
  const favourite = ref([])

  const useAddToFavourite = (id) => {
    const checkAvailablity = products.value.find((inventory) => {
      if (inventory.id === id) {
        if ((inventory.liked = !inventory.liked)) {
          return favourite.value.push({ ...inventory })
        } else {
          return (favourite.value = favourite.value.filter((item) => item.id != inventory.id))
        }
      }
    })
    return checkAvailablity
  }

  return {
    users,
    auth,
    verifiedUser,
    displayVerifiedUser,
    welcomeMessage,
    welcomeNotification,
    navState,
    footerState,
    isLoading,
    products,
    isReady,
    cart,
    useAddToCart,
    useDelProductFromCart,
    cartNotification,
    existedInCart,
    productTitle,
    favourite,
    useAddToFavourite
  }
})
