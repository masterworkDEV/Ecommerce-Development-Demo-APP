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
        products.value = data || []
        console.log('Fetched data:', data)
      })
      .catch((error) => console.log(`Something went wrong ${err}`))
  )

  const cart = ref([])
  const favourite = ref([])

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

  const useAddToFavourite = (product) => {
    let checkAvailablity = favourite.value.find((item) => item.id === product.id)
    if (checkAvailablity) {
      alert('You already liked this product')
      return false
    } else {
      return favourite.value.push({ ...product, quantity: 1 })
    }
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