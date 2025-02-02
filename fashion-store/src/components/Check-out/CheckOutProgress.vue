<template>
  <header>
    <nav>
      <button @click="goToPreviousPage">
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
      </button>
    </nav>
  </header>
  <h1 class="font-text mt-20 text-h3 max-md:text-h5"><b>CHECKOUT</b></h1>
  <div class="flex justify-start items-center gap-10 mt-5 max-md:gap-3">
    <router-link :to="{ name: 'information' }" class="font-text max-md:text-sm"
      >INFORMATION</router-link
    >
    <router-link :to="{ name: 'shipping' }" class="font-text max-md:text-sm">SHIPPING</router-link>
    <router-link :to="{ name: 'payment' }" class="font-text max-md:text-sm">PAYMENT</router-link>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const goToPreviousPage = () => {
  router.go(-1)
}
</script>

<style>
</style>