<template>
  <div>
    <div
      v-if="useStore.cartNotification || useStore.existedInCart"
      class="fixed w-full h-full bg-transparentBLK right-0 left-0 top-0 bottom-0 z-30"
    ></div>
    <CartNotificationModal />
    <ExistedInCartModal />
    <header class="mx-14 max-md:mx-5 fixed top-5 right-0 left-0">
      <nav class="flex justify-between items-center">
        <router-link to="/collections">
          <svg
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
            class="w-10 h-8 max-md:h-6"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <title></title>
              <g id="Complete">
                <g id="arrow-left">
                  <g>
                    <polyline
                      data-name="Right"
                      fill="none"
                      id="Right-2"
                      points="7.6 7 2.5 12 7.6 17"
                      stroke="#000000"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    ></polyline>
                    <line
                      fill="none"
                      stroke="#000000"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      x1="21.5"
                      x2="4.8"
                      y1="12"
                      y2="12"
                    ></line>
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </router-link>

        <div class="flex items-center gap-1">
          <router-link :to="{ name: 'cart' }">
            <div class="flex items-center justify-end text-center">
              <span
                class="cart-text text-center flex justify-center items-center text-textPrimaryTwo bg-bgColorSecondary w-[90px] h-[50px] max-xl:h-[40px] max-xl:w-[70px] rounded-[1.5rem] translate-x-1 max-md:hidden"
              >
                Cart
              </span>
              <div
                class="cart-icon relative border-[.4rem] border-black w-[50px] h-[50px] max-xl:h-[45px] max-xl:w-[45px] rounded-full flex items-center justify-center text-center max-md:border-[.3rem]"
              >
                <CartNotification :cart-notification="updateCartNotification" />

                <svg
                  viewBox="0 0 24 24"
                  class="fill-black w-2/4 h-2/4"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8.4179 3.25077C8.69861 2.65912 9.30146 2.25 9.99986 2.25H13.9999C14.6983 2.25 15.3011 2.65912 15.5818 3.25077C16.2654 3.25574 16.7981 3.28712 17.2737 3.47298C17.8418 3.69505 18.3361 4.07255 18.6998 4.5623C19.0667 5.05639 19.2389 5.68968 19.476 6.56133C19.4882 6.60604 19.5005 6.65137 19.513 6.69735L20.1039 8.86428C20.4914 9.06271 20.8304 9.32993 21.1133 9.6922C21.7353 10.4888 21.8454 11.4377 21.7348 12.5261C21.6274 13.5822 21.2949 14.9122 20.8787 16.577L20.8523 16.6824C20.5891 17.7352 20.3755 18.59 20.1213 19.2572C19.8563 19.9527 19.5199 20.5227 18.9653 20.9558C18.4107 21.3888 17.7761 21.5769 17.0371 21.6653C16.3282 21.75 15.4472 21.75 14.362 21.75H9.63771C8.55255 21.75 7.67147 21.75 6.96266 21.6653C6.22365 21.5769 5.58901 21.3888 5.03439 20.9558C4.47977 20.5227 4.14337 19.9527 3.8784 19.2572C3.62426 18.5901 3.41058 17.7353 3.1474 16.6825L3.121 16.5769C2.70479 14.9121 2.37229 13.5822 2.26492 12.5261C2.15427 11.4377 2.26442 10.4888 2.88642 9.6922C3.16927 9.32993 3.50834 9.06271 3.89582 8.86428L4.48667 6.69735C4.49921 6.65137 4.51154 6.60604 4.5237 6.56134C4.76077 5.68968 4.93302 5.05639 5.29995 4.5623C5.66367 4.07255 6.15788 3.69505 6.72607 3.47298C7.20162 3.28712 7.73436 3.25574 8.4179 3.25077ZM8.41931 4.75219C7.75748 4.75888 7.4919 4.78416 7.2721 4.87007C6.96615 4.98964 6.70003 5.19291 6.50419 5.45662C6.32808 5.69376 6.22474 6.02508 5.93384 7.09195L5.58026 8.38869C6.61806 8.24996 7.95786 8.24998 9.62247 8.25H14.3772C16.0419 8.24998 17.3817 8.24996 18.4195 8.38869L18.0659 7.09194C17.775 6.02508 17.6716 5.69377 17.4955 5.45663C17.2997 5.19291 17.0336 4.98964 16.7276 4.87007C16.5078 4.78416 16.2422 4.75888 15.5804 4.75219C15.2991 5.34225 14.6971 5.75 13.9999 5.75H9.99986C9.30262 5.75 8.70062 5.34225 8.41931 4.75219ZM9.99986 3.75C9.86179 3.75 9.74986 3.86193 9.74986 4C9.74986 4.13807 9.86179 4.25 9.99986 4.25H13.9999C14.1379 4.25 14.2499 4.13807 14.2499 4C14.2499 3.86193 14.1379 3.75 13.9999 3.75H9.99986ZM5.69971 9.88649C4.78854 10.0183 4.34756 10.2582 4.06873 10.6153C3.78989 10.9725 3.66411 11.4584 3.75723 12.3744C3.85233 13.3099 4.15656 14.5345 4.59127 16.2733C4.86853 17.3824 5.06163 18.1496 5.28013 18.7231C5.49144 19.2778 5.69835 19.5711 5.95751 19.7735C6.21667 19.9758 6.5514 20.1054 7.14076 20.1759C7.75015 20.2488 8.54133 20.25 9.68452 20.25H14.3152C15.4584 20.25 16.2496 20.2488 16.859 20.1759C17.4483 20.1054 17.783 19.9758 18.0422 19.7735C18.3014 19.5711 18.5083 19.2778 18.7196 18.7231C18.9381 18.1496 19.1312 17.3824 19.4084 16.2733C19.8432 14.5345 20.1474 13.3099 20.2425 12.3744C20.3356 11.4584 20.2098 10.9725 19.931 10.6153C19.6522 10.2582 19.2112 10.0183 18.3 9.88649C17.3694 9.75187 16.1075 9.75 14.3152 9.75H9.68452C7.89217 9.75 6.63034 9.75187 5.69971 9.88649Z"
                    ></path>
                  </g>
                </svg>
              </div>
            </div>
          </router-link>

          <div
            class="user relative bg-bgColorSecondary w-[50px] h-[50px] max-xl:h-[45px] max-xl:w-[45px] rounded-full flex items-center justify-center"
          >
            <svg
              viewBox="0 0 24 24"
              class="stroke-white w-2/4 h-2/4"
              stroke="none"
              fill="none"
              stroke-width="2"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M5 21C5 17.134 8.13401 14 12 14C15.866 14 19 17.134 19 21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </g>
            </svg>

            <div
              class="user-state hidden bg-bgColorPrimary w-[200px] h-[120px] p-5 absolute top-16 right-0 rounded-sm shadow-2xl border border-[#fafafa]"
            >
              <div class="verified" v-if="useStore.verifiedUser">
                <p>{{ useStore.displayVerifiedUser.email }}</p>

                <button class="bg-bgColorSecondary text-textPrimaryTwo w-full p-2 rounded">
                  Log Out
                </button>
              </div>
              <div class="unverified" v-else>
                <div class="login">
                  <router-link :to="{ name: 'login' }">
                    <button class="bg-bgColorSecondary text-textPrimaryTwo w-full p-2 rounded">
                      Login
                    </button>
                  </router-link>
                </div>
                <div class="sign-up mt-3">
                  <router-link :to="{ name: 'sign-up' }">
                    <h3 class="text-black underline text-lg">Sign-up</h3>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
    <main class="pages px-14 max-md:px-0 max-md:pb-20">
      <p v-if="isLoading">Loading please wait...</p>
      <pre v-else-if="!isLoading && isError">{{ isError }}</pre>
      <div v-else class="max-md:h-full max-md:w-full">
        <img
          :src="product.images[currentImage]"
          :alt="product.title"
          class="h-full w-full object-cover"
          :class="
            imageZoom &&
            'fixed top-10 bottom-20 left-[50%] right-[50%]  translate-x-[-50%] max-h-[36rem] w-[78%] object-fill z-20'
          "
          @click="handleImageZoom"
        />
        <div
          v-if="imageZoom"
          class="fixed top-0 right-0 left-0 bottom-0 bg-[rgba(0,0,0,0.98)] z-10 w-full h-full"
        >
          <button
            class="fixed right-2 w-6 h-6 top-2 flex justify-center items-center bg-otherBgThree"
            @click="imageZoom = !imageZoom"
          >
            <svg
              class="h-5 w-5"
              viewBox="0 0 64 64"
              xmlns="http://www.w3.org/2000/svg"
              stroke-width="3"
              stroke="#000000"
              fill="none"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <line x1="8.06" y1="8.06" x2="55.41" y2="55.94"></line>
                <line x1="55.94" y1="8.06" x2="8.59" y2="55.94"></line>
              </g>
            </svg>
          </button>
          <div class="prev-next h-full flex justify-between items-center">
            <button class="text-white" @click="currentImage--">Prev</button>
            <button class="text-white" @click="currentImage++">Next</button>
          </div>
          <!--  -->
        </div>
        <div
          class="images-prev mt-10 w-full h-full flex justify-start max-md:pl-5 gap-5 overflow-x-auto"
        >
          <img
            v-for="(image, index) in product.images"
            :key="image"
            :src="image"
            :alt="product.title"
            class="image-row"
            :class="index === currentImage && 'active'"
            @click="handleImageClick(index)"
          />
        </div>
        <span class="max-md:px-5 mt-10 flex justify-between items-center">
          <h3 class="font-text text-h4 max-xl:text-h5 max-md:text-normal uppercase">
            <b>
              {{ product.title }}
            </b>
          </h3>
          <button>Like</button>
        </span>
        <span class="max-md:px-5 mt-5 flex justify-between items-center">
          <h3 class="font-text text-h5 max-md:text-normal max-sm:text-sm text-gray-400">
            <b> MRP incl. of all taxes </b>
          </h3>
          <h3 class="text-h5 max-md:text-normal font-text">
            <b> ${{ product.price }} </b>
          </h3>
        </span>
        <span class="max-md:px-5 mt-5 flex justify-start items-center">
          <h3
            class="font-text text-normal max-md:text-sm max-sm:text-small leading-8 tracking-widest"
          >
            <b> {{ product.description }} </b>
          </h3></span
        >
        <span class="max-md:px-5 mt-5 flex justify-start items-center">
          <h3 class="font-text text-h5 max-md:text-normal text-gray-400">Color</h3></span
        >
        <button
          @click="addProdToCart(product)"
          class="max-md:w-full max-md:h-10 font-text fixed bottom-0 right-0 left-0 font-bold bg-black text-white text-normal"
          :class="simulatedButton ? 'opacity-95 cursor-not-allowed' : 'opacity-100 cursor-default'"
        >
          <div v-if="simulatedButton" class="flex justify-center items-center gap-5">
            <div class="loader"></div>
            <span>ADDING</span>
          </div>
          <span v-else>ADD</span>
        </button>
      </div>
    </main>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'
import { ref, onMounted, computed, onUnmounted } from 'vue'
import { piniaStore } from '@/stores/store'
import CartNotification from './navigate-store/Cart/CartNotification.vue'
import CartNotificationModal from './navigate-store/Cart/CartNotificationModal.vue'
import ExistedInCartModal from './navigate-store/Cart/ExistedInCartModal.vue'
import axiosClient from '@/Axios-client/axiosClient'

const route = useRoute()
const router = useRouter()
const useStore = piniaStore()
const imageZoom = ref(false)

const handleImageZoom = () => {
  imageZoom.value = true
}

const product = ref({})
const isLoading = ref(true)
const isError = ref(false)
const currentImage = ref(0)
const simulatedButton = ref(false)
const handleImageClick = (image) => {
  currentImage.value = image
}

onMounted(() => {
  useStore.navState = !useStore.navState
  useStore.footerState = !useStore.footerState

  const fecthData = async () => {
    try {
      const respsonse = await axiosClient.get(`products/${route.params.productID}`)
      product.value = respsonse.data
    } catch (err) {
      if (err.respsonse) {
        console.log(err.respsonse.headers)
      } else {
        console.log(err.message)
      }
    } finally {
      isLoading.value = false
    }
  }
  fecthData()
})

onUnmounted(() => {
  useStore.navState = true
})

const addProdToCart = (product) => {
  simulatedButton.value = true
  setTimeout(() => {
    useStore.useAddToCart(product)
    simulatedButton.value = false
  }, 1000)
}

const updateCartNotification = computed(() => {
  return Object.values(useStore.cart).reduce((acc, currenValue) => {
    return acc + currenValue.quantity
  }, 0)
})
</script>

<style scoped>
.image-row {
  width: 30%;
  height: 40%;
  opacity: 0.6;
}
.image-row.active {
  opacity: 1;
}

.images-prev::-webkit-scrollbar {
  width: 0px;
  height: 0px;
}

/* HTML: <div class="loader"></div> */
.loader {
  width: 34px;
  padding: 4px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: #d7d7d7;
  --_m: conic-gradient(#0000 10%, #000), linear-gradient(#000 0 0) content-box;
  -webkit-mask: var(--_m);
  mask: var(--_m);
  -webkit-mask-composite: source-out;
  mask-composite: subtract;
  animation: l3 0.5s infinite linear;
}
@keyframes l3 {
  to {
    transform: rotate(1turn);
  }
}
</style>