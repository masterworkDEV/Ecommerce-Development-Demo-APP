<template>
  <main class="pages px-14 max-md:px-5">
    <span class="justify-center items-center hidden max-md:flex">
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
    <span>
      <h4 class="mt-4 mb-2">Filters</h4>
    </span>
    <div
      class="btn-list flex overflow-x-auto overflow-y-hidden justify-start items-center gap-5 w-full"
    >
      <button
        v-for="btn in buttonList.slice(0, 6)"
        :key="btn.id"
        class="border border-gray-500 p-2 w-full font-text text-small uppercase"
      >
        <pre>{{ btn.name }}</pre>
      </button>
    </div>
    <div
      class="btn-list flex overflow-x-auto overflow-y-hidden justify-start items-center gap-5 w-full mt-1"
    >
      <button
        v-for="btn in buttonList.slice(6, 11)"
        :key="btn.id"
        @click="handleFilter(btn.id)"
        class="border border-gray-500 p-2 w-full font-text text-small uppercase"
      >
        <pre>{{ btn.name }}</pre>
      </button>
    </div>
    <div
      class="row mt-10 max-md:mt-5 grid grid-cols-3 place-items-center place-content-center gap-10 max-md:grid-cols-2"
    >
      <article
        class="w-full max-md:h-[300px] max-lg:h-[375px] max-xl:h-[395px]"
        v-for="product in products"
        :key="product.id"
      >
        <img :src="product.images" :alt="product.title" class="h-3/4 w-full object-cover" />
        <p>{{ product.category.name }}</p>
        <h3>{{ product.title }}</h3>
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

<style></style>
