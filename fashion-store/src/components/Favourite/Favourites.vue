<template>
  <main class="pages mx-14">
    <div class="title flex items-center gap-7 border-b border-[#999] mb-5 pb-3 pt-20 w-[65%]">
      <router-link :to="{ name: 'cart' }">
        <p class="text-small font-text max-md:text-smaller"><b>SHOPPING BAG</b></p>
      </router-link>
      <span class="favourite">
        <router-link :to="{ name: 'favourite' }">
          <p class="text-small font-text max-md:text-smaller">FAVORITES</p>
        </router-link>
      </span>
    </div>

    <!-- transition -->
    <Transition></Transition>

    <div class="flex justify-between gap-14">
      <div class="flex justify-center">
        <div class="row grid grid-cols-2 justify-center gap-10 max-md:grid-cols-1">
          <div v-for="fave in useStore.favourite" :key="fave.id" class="col">
            <div class="preview flex justify-center text-center gap-5 relative">
              <img
                :src="fave.images"
                :alt="fave.category.name"
                class="w-[300px] h-[350px] border-2 border-[#d7d7d7]"
              />
              <button
                @click="addToCartFromFavourite(fave)"
                class="add-to-cart p-[.6rem] flex bg-[#d9d9d9] justify-center items-center absolute bottom-1 left-[45%] translate-x-[-70%] opacity-70"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  transform="matrix(-1, 0, 0, 1, 0, 0)"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M6 12H18M12 6V18"
                      stroke="#9e9e9e"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </g>
                </svg>
              </button>
              <div class="preview-side w-10">
                <button
                  @click="removeFromFavourite(fave)"
                  class="del bg-otherBgFour rounded-md p-2 flex justify-start items-center text-center"
                >
                  <svg
                    viewBox="0 0 64 64"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke-width="2"
                    class="w-5 h-5"
                    stroke="#000000"
                    fill="none"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="1"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
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
            <div class="card-bottom flex justify-start items-end gap-48">
              <div class="name-type">
                <p class="mb-2 mt-2 text-[.85rem]">Clothes type</p>
                <h6>
                  <b>{{ fave.category.name }}</b>
                </h6>
              </div>
              <div class="price">
                <h6>
                  $ <b>{{ fave.price }} </b>
                </h6>
              </div>
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