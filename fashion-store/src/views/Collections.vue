<template>
  <main class="pages mx-10 max-md:mx-0 pb-10">
    <span class="justify-center items-center text-center hidden max-md:flex">
      <router-link class="font-text text-small" :to="{ name: 'home' }"> Home </router-link>
      /
      <router-link class="font-text text-small" :to="{ name: 'collections' }">
        products
      </router-link>
    </span>
    <h2
      class="flex justify-start ml-5 max-md:ml-5 text-h2 max-xl:text-h3 max-md:text-normal max-md:justify-center"
    >
      <b> PRODUCTS </b>
    </h2>
    <form class="px-5">
      <SearchItem :search-value="search" @setChange="updateSearchValue" />
    </form>
    <div class="filter mt-5 ml-5 mb-2 cursor-pointer flex items-center w-32">
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
    <div class="filter-container flex flex-wrap gap-2 overflow-x-auto pl-5">
      <div class="flex text-center gap-2">
        <button
          @click="handleFilter(button)"
          class="button border font-text uppercase border-gray-400 text-gray-600 w-52 max-md:w-32 p-3 max-xl:p-2 max-md:h-10 max-md:p-0 text-sm"
          :class="button.clicked && 'active'"
          v-for="button in buttonList.slice(0, 6)"
          :key="button.id"
        >
          {{ button.name }}
        </button>
      </div>
      <div class="flex text-center gap-2">
        <button
          @click="handleFilter(button)"
          class="button border font-text uppercase border-gray-400 text-gray-600 w-52 max-md:w-32 p-3 max-xl:p-2 max-md:h-10 max-md:p-0 text-sm"
          :class="button.clicked && 'active'"
          v-for="button in buttonList.slice(6, 11)"
          :key="button.id"
        >
          {{ button.name }}
        </button>
      </div>
    </div>
    <div class="loading min-h-96 flex items-center justify-center" v-if="useStore.isLoading">
      <p>Loading please wait....</p>
    </div>

    <template v-else>
      <div
        v-if="useStore.isReady"
        class="relative min-h-96 mt-14 max-md:mt-5 grid grid-cols-3 place-items-center place-content-center gap-10 max-md:grid-cols-2 max-md:gap-5 px-5"
      >
        <div
          v-if="!products.length && search"
          class="absolute left-[50%] translate-x-[-50%] top-[50%] text-center"
        >
          <h3>Product not available in store, kindly reload</h3>
          <a href="/collections" class="text-blue-600">please reload</a>
        </div>
        <article
          v-else
          class="w-full max-md:h-[275px] max-lg:h-[375px] max-xl:h-[395px]"
          v-for="product in products"
          :key="product.id"
        >
          <router-link :to="{ name: 'product-details', params: { productID: product.id } }">
            <img :src="product.images" :alt="product.title" class="h-3/4 w-full object-cover" />
          </router-link>
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
      <div v-else class="error h-96 w-full flex justify-center text-center items-center">
        <p>Something went wrong</p>
      </div>
    </template>
    <template v-for="page in totalPages" :key="page">
      <span>{{ page }}</span>
    </template>
    <div class="flex justify-center gap-5 pt-10">
      <button @click="handlePreviousPage">
        <svg
          viewBox="0 0 1024 1024"
          class="icon fill-black w-10 h-8 max-md:h-5 transition-all"
          :class="initialPage === 1 && 'fill-gray-600'"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M768 903.232l-50.432 56.768L256 512l461.568-448 50.432 56.768L364.928 512z"
            ></path>
          </g>
        </svg>
      </button>
      <button @click="handleNextPage">
        <svg
          viewBox="0 0 1024 1024"
          class="icon fill-black w-10 h-8 max-md:h-5 transition-all"
          :class="products.length / itemsPerPage === 0 && 'fill-gray-600'"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <path d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z"></path>
          </g>
        </svg>
      </button>
    </div>
  </main>
</template>

<script setup>
import { onMounted, ref, computed, watch } from 'vue'
import { piniaStore } from '@/stores/store'
import SearchItem from '@/components/Hero/SearchItem.vue'
import router from '@/router/router'

const useStore = piniaStore()
const search = ref('')
const couldNotFindProduct = ref(false)

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

const handleFilter = (button) => {
  const filterByName = buttonList.value.filter((btn) => {
    if (btn.id === button.id) {
      btn.clicked = true
      search.value = button.name
    } else {
      btn.clicked = false
    }
  })

  return filterByName
}

// display data per page ****pagination****

const initialPage = ref(1)
const itemsPerPage = ref(10)
const products = computed(() => {
  const startFrom = (initialPage.value - 1) * itemsPerPage.value
  const endAt = startFrom + itemsPerPage.value
  return useStore.products
    .filter((item) => {
      if (item) {
        return (
          item.title.toLowerCase().includes(search.value.toLowerCase()) ||
          item.category.name.toLowerCase().includes(search.value.toLowerCase())
        )
      }
    })
    .slice(startFrom, endAt)
})
const totalPages = computed(() => {
  return Math.ceil(products.value.length / itemsPerPage.value)
})

const handlePreviousPage = () => {
  if (initialPage.value === 1) {
    return false
  } else {
    initialPage.value--
    scrollTo({ behavior: 'smooth', top: 10 })
  }
}
const handleNextPage = () => {
  if (Math.ceil(products.value.length / itemsPerPage.value === 0)) {
    return false
  } else {
    initialPage.value++
    scrollTo({ behavior: 'instant', top: 10 })
  }
}

watch(products, (newProducts) => {
  if (!newProducts && search) {
    search = ''
  }
})
</script>

<style scoped>
.router-link-active {
  font-weight: 900;
}
.filter:hover > svg {
  transform: translateX(10px);
}

.filter-container::-webkit-scrollbar {
  width: 0px;
}

.button.active {
  color: black;
  border-color: black;
}
</style>
