<template>
  <section class="new-collection mt-24">
    <div v-if="useStore.isLoading" class="w-full">
      <div class="row grid grid-cols-3 gap-10 w-full">
        <LoadingCard v-for="card in Array(3)" :key="card" class="max-md:hidden" />
      </div>
    </div>
    <div v-else>
      <div
        v-if="useStore.isReady"
        class="row flex justify-center gap-5 w-full max-lg:gap-3 max-md:flex-col-reverse max-md:gap-1"
      >
        <div class="col relative">
          <h1 class="text-6xl max-xl:text-h1 max-md:hidden font-text">
            <b>
              NEW <br />
              COLLECTION
            </b>
          </h1>
          <p class="max-md:hidden">Summer <br />2024</p>

          <div
            class="absolute right-0 left-0 bottom-0 flex items-center gap-2 max-md:translate-y-[50px]"
          >
            <router-link
              :to="{ name: 'collections' }"
              class="shop flex items-center w-full bg-inputBg text-start gap-5 p-2"
            >
              <span class="font-text text-sm w-full">
                <b>Go To Shop</b>
              </span>
              <svg
                class="w-full h-6 translate-x-10 transition-all"
                fill="#000000"
                height="300"
                width="250"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 512.036 512.036"
                xml:space="preserve"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <g>
                    <g>
                      <path
                        d="M508.916,248.351L295.583,35.018c-4.267-4.053-10.987-3.947-15.04,0.213c-3.947,4.16-3.947,10.667,0,14.827l195.093,195.2 H10.996c-5.333,0-10.133,3.84-10.88,9.067c-0.96,6.613,4.16,12.267,10.56,12.267h464.96L280.543,461.685 c-4.267,4.053-4.373,10.88-0.213,15.04c4.053,4.267,10.88,4.373,15.04,0.213c0.107-0.107,0.213-0.213,0.213-0.213l213.333-213.333 C513.076,259.338,513.076,252.511,508.916,248.351z"
                      ></path>
                    </g>
                  </g>
                </g>
              </svg>
            </router-link>

            <div class="btns flex justify-center items-center gap-2 max-md:hidden">
              <button class="border border-gray-400 p-2 max-lg:p-1 cursor-default">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  height="none"
                  width="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M15 7L10 12L15 17"
                      stroke="#000000"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </g>
                </svg>
              </button>
              <button class="border border-gray-400 p-2 max-lg:p-1 cursor-default">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M10 7L15 12L10 17"
                      stroke="#000000"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </g>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="flex items-center justify-center gap-10 max-lg:gap-5">
            <article
              class="w-full max-sm:h-60 max-md:h-[300px] max-lg:h-[375px] max-xl:h-[395px]"
              v-for="product in props.products"
              :key="product.id"
            >
              <img :src="product.images" :alt="product.title" class="w-full max-lg:h-full shadow" />
            </article>
          </div>
        </div>
      </div>
      <div v-else class="row flex justify-center gap-5 w-full">
        <h1>error cannot display data</h1>
      </div>
      <!-- isready ends -->
    </div>
  </section>
</template>
<script setup>
import { computed, ref } from 'vue'
import { piniaStore } from '@/stores/store'
import LoadingCard from '../LoadingCard.vue'

const useStore = piniaStore()

const props = defineProps({
  products: {
    type: Array,
    required: true
  },

  searchValue: String
})
const inputValue = ref(props.searchValue)
</script>
<style>
.shop {
  transition: ease 0.5s;
}
.shop:hover {
  background: #ccc;
}
.shop:hover svg {
  transform: translateX(60px);
}
</style>