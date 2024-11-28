<template>
  <section class="new_week w-full">
    <div class="title flex justify-between items-end">
      <h1 class="text-6xl max-md:text-4xl">
        <b>
          NEW <br />
          THIS WEEK
        </b>
      </h1>
      <button class="see-all translate-x-3 max-md:translate-x-0">See All</button>
    </div>
    <div class="container mt-7 mb-5">
      <div v-if="useStore.isLoading" class="carousel">
        <div class="card w-full">
          <div class="movie--isloading">
            <div class="loading-image h-[325px]"></div>
            <div class="loading-content">
              <div class="loading-text-container">
                <div class="loading-main-text"></div>
                <div class="loading-sub-text"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="card w-full">
          <div class="movie--isloading">
            <div class="loading-image h-[325px]"></div>
            <div class="loading-content">
              <div class="loading-text-container">
                <div class="loading-main-text"></div>
                <div class="loading-sub-text"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="card w-full">
          <div class="movie--isloading">
            <div class="loading-image h-[325px]"></div>
            <div class="loading-content">
              <div class="loading-text-container">
                <div class="loading-main-text"></div>
                <div class="loading-sub-text"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="card w-full">
          <div class="movie--isloading">
            <div class="loading-image h-[325px]"></div>
            <div class="loading-content">
              <div class="loading-text-container">
                <div class="loading-main-text"></div>
                <div class="loading-sub-text"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="card w-full">
          <div class="movie--isloading">
            <div class="loading-image h-[325px]"></div>
            <div class="loading-content">
              <div class="loading-text-container">
                <div class="loading-main-text"></div>
                <div class="loading-sub-text"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="card w-full">
          <div class="movie--isloading">
            <div class="loading-image h-[325px]"></div>
            <div class="loading-content">
              <div class="loading-text-container">
                <div class="loading-main-text"></div>
                <div class="loading-sub-text"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="card w-full">
          <div class="movie--isloading">
            <div class="loading-image h-[325px]"></div>
            <div class="loading-content">
              <div class="loading-text-container">
                <div class="loading-main-text"></div>
                <div class="loading-sub-text"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="card w-full">
          <div class="movie--isloading">
            <div class="loading-image h-[325px]"></div>
            <div class="loading-content">
              <div class="loading-text-container">
                <div class="loading-main-text"></div>
                <div class="loading-sub-text"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="card w-full">
          <div class="movie--isloading">
            <div class="loading-image h-[325px]"></div>
            <div class="loading-content">
              <div class="loading-text-container">
                <div class="loading-main-text"></div>
                <div class="loading-sub-text"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="card w-full">
          <div class="movie--isloading">
            <div class="loading-image h-[325px]"></div>
            <div class="loading-content">
              <div class="loading-text-container">
                <div class="loading-main-text"></div>
                <div class="loading-sub-text"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="card w-full">
          <div class="movie--isloading">
            <div class="loading-image h-[325px]"></div>
            <div class="loading-content">
              <div class="loading-text-container">
                <div class="loading-main-text"></div>
                <div class="loading-sub-text"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="card w-full">
          <div class="movie--isloading">
            <div class="loading-image h-[325px]"></div>
            <div class="loading-content">
              <div class="loading-text-container">
                <div class="loading-main-text"></div>
                <div class="loading-sub-text"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <div class="carousel" v-if="useStore.isReady">
          <article v-for="product in productSlides" :key="product.id" class="card">
            <div
              :style="{
                transform: `translateX(-${slideIndex * 100}%)`
              }"
              class="card-preview relative"
            >
              <div
                @click="useStore.useAddToFavourite(product)"
                class="favourite absolute right-0 bottom-0 bg-white p-3"
              >
                <svg viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg">
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
                :src="product.images"
                :alt="product.category.name"
                class="w-[325px] h-[325px] border-2 border-[#e1e1e1]"
              />
              <button
                @click="useStore.useAddToCart(product)"
                class="add-to-cart p-[.6rem] flex bg-[#d9d9d9] justify-center items-center absolute bottom-0 left-[50%] translate-x-[-50%] opacity-70 hover:opacity-100"
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
                  <h3>${{ product.price }}</h3>
                </div>
              </div>
            </div>
          </article>
        </div>
        <div v-else class="carousel">
          <h1>Error cannot display data</h1>
        </div>
      </div>

      <!-- carousel -->

      <div class="btns flex justify-center items-center gap-5 mt-10 max-md:hidden">
        <button class="btn border border-gray-400 p-2" @click="scrollPrevious">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
  </section>
</template>

<script setup>
import { piniaStore } from '@/stores/store'
import { computed, onMounted, ref } from 'vue'
const useStore = piniaStore()
const slideIndex = ref(0)

const productSlides = computed(() => {
  return useStore.products.slice(6, 18)
})

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
  scrollBtns[1].style.background = scrollMax > productLists.left ? '#f1f1f1' : '#ddd'
}
onMounted(() => {
  const productLists = document.querySelector('.carousel')
  productLists.addEventListener('scroll', watchScrollPosition)
})
</script>

<style scoped>
/* new week */
.new_week > .container {
  max-width: 3000px;
  width: 100%;
}
.new_week .container .carousel {
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
}
.card-preview:hover {
  box-shadow: 0px 3px 9px #ccc;
  scale: 1.05;
  transition: all 0.3s ease-in-out;
}
.card-preview > .favourite {
  display: none;
}
.card-preview:hover .favourite {
  display: block;
  &:hover {
    background: black;
  }
}
.card-preview > .favourite > svg {
  width: 20px;
  height: 20px;
  rotate: -45deg;
  fill: #000;
  transition: all ease-out 0.3s;
}
.favourite:hover > svg {
  fill: #fff;
}
.btns .btn {
  transition: all 0.3s ease-out;
}
</style>
