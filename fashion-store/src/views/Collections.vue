<template>
  <main class="pages px-14 max-md:px-5">
    <span class="justify-center items-center text-center hidden max-md:flex">
      <router-link class="font-text text-small">
        <b> Home </b>
      </router-link>
      /
      <router-link class="font-text text-small">
        <b> Products </b>
      </router-link>
    </span>
    <h2 class="flex justify-start text-h2 max-xl:text-h3 max-md:text-normal max-md:justify-center">
      <b> PRODUCTS </b>
    </h2>
    <SearchItem :search-value="search" @setChange="updateSearchValue" />

    <div class="filter mt-5 mb-2 cursor-pointer flex items-center w-32">
      <b class="text-normal max-md:text-sm">Filters</b>
      <svg
        class="w-8 h-8 max-md:w-6 max-md:h-6 transition-all"
        viewBox="0 0 32 32"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        fill="#000000"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
          <g id="icomoon-ignore"></g>
          <path
            d="M19.159 16.767l0.754-0.754-6.035-6.035-0.754 0.754 5.281 5.281-5.256 5.256 0.754 0.754 3.013-3.013z"
          ></path>
        </g>
      </svg>
    </div>
    <div class="flex flex-wrap gap-2 overflow-x-auto">
      <div class="btn flex text-center gap-2">
        <button class="border border-gray-500 w-52 max-md:w-32 p-2 max-md:p-1 max-md:text-sm">
          NEW
        </button>
        <button class="border border-gray-500 w-52 max-md:w-32 p-2 max-md:p-1 max-md:text-sm">
          SHIRTS
        </button>
        <button class="border border-gray-500 w-52 max-md:w-32 p-2 max-md:p-1 max-md:text-sm">
          POLO SHIRTS
        </button>
        <button class="border border-gray-500 w-52 max-md:w-32 p-2 max-md:p-1 max-md:text-sm">
          SHOES
        </button>
        <button class="border border-gray-500 w-52 max-md:w-32 p-2 max-md:p-1 max-md:text-sm">
          CAPS
        </button>
        <button class="border border-gray-500 w-52 max-md:w-32 p-2 max-md:p-1 max-md:text-sm">
          BAGS
        </button>
      </div>
      <div class="btn flex text-center gap-2">
        <button class="border border-gray-500 w-52 max-md:w-32 p-2 max-md:p-1 max-md:text-sm">
          BEST SELLERS
        </button>
        <button class="border border-gray-500 w-52 max-md:w-32 p-2 max-md:p-1 max-md:text-sm">
          T-SHIRTS
        </button>
        <button class="border border-gray-500 w-52 max-md:w-32 p-2 max-md:p-1 max-md:text-sm">
          JEANS
        </button>
        <button class="border border-gray-500 w-52 max-md:w-32 p-2 max-md:p-1 max-md:text-sm">
          HOODIES
        </button>
        <button class="border border-gray-500 w-52 max-md:w-32 p-2 max-md:p-1 max-md:text-sm">
          GLASSES
        </button>
        <button class="border border-gray-500 w-52 max-md:w-32 p-2 max-md:p-1 max-md:text-sm">
          FURNITURE
        </button>
      </div>
    </div>
    <div
      class="row mt-14 max-md:mt-5 grid grid-cols-3 place-items-center place-content-center gap-10 max-md:grid-cols-2 max-md:gap-5"
    >
      <article
        class="w-full max-md:h-[275px] max-lg:h-[375px] max-xl:h-[395px]"
        v-for="product in products"
        :key="product.id"
      >
        <img :src="product.images" :alt="product.title" class="h-3/4 w-full object-cover" />
        <p class="mb-1 text-sm max-md:text-smaller font-text">{{ product.category.name }}</p>
        <div class="flex justify-between items-center">
          <h3 class="text-normal max-md:text-small font-text">
            <b>{{ product.title.substring(0, 20) }}</b>
          </h3>
          <h3 class="text-normal max-md:text-small font-text">
            <b>${{ product.price }}</b>
          </h3>
        </div>
      </article>
    </div>
  </main>
</template>

<script setup>
import { onMounted, ref, computed } from 'vue'
import { piniaStore } from '@/stores/store'
import SearchItem from '@/components/Hero/SearchItem.vue'

const useStore = piniaStore()
const search = ref('')
const filter = ref('')

const updateSearchValue = (value) => {
  search.value = value
}

const buttonList = ref([
  { name: 'new', clicked: false, id: 0 },
  { name: 'jeans', clicked: false, id: 1 },
  { name: 'polo shirts', clicked: false, id: 2 },
  { name: 'women', clicked: false, id: 3 },
  { name: 'kids', clicked: false, id: 4 },
  { name: 'best sellers', clicked: false, id: 5 },
  { name: 't-shirts', clicked: false, id: 6 },
  { name: 'shirt', clicked: false, id: 7 },
  { name: 'gown', clicked: false, id: 8 },
  { name: 'hoodie', clicked: false, id: 9 },
  { name: 'bag', clicked: false, id: 10 },
  { name: 'shoes', clicked: false, id: 11 }
])

const handleFilter = (id) => {
  return buttonList.value.map((item) => {
    if (item.id !== id) {
      item.clicked = false
    } else {
      item.clicked = true
      filter.value = item.name
    }
  })
}
const products = computed(() => {
  return useStore.products.slice(0, 50).filter((item) => {
    if (item.title) {
      return item.title.toLowerCase().includes(search.value.toLowerCase())
    }
  })
})
</script>

<style>
.filter:hover > svg {
  transform: translateX(10px);
}
</style>
