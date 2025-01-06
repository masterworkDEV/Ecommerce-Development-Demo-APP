<template>
  <section>
    <span class="flex justify-between items-center text-start">
      <h1 class="text-h1 max-md:text-h3 font-text">
        <b>
          NEW <br />
          THIS WEEK
        </b>
      </h1>
      <router-link :to="{ name: 'collections' }" class="font-text text-sm max-sm:text-small mt-14"
        >See All</router-link
      >
    </span>
    <div class="carousel-container mt-7 mb-5">
      <div v-if="useStore.isLoading" class="carousel">
        <LoadingCard v-for="load in Array(12)" :key="load" class="h-20 w-20" />
      </div>
      <div v-else>
        <div class="carousel" v-if="useStore.isReady">
          <Carousel :slide-index="slideIndex" />
        </div>
        <div v-else class="carousel">
          <p>Error cannot display data</p>
        </div>
      </div>

      <!-- carousel -->

      <div class="btns flex justify-center items-center gap-5 mt-10 max-md:hidden">
        <button class="btn border border-gray-400 p-2" @click="scrollPrevious">
          <svg
            viewBox="0 0 24 24"
            height="none"
            width="none"
            fill="none"
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
        <button class="btn border border-gray-400 p-2" @click="scrollNext">
          <svg
            viewBox="0 0 24 24"
            height="none"
            width="none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
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
  </section>
</template>

<script setup>
import { piniaStore } from '@/stores/store'
import { computed, onMounted, ref } from 'vue'
import LoadingCard from '../LoadingCard.vue'
import Carousel from './Carousel.vue'

const useStore = piniaStore()

const slideIndex = ref(0)

const scrollNext = () => {
  const productLists = document.querySelector('.carousel')
  const buttonDirection = slideIndex.value + 1
  const setCarousel = buttonDirection * productLists.clientWidth
  productLists.scrollBy({ left: setCarousel, behavior: 'smooth' })
}

const scrollPrevious = () => {
  const productLists = document.querySelector('.carousel')
  const buttonDirection = slideIndex.value - 1
  const setCarousel = buttonDirection * productLists.clientWidth
  productLists.scrollBy({ left: setCarousel, behavior: 'smooth' })
}

const watchScrollPosition = () => {
  const productLists = document.querySelector('.carousel')
  const scrollBtns = document.querySelectorAll('.btn')
  const scrollMax = productLists.scrollWidth * productLists.scrollLeft
  scrollBtns[0].style.background = productLists.scrollLeft <= 0 ? '#f1f1f1' : '#ddd'
  scrollBtns[1].style.background = scrollMax >= 0 ? '#f1f1f1' : '#ddd'
}

onMounted(() => {
  const productLists = document.querySelector('.carousel')
  productLists.addEventListener('scroll', watchScrollPosition)
})
</script>

<style>
.carousel-container {
  max-width: 2000px;
  width: 100%;
}

.carousel-container .carousel {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 35px;
  overflow-x: auto;
  transition: transform 0.3s ease;
}

.carousel::-webkit-scrollbar {
  display: none;
}

.card {
  width: 325px;
  z-index: 1;
  flex: 0 0 100%;
}

@media (max-width: 768px) {
  .card {
    width: 300px;
  }
}

.card-preview {
  transition: all 0.4s ease-out;
  overflow: hidden;
}
.card-preview:hover {
  box-shadow: 0px 3px 9px #ccc;
  transform: translateY(-20px);
  transition: all 0.2s ease-in-out;
}
.card-preview > .favourite {
  display: none;
  position: absolute;
  right: 0;
  bottom: 0;
  background: #fff;
}
.card-preview:hover .favourite {
  display: block;
  animation: fave-animated 0.3s ease;
}

@keyframes fave-animated {
  from {
    transform: translateX(40px);
    opacity: 0;
  }
  to {
    transform: translateY(0px);
    opacity: 1;
  }
}

.card-preview > .favourite > svg {
  width: 20px;
  height: 20px;
  rotate: -45deg;
  fill: #000;
  transition: all ease-out 0.3s;
  animation: fave-svg-animated 0.25s ease-in-out;
}

@keyframes fave-svg-animated {
  0% {
    scale: 0.5;
  }
  25% {
    scale: 0.9;
  }
  50% {
    scale: 1.1;
  }
  75% {
    scale: 1.3;
  }
  100% {
    scale: 1;
  }
}
/* ends */

.card-preview:hover > .add-to-cart {
  opacity: 1;
}
.btns .btn {
  transition: all 0.3s ease-out;
}
</style>
