import { defineStore } from 'pinia'
import { ref, onMounted, watch } from 'vue'
import { useAsyncState } from '@vueuse/core'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import AdminReq from '../AdminRequests/AdminReq'
import axiosClient from '@/Axios-client/axiosClient'

export const piniaStore = defineStore('counter', () => {
  // general states
  const routerLoading = ref(true)
  const welcomeNotification = ref(false)
  const welcomeMessage = ref('')

  // .....
  // Authenticate users
  const verifiedUser = ref(false)
  const displayVerifiedUser = ref(null)
  const users = ref(['standard', 'admin'])

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

  const { state, isReady, isLoading } = useAsyncState(
    axiosClient
      .get('products')
      .then(({ data }) => {
        products.value = data.map((product) => ({ ...product, liked: false }))
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

  const showInformationLink = ref(false) // Initially not shown
  const showShippingLink = ref(false)
  const showPaymentLink = ref(false)
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
    useAddToFavourite,
    showInformationLink,
    showShippingLink,
    showPaymentLink
  }
})
