<template>
  <section class="collections w-full">
    <h1 class="text-6xl">
      <b>
        XIV <br />
        COLLECTIONS
        <br />
        23-24
      </b>
    </h1>
    <div class="options flex justify-between items-end mt-5 mb-10 border-b border-[#ccc] p-2">
      <div class="categories flex gap-10">
        <button>(ALL)</button>
        <button>MEN</button>
        <button>WOMEN</button>
        <button>KIDS</button>
      </div>
      <div class="filters-sorts flex items-center gap-20">
        <div>Filters(+)</div>
        <div>
          <span>Sorts(-)</span>
          <p>Less to More</p>
          <p>More to Less</p>
        </div>
      </div>
    </div>
    <div class="collections-container">
      <div class="row flex justify-center items-center gap-10">
        <div v-if="useStore.isLoading" class="w-full">
          <div class="row flex justify-center gap-10">
            <div class="col w-full">
              <div class="movie--isloading">
                <div class="loading-image h-[375px]"></div>
                <div class="loading-content">
                  <div class="loading-text-container">
                    <div class="loading-main-text"></div>
                    <div class="loading-sub-text"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col w-full">
              <div class="movie--isloading">
                <div class="loading-image h-[375px]"></div>
                <div class="loading-content">
                  <div class="loading-text-container">
                    <div class="loading-main-text"></div>
                    <div class="loading-sub-text"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col w-full">
              <div class="movie--isloading">
                <div class="loading-image h-[375px]"></div>
                <div class="loading-content">
                  <div class="loading-text-container">
                    <div class="loading-main-text"></div>
                    <div class="loading-sub-text"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-else>
          <div class="row flex justify-center items-center gap-10" v-if="useStore.isReady">
            <article v-for="product in useStore.products?.slice(30, 33)" :key="product.id">
              <div class="card-preview relative hover:shadow-2xl transition-all">
                <img
                  :src="product.images"
                  :alt="product.title"
                  class="w-[400px] h-[400px] border border-[#d9d9d9]"
                />
                <button
                  @click="useStore.useAddToCart(product)"
                  class="add-to-cart w-10 h-10 flex bg-[#d9d9d9] justify-center items-center absolute top-[89.5%] left-[50%] translate-x-[-50%] opacity-70"
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
                      <p class="text-sm capitalize text-[#5e5e5e]">{{ product.category.name }}</p>
                      <form class="flex items-center">
                        <input type="checkbox" class="w-3 h-3" />
                        <small>+2</small>
                      </form>
                    </div>
                    <div class="title">
                      <h3>{{ product.title.substring(0, 22) }}</h3>
                    </div>
                  </div>
                  <div class="price">
                    <h3>${{ product.price.toFixed(2) }}</h3>
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
        <button class="text-[#5e5e5e]">More</button>
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
            <path
              d="M903.232 256l56.768 50.432L512 768 64 306.432 120.768 256 512 659.072z"
              fill="#000000"
            ></path>
          </g>
        </svg>
      </div>
    </div>
  </section>
</template>

<script setup>
import { piniaStore } from '@/stores/store'
const useStore = piniaStore()
</script>

<style >
/* collections */

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
</style>
