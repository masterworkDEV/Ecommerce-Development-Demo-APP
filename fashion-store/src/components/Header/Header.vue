<template>
  <div
    class="nav-bar fixed right-0 left-0 top-[-1%] w-full z-10"
    :class="isScrolling ? 'nav-active' : ''"
  >
    <header
      class="flex w-full justify-between items-center text-center pt-10 pb-10 px-14 max-xl:px-12 max-lg:px-10 max-md:px-5 max-md:pt-5 max-md:pb-5"
    >
      <!-- menu svg-->
      <nav class="flex justify-center gap-10 items-center text-center max-lg:gap-5">
        <button
          class="hover:bg-[#ddd] hover:scale-105 rounded-full transition-all"
          @click="toggleMenu"
        >
          <svg
            class="w-10 h-10 max-xl:w-8 max-xl:h-8"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M4 6H20M4 12H14M4 18H9"
                stroke="none"
                class="stroke-[#1e1e1e] hover:stroke-black stroke-width-[1] hover:stroke-width-[3] transition-all"
                stroke-width="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </g>
          </svg>
        </button>
        <div
          class="routes flex justify-center items-center gap-10 max-xl:gap-7 max-lg:gap-5 max-md:hidden"
        >
          <RouterLink
            :to="{ name: 'home' }"
            class="link max-lg:text-sm font-text text-normal"
            activeClass="border-indigo-500"
          >
            Home
            <div class="routes-overlay"></div>
          </RouterLink>
          <RouterLink
            :to="{ name: 'collections' }"
            class="link max-lg:text-sm font-text text-normal"
            name="links"
          >
            Collections
            <div class="routes-overlay"></div>
          </RouterLink>
          <RouterLink
            :to="{ name: 'new' }"
            class="link max-lg:text-sm font-text text-normal"
            name="links"
          >
            New
            <div class="routes-overlay"></div>
          </RouterLink>
        </div>
      </nav>
      <div class="max-md:ml-14">
        <Logo />
      </div>
      <nav>
        <div class="flex justify-center items-center text-center gap-10 max-md:gap-2">
          <router-link :to="{ name: 'favourite' }">
            <div
              class="heart bg-bgColorSecondary h-[50px] w-[50px] max-xl:h-[40px] max-xl:w-[40px] flex justify-center items-center rounded-full max-md:hidden"
            >
              <svg
                viewBox="0 0 24 24"
                class="fill-white w-2/4 h-2/4"
                fill="none"
                fill-opacity="1"
                transform="rotate(-45)"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="2"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M8.96173 18.9109L9.42605 18.3219L8.96173 18.9109ZM12 5.50063L11.4596 6.02073C11.601 6.16763 11.7961 6.25063 12 6.25063C12.2039 6.25063 12.399 6.16763 12.5404 6.02073L12 5.50063ZM15.0383 18.9109L15.5026 19.4999L15.0383 18.9109ZM9.42605 18.3219C7.91039 17.1271 6.25307 15.9603 4.93829 14.4798C3.64922 13.0282 2.75 11.3345 2.75 9.1371H1.25C1.25 11.8026 2.3605 13.8361 3.81672 15.4758C5.24723 17.0866 7.07077 18.3752 8.49742 19.4999L9.42605 18.3219ZM2.75 9.1371C2.75 6.98623 3.96537 5.18252 5.62436 4.42419C7.23607 3.68748 9.40166 3.88258 11.4596 6.02073L12.5404 4.98053C10.0985 2.44352 7.26409 2.02539 5.00076 3.05996C2.78471 4.07292 1.25 6.42503 1.25 9.1371H2.75ZM8.49742 19.4999C9.00965 19.9037 9.55954 20.3343 10.1168 20.6599C10.6739 20.9854 11.3096 21.25 12 21.25V19.75C11.6904 19.75 11.3261 19.6293 10.8736 19.3648C10.4213 19.1005 9.95208 18.7366 9.42605 18.3219L8.49742 19.4999ZM15.5026 19.4999C16.9292 18.3752 18.7528 17.0866 20.1833 15.4758C21.6395 13.8361 22.75 11.8026 22.75 9.1371H21.25C21.25 11.3345 20.3508 13.0282 19.0617 14.4798C17.7469 15.9603 16.0896 17.1271 14.574 18.3219L15.5026 19.4999ZM22.75 9.1371C22.75 6.42503 21.2153 4.07292 18.9992 3.05996C16.7359 2.02539 13.9015 2.44352 11.4596 4.98053L12.5404 6.02073C14.5983 3.88258 16.7639 3.68748 18.3756 4.42419C20.0346 5.18252 21.25 6.98623 21.25 9.1371H22.75ZM14.574 18.3219C14.0479 18.7366 13.5787 19.1005 13.1264 19.3648C12.6739 19.6293 12.3096 19.75 12 19.75V21.25C12.6904 21.25 13.3261 20.9854 13.8832 20.6599C14.4405 20.3343 14.9903 19.9037 15.5026 19.4999L14.574 18.3219Z"
                  ></path>
                </g>
              </svg>
            </div>
          </router-link>

          <router-link :to="{ name: 'cart' }">
            <div class="cart-spread flex items-center justify-center text-center">
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
            @click="isProfileToggled"
            class="user relative bg-bgColorSecondary w-[50px] h-[50px] max-xl:h-[45px] max-xl:w-[45px] rounded-full flex items-center justify-center"
            :class="isScrolling ? 'nav-active' : ''"
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
              v-if="checkUser"
              class="user-state bg-bgColorPrimary w-60 h-32 p-5 absolute top-16 right-0 rounded-sm shadow-2xl border border-[#fafafa] max-md:w-40 max-md:h-30"
            >
              <div class="verified" v-if="useStore.verifiedUser">
                <p>{{ useStore.displayVerifiedUser.email }}</p>

                <button
                  class="bg-bgColorSecondary text-textPrimaryTwo w-full p-2 rounded"
                  @click="logoutUser"
                >
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
                    <h1 class="text-black underline text-lg">Sign-up</h1>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>

    <!--menu modals -->
    <Menu :menu-state="menuState" @close-menu="updateMenuState" />
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import Logo from '../Logo.vue'
import Menu from './Menu.vue'
import CartNotification from '../navigate-store/Cart/CartNotification.vue'
import { useRouter } from 'vue-router'

import { piniaStore } from '@/stores/store'
import { getAuth, signOut } from 'firebase/auth'

const useStore = piniaStore()
const checkUser = ref(null)
const router = useRouter()

const isScrolling = ref(false)
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    isScrolling.value = true
  } else {
    isScrolling.value = false
  }
})

// profile clicked
const isProfileToggled = () => {
  checkUser.value = !checkUser.value
}

// menu

const menuState = ref(false)
const toggleMenu = () => {
  menuState.value = true
}

const updateMenuState = () => {
  menuState.value = false
}

const updateCartNotification = computed(() => {
  return Object.values(useStore.cart).reduce((acc, currenValue) => {
    return acc + currenValue.quantity
  }, 0)
})

// logout
const logoutUser = async () => {
  await signOut(useStore.auth)
    .then((data) => {
      router.push('/auth/login')
    })
    .catch((error) => {
      console.log(error)
    })
}
</script>

<style  >
.nav-bar.nav-active {
  background: #f1f1f1;
  transition: all 0.5s;
  box-shadow: 0px 3px 6px #cccccc4a;
}
@media (max-width: 768px) {
  .nav-bar {
    width: 100%;
  }
  .nav-bar.nav-active {
    background: #f1f1f1fb;
  }
}

/* routes */

.routes > .link {
  transition: 0.5s ease;
  position: relative;
  font-weight: 550;
  font-style: normal;
  font-optical-sizing: auto;
}

.link:hover {
  color: black;
  scale: 0.9;
}
.link > .routes-overlay {
  position: absolute;
  width: 0px;
  height: 2px;
  background: black;
  transition: 0.2s ease;
}
.link:hover > .routes-overlay {
  width: 50px;
  height: 2px;
}

.slides-enter-active,
.slides-leave-active {
  transition: 1 ease all;
}
.slides-enter-from,
.slides-leave-to {
  transform: translateY(-50px);
  opacity: 0;
}
</style>
