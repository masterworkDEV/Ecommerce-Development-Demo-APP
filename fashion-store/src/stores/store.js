import { defineStore } from 'pinia'
import { ref, onMounted, reactive, computed } from 'vue'
import { useAsyncState } from '@vueuse/core'
import axios from 'axios'

export const piniaStore = defineStore('counter', () => {
  // toggle header
  const navState = ref(true)

  // products display on page;
  const products = ref([])

  const { state, isReady, isLoading } = useAsyncState(
    axios
      .get('https://api.escuelajs.co/api/v1/products')
      .then(({ data }) => {
        products.value = data.map((product) => ({ ...product, liked: false }))
        console.log(products.value)
      })
      .catch((error) => console.log(`Something went wrong ${err}`))
  )

  // cart function

  // state
  const cart = ref([])

  // methods
  const useAddToCart = (product) => {
    let checkAvailablity = cart.value.find((item) => item.title === product.title)
    if (checkAvailablity) {
      return checkAvailablity.quantity++
    } else {
      return cart.value.push({ ...product, quantity: 1 })
    }
  }

  const useDelProductFromCart = (product) => {
    return (cart.value = cart.value.filter((item) => {
      return item.title != product.title
    }))
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
