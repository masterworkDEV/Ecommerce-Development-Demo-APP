import { defineStore } from 'pinia'
import { ref, onMounted, watch } from 'vue'
import { useAsyncState } from '@vueuse/core'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

import axios from 'axios'

export const piniaStore = defineStore('counter', () => {
  const verifiedUser = ref(false)
  const displayVerifiedUser = ref(null)

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

  // toggle header
  const navState = ref(true)

  // products display on page;
  const products = ref([])

  const API_URL = 'https://api.escuelajs.co/api/v1/products'

  console.log(API_URL)
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

  const useAddToCart = (product) => {
    let checkAvailablity = cart.value.find((item) => item.title === product.title)
    if (checkAvailablity) {
      alert('Product is already in cart')
      return checkAvailablity.quantity++
    } else {
      cart.value.push({ ...product, quantity: 1 })
    }
  }

  const useDelProductFromCart = (id) => {
    cart.value = cart.value.filter((item) => item.id !== id)
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
    auth,
    verifiedUser,
    displayVerifiedUser,
    navState,
    isLoading,
    products,
    isReady,
    useAddToCart,
    cart,
    useDelProductFromCart,
    favourite,
    useAddToFavourite
  }
})
