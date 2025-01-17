<template>
  <article v-for="(product, index) in products" :key="index" class="card">
    <div
      :style="{
        transform: `translateX(-${props.slideIndex * 100}%)`
      }"
      class="relative card-preview"
    >
      <router-link
        :to="{ name: 'product-details', params: { productID: product.id } }"
        class="eyes-view absolute top-3 right-3"
      >
        <svg
          viewBox="0 0 64 64"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          role="img"
          class="iconify iconify--emojione-monotone"
          preserveAspectRatio="xMidYMid meet"
          fill="#000000"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M2 31.428C2 40.23 5.74 53 17.002 53s15-12.77 15-21.572C32.002 4.191 2 4.191 2 31.428m12.768 20.006c-9.586 0-11.969-11.785-11.969-19.346c0-26.029 23.936-26.029 23.935 0c-.001 7.56-2.38 19.346-11.966 19.346"
              fill="#000000"
            ></path>
            <path
              d="M32.002 31.428C32.002 40.23 35.739 53 47.003 53C58.264 53 62 40.23 62 31.428c0-27.237-29.998-27.237-29.998 0m12.767 20.006c-9.588 0-11.968-11.785-11.968-19.346c0-26.029 23.934-26.029 23.934 0c-.001 7.56-2.381 19.346-11.966 19.346"
              fill="#000000"
            ></path>
            <path
              d="M2.799 32.246c0 6.211 4.354 10.965 9.727 10.965c5.372 0 9.724-4.754 9.724-10.965c-.001-15.275-19.451-15.275-19.451 0"
              fill="#000000"
            ></path>
            <path
              d="M32.801 32.246c0 6.211 4.353 10.965 9.726 10.965c5.371 0 9.723-4.754 9.723-10.965c-.001-15.275-19.449-15.275-19.449 0"
              fill="#000000"
            ></path>
          </g>
        </svg>
      </router-link>

      <div @click="useStore.useAddToFavourite(product.id)" class="favourite p-3">
        <svg
          v-if="product.liked"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke="#c91818"
            stroke-width="0.768"
          >
            <path
              d="M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z"
              fill="#c91818"
            ></path>
          </g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z"
              fill="#c91818"
            ></path>
          </g>
        </svg>
        <svg v-else viewBox="0 0 24 24" fill="#000" xmlns="http://www.w3.org/2000/svg">
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M8.96173 18.9109L9.42605 18.3219L8.96173 18.9109ZM12 5.50063L11.4596 6.02073C11.601 6.16763 11.7961 6.25063 12 6.25063C12.2039 6.25063 12.399 6.16763 12.5404 6.02073L12 5.50063ZM15.0383 18.9109L15.5026 19.4999L15.0383 18.9109ZM9.42605 18.3219C7.91039 17.1271 6.25307 15.9603 4.93829 14.4798C3.64922 13.0282 2.75 11.3345 2.75 9.1371H1.25C1.25 11.8026 2.3605 13.8361 3.81672 15.4758C5.24723 17.0866 7.07077 18.3752 8.49742 19.4999L9.42605 18.3219ZM2.75 9.1371C2.75 6.98623 3.96537 5.18252 5.62436 4.42419C7.23607 3.68748 9.40166 3.88258 11.4596 6.02073L12.5404 4.98053C10.0985 2.44352 7.26409 2.02539 5.00076 3.05996C2.78471 4.07292 1.25 6.42503 1.25 9.1371H2.75ZM8.49742 19.4999C9.00965 19.9037 9.55954 20.3343 10.1168 20.6599C10.6739 20.9854 11.3096 21.25 12 21.25V19.75C11.6904 19.75 11.3261 19.6293 10.8736 19.3648C10.4213 19.1005 9.95208 18.7366 9.42605 18.3219L8.49742 19.4999ZM15.5026 19.4999C16.9292 18.3752 18.7528 17.0866 20.1833 15.4758C21.6395 13.8361 22.75 11.8026 22.75 9.1371H21.25C21.25 11.3345 20.3508 13.0282 19.0617 14.4798C17.7469 15.9603 16.0896 17.1271 14.574 18.3219L15.5026 19.4999ZM22.75 9.1371C22.75 6.42503 21.2153 4.07292 18.9992 3.05996C16.7359 2.02539 13.9015 2.44352 11.4596 4.98053L12.5404 6.02073C14.5983 3.88258 16.7639 3.68748 18.3756 4.42419C20.0346 5.18252 21.25 6.98623 21.25 9.1371H22.75ZM14.574 18.3219C14.0479 18.7366 13.5787 19.1005 13.1264 19.3648C12.6739 19.6293 12.3096 19.75 12 19.75V21.25C12.6904 21.25 13.3261 20.9854 13.8832 20.6599C14.4405 20.3343 14.9903 19.9037 15.5026 19.4999L14.574 18.3219Z"
            ></path>
          </g>
        </svg>
      </div>
      <img
        @dblclick="useStore.useAddToFavourite(product.id)"
        :src="product.images"
        :alt="product.category.name"
        class="w-[325px] h-[325px] border-2 border-primary hover:opacity-90"
      />

      <button
        @click="useStore.useAddToCart(product)"
        class="add-to-cart p-[.6rem] flex bg-[#d9d9d9] justify-center items-center absolute bottom-0 left-[50%] translate-x-[-50%] opacity-70"
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
    </div>
    <div class="card-bottom">
      <div class="row flex justify-between items-end">
        <div class="spec">
          <div class="category-spread flex text-center items-centert mb-1 mt-3 gap-2">
            <p class="text-sm capitalize text-[#5e5e5e] max-sm:text-small font-text">
              {{ product.category.name }}
            </p>
            <form class="flex items-center">
              <input type="checkbox" class="w-3 h-3" />
              <small>+2</small>
            </form>
          </div>
          <div class="title">
            <h3 class="font-text max-sm:text-sm">
              <b>{{ product.title.substring(0, 22) }}</b>
            </h3>
          </div>
        </div>
        <div class="price">
          <h3 class="font-text max-sm:text-sm">
            <b>${{ product.price }}</b>
          </h3>
        </div>
      </div>
    </div>
  </article>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'

import { piniaStore } from '@/stores/store'

const useStore = piniaStore()
const props = defineProps({
  slideIndex: Number
})

const products = computed(() => {
  return useStore.products.slice(2, 14)
})
</script>

<style>
.card-preview {
  overflow: hidden;
  transition: all 1s ease;
}
.card-preview:hover > img {
  transform: translateY(-2px);
}

.eyes-view {
  display: none;
  width: 35px;
  height: 35px;
  justify-content: center;
  align-items: center;
  background: white;
  z-index: 5;
}
.card-preview:hover > .eyes-view {
  display: flex;
}

@keyframes rotateEyes {
  0% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(180deg);
  }
}
.eyes-view > svg {
  width: 25px;
  height: 25px;
  background: white;
  animation: rotateEyes 0.9s ease alternate;
}
</style>