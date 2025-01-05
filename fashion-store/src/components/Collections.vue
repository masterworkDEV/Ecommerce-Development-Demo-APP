<template>
  <section class="collections w-full">
    <h1 class="text-h1 max-md:text-h3 font-text">
      <b>
        XIV <br />
        COLLECTIONS
        <br />
        23-24
      </b>
    </h1>
    <div
      class="flex justify-between items-end mb-3 border-b border-[#ccc] p-2 max-md:mb-7 max-md:p-0"
    >
      <div class="categories flex gap-10 max-sm:gap-5">
        <button class="font-text text-sm max-md:text-smaller">(ALL)</button>
        <button class="font-text text-sm max-md:text-smaller">MEN</button>
        <button class="font-text text-sm max-md:text-smaller">WOMEN</button>
        <button class="font-text text-sm max-md:text-smaller">KIDS</button>
      </div>
      <div class="filters-sorts flex items-center gap-20 max-md:hidden">
        <button class="font-text text-sm max-md:text-smaller">Filters(+)</button>
        <div>
          <span class="font-text text-sm max-md:text-smaller">Sorts(-)</span>
          <p class="font-text text-sm max-md:text-smaller">Less to More</p>
          <p class="font-text text-sm max-md:text-smaller">More to Less</p>
        </div>
      </div>
    </div>
    <div class="collections-container">
      <div class="row flex justify-center items-center gap-10">
        <div v-if="useStore.isLoading">
          <div class="row flex justify-center gap-10">
            <p>Loading please wait....</p>
          </div>
        </div>
        <div v-else>
          <div
            class="w-full grid grid-cols-3 items-center gap-10 max-lg:gap-5 max-md:gap-3"
            v-if="useStore.isReady"
          >
            <article
              v-for="product in useStore.products?.slice(30, 33)"
              :key="product.id"
              class="w-full"
            >
              <div class="card-preview relative hover:shadow-2xl transition-all">
                <img
                  :src="product.images"
                  :alt="product.title"
                  class="w-[400px] h-[400px] border border-[#d9d9d9] max-lg:w-[220px] max-lg:h-[300px] max-md:w-[200px] max-md:h-[300px] max-sm:w-[110px] ma-smx:h-[200px]"
                />
                <button
                  @click="useStore.useAddToCart(product)"
                  class="add-to-cart w-10 h-10 flex bg-[#d9d9d9] justify-center items-center absolute top-[89.5%] left-[50%] translate-x-[-50%] opacity-70 max-md:top-[87%] max-sm:top-[91%] max-sm:w-6 max-sm:h-6"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    transform="matrix(-1, 0, 0, 1, 0, 0)"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
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
              </div>
              <div class="card-bottom">
                <div class="row flex justify-between items-end">
                  <div class="spec">
                    <div class="category-spread flex text-center items-centert mb-1 mt-3 gap-2">
                      <p class="text-sm capitalize text-[#5e5e5e] max-sm:text-[.6rem]">
                        {{ product.category.name }}
                      </p>
                      <form class="flex items-center">
                        <input type="checkbox" class="w-3 h-3 max-sm:hidden" />
                        <small class="max-md:hidden">{{ product.id }}</small>
                      </form>
                    </div>
                    <div class="title">
                      <h3 class="max-sm:text-[.7rem]">
                        <b>
                          {{ product.title.substring(7, 35) }}
                        </b>
                      </h3>
                    </div>
                  </div>
                  <div class="price max-md:hidden">
                    <h3>
                      <b> ${{ product.price.toFixed(2) }} </b>
                    </h3>
                  </div>
                </div>
              </div>
            </article>
          </div>
          <div class="row flex justify-center items-center gap-10" v-else>
            <h3>Error cannot display datas</h3>
          </div>
        </div>
      </div>
      <div class="action flex flex-col justify-center items-center mt-10 mb-3">
        <router-link :to="{ name: 'collections' }" class="text-gray-600 max-md:text-small"
          >More</router-link
        >
        <svg
          viewBox="0 0 1024 1024"
          class="icon"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          fill="#000000"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <path d="M903.232 256l56.768 50.432L512 768 64 306.432 120.768 256 512 659.072z"></path>
          </g>
        </svg>
      </div>
    </div>
  </section>
</template>

<script setup>
import { piniaStore } from '@/stores/store'
import LoadingCard from './LoadingCard.vue'
const useStore = piniaStore()
</script>

<style >
.add-to-cart svg {
  width: 25px;
  height: 25px;
}

.action svg {
  width: 25px;
  height: 25px;
  animation: up-down 1s ease-out infinite;
  animation-delay: 0.7s;
}
@keyframes up-down {
  from {
    transform: translateY(0px);
    opacity: 0;
  }
  to {
    transform: translateY(30px);
    opacity: 1;
  }
}

@media (max-width: 768px) {
  .action svg {
    width: 14px;
    height: 14px;
  }
}
</style>
