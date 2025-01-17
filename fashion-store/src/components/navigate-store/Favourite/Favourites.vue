<template>
  <main class="pages mx-14 max-md:mx-5">
    <!-- transition -->

    <div class="flex justify-start">
      <div class="prod-row w-full grid grid-cols-2 gap-20 max-md:grid-cols-1 max-md:w-full">
        <div
          class="prod-card w-full h-[350px] flex items-start justify-start gap-5 max-md:gap-3 hover:mt-1 hover:opacity-90 transition-all"
          v-for="product in useStore.cart"
          :key="product.id"
        >
          <div class="w-3/4 h-full">
            <img
              :src="product.images"
              :alt="product.title"
              class="w-full h-full max-md:h-[90%] border-2 border-primary"
            />
            <div class="flex justify-between items-end text-start">
              <div>
                <p class="mb-2 mt-2 font-text text-small text-gray-600 max-md:text-smaller">
                  {{ product.category.name }}
                </p>
                <h6 class="text-sm font-text max-md:text-small">
                  <b> {{ product.title }}</b>
                </h6>
              </div>
              <div class="price text-sm font-text max-md:text-small">
                <h4>
                  <b>${{ product.price.toFixed(2) * product.quantity }} </b>
                </h4>
              </div>
            </div>
          </div>
          <div class="preview-side w-[10%]">
            <button
              @click="useStore.useDelProductFromCart(product.id)"
              class="delete flex justify-start items-center text-center"
            >
              <svg
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
                class="w-8 h-8 max-md:w-6 max-md:h-6"
                stroke-width="2"
                stroke="#000000"
                fill="none"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="1"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <line x1="8.06" y1="8.06" x2="55.41" y2="55.94"></line>
                  <line x1="55.94" y1="8.06" x2="8.59" y2="55.94"></line>
                </g>
              </svg>
            </button>

            <span class="size">
              <h4 class="text-start pt-20 mb-3 uppercase"><b>m</b></h4>
            </span>
            <div class="bg-cyan-400 w-8 h-8 pt-5"></div>

            <div class="flex flex-col justify-start items-start text-start pt-5">
              <button
                @click.prevent="product.quantity++"
                class="plus border border-[#999] w-8 h-8 flex justify-center text-center items-center"
              >
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <rect width="30" height="30" fill="none"></rect>
                    <path
                      d="M12 6V18"
                      stroke="#000000"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M6 12H18"
                      stroke="#000000"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </g>
                </svg>
              </button>
              <input
                type="text"
                class="bg-transparent border border-[#999] w-8 h-8 flex justify-center text-center items-center"
                :value="product.quantity < 1 ? (product.quantity = 1) : product.quantity"
              />
              <button
                @click.prevent="product.quantity < 1 ? (product.quantity = 1) : product.quantity--"
                class="minus border border-[#999] text-center w-8 h-8 flex justify-center items-center"
              >
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <rect width="30" height="30" fill="none"></rect>
                    <path
                      d="M6 12H18"
                      stroke="#000000"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </g>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { piniaStore } from '@/stores/store'

const useStore = piniaStore()

const removeFromFavourite = (fave) => {
  return (useStore.favourite = useStore.favourite.filter((item) => {
    return item.title != fave.title
  }))
}

const addToCartFromFavourite = (fave) => {
  const checkAvailability = useStore.favourite.find((item) => fave.title === item.title)
  if (checkAvailability) {
    return [useStore.useAddToCart(fave), removeFromFavourite(fave)]
  }
}
</script>

<style>
</style>