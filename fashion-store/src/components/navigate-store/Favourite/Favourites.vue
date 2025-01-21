<template>
  <main class="pages mx-14 max-md:mx-5">
    <!-- transition -->

    <h3
      v-if="!Object.values(useStore.favourite).length"
      class="text-h5 text-center max-md:text-normal m-10"
    >
      You haven't liked any product!
    </h3>

    <div class="flex justify-start">
      <div class="prod-row w-full grid grid-cols-2 gap-20 max-md:grid-cols-1 max-md:w-full">
        <div
          class="prod-card w-full h-[350px] flex items-start justify-start gap-5 max-md:gap-3 hover:mt-1 hover:opacity-90 transition-all"
          v-for="product in useStore.favourite"
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
                  <b>${{ product.price.toFixed(2) }} </b>
                </h4>
              </div>
            </div>
          </div>
          <div class="preview-side w-[10%]">
            <button
              @click="removeFromFavourite(product)"
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