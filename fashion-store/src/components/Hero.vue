<template>
  <main>
    <ul>
      <li class="max-xl:text-sm text-textPrimary">MEN</li>
      <li class="max-xl:text-sm text-textPrimary">WOMEN</li>
      <li class="max-xl:text-sm text-textPrimary">KIDS</li>
    </ul>
    <!-- <SearchItem @submit-search.prevent="handleSubmit" /> -->
    <form @submit.prevent="searchProduct">
      <input
        type="text"
        name="search"
        autocorrect="on"
        maxlength="50"
        minlength="3"
        role="search"
        placeholder="Search"
        autofocus="on"
        v-model="search"
        @change="(e) => setSearch(e)"
        class="input-field bg-inputBg p-3 placeholder:pl-80 text-[1rem] w-[30%] max-xl:w-[40%] h-[50px] rounded max-md:w-full"
      />
    </form>
    <div class="new-collection mt-24">
      <div v-if="useStore.isLoading" class="w-full">
        <div class="row grid grid-cols-3 gap-10 w-full">
          <LoadingCard v-for="card in Array(3)" :key="card" />
        </div>
      </div>
      <div v-else>
        <div
          v-if="useStore.isReady"
          class="row flex justify-center gap-5 w-full max-lg:gap-3 max-md:flex-col-reverse max-md:gap-1"
        >
          <div class="col">
            <h1 class="text-6xl max-xl:text-5xl max-md:hidden">
              <b>
                NEW <br />
                COLLECTION
              </b>
            </h1>
            <p class="max-md:hidden">Summer <br />2024</p>
            <div class="flex items-center gap-2 mt-52 max-md:mt-10">
              <button class="go-to-shop w-full p-2 max-lg:p-1 bg-[#d9d9d9] text-start gap-5">
                <span>Go To Shop</span>
                <svg
                  fill="#000000"
                  height="none"
                  width="none"
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
              </button>
              <div class="btns flex justify-center items-center gap-2 max-md:hidden">
                <button class="border border-gray-400 p-2 max-lg:p-1 cursor-default">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
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
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
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
            <div class="w-full flex gap-10 max-lg:gap-5">
              <article
                class="w-full max-md:h-[300px] max-lg:h-[375px] max-xl:h-[395px h-[425px] ]"
                v-for="product in products.filter((item) =>
                  item.title.toLowerCase().includes(search.toLowerCase())
                )"
                :key="product.id"
              >
                <img
                  :src="product.images"
                  :alt="product.title"
                  class="w-full max-lg:h-full shadow"
                />
              </article>
            </div>
          </div>
        </div>
        <div v-else class="row flex justify-center gap-5 w-full">
          <h1>error cannot display data</h1>
        </div>
        <!-- isready ends -->
      </div>
    </div>
  </main>
</template>

<script setup>
import { piniaStore } from '@/stores/store'
import SearchItem from './SearchItem.vue'
import LoadingCard from './LoadingCard.vue'
import { computed, ref } from 'vue'

const useStore = piniaStore()
const search = ref('')
const products = computed(() => useStore.products.slice(0, 2))

const setSearch = (e) => {
  return e.target.value
}
</script>

<style >
.search-text {
  position: absolute;
  transform: translate(-80px, 50%);
}

.search-text > span {
  color: #8a8a8a;
}

.go-to-shop {
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-between;
}
.go-to-shop > svg {
  height: 25px;
  width: 25px;
}

.btns svg {
  width: 25px;
  height: 25px;
}

.input-field {
  transition: all 0.5s ease;
}
.input-field:focus {
  outline: #333;
}
.search-container:hover .icon {
  scale: 0;
  opacity: 0;
}

.search-container:hover .search-text {
  scale: 0;
  opacity: 0;
}
</style>
