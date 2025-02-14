<template>
  <main class="pages mx-14 max-xl:mx-10 max-md:mx-5">
    <span class="justify-center items-center text-center hidden max-md:flex gap-1">
      <router-link class="font-text text-small" :to="{ name: 'home' }"> Home </router-link>
      /
      <router-link class="font-text text-small" :to="{ name: 'collections' }">
        products
      </router-link>
    </span>
    <h2 class="flex justify-start text-h2 max-xl:text-h3 max-md:text-normal max-md:justify-center">
      <b> PRODUCTS </b>
    </h2>
    <form @submit.prevent="handleSubmit">
      <SearchItem :search-value="search" @setChange="updateSearchValue" />
    </form>
    <button
      class="filter mt-5 mb-5 cursor-pointer flex justify-start items-center w-2/4"
      @click="toggleFilterModal"
    >
      <span
        class="font-normal flex justify-start text-h5 max-md:text-normal transition-all"
        :class="filterModal && 'w-2/4 justify-between'"
      >
        <b> Filters </b>
      </span>
      <svg
        class="w-12 h-12 max-sm:h-7 transition-all"
        :class="filterModal && 'rotate-[-180deg]'"
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
    </button>
    <div class="w-full flex">
      <div class="filter-modal" :class="filterModal && 'active'">
        <div class="w-full">
          <h3>
            <b class="text-h5 max-md:text-normal"> Size </b>
          </h3>
          <div class="mt-5 w-full flex gap-2 max-md:gap-1">
            <button
              class="w-16 p-3 max-md:p-0 max-md:w-8 max-md:h-8 border border-gray-400 text-sm"
              v-for="size in sizesAvailable"
              :key="size"
            >
              {{ size }}
            </button>
          </div>
          <button
            class="accordion w-full flex justify-between items-end mt-7 text-h5 max-md:text-normal font-bold border-dotted border-b"
            @click="checkAvailability"
          >
            <span> Availability </span>
            <svg
              viewBox="0 0 1024 1024"
              class="icon w-8 h-5 max-md:w-5 max-md:h-4 transition-all"
              :class="availability && 'rotate-[90deg]'"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z"
                  fill="#000000"
                ></path>
              </g>
            </svg>
          </button>
          <ul
            class="h-[0rem] overflow-hidden pb-2 border-b-2 border-dotted border-b-otherTextOne transition-all"
            :class="availability && 'min-h-[7rem]'"
          >
            <li class="col flex items-center mb-3 mt-3 gap-5">
              <input type="checkbox" checked="false" class="w-6 h-6" />
              <label for="availability" class="text-xl max-md:text-normal max-sm:text-sm"
                >Availability</label
              >
              <h5 class="max-sm:text-sm">
                <b class="text-blue-700"> ({{ useStore.products.length }}) </b>
              </h5>
            </li>
            <li class="col flex items-center mb-3 mt-3 gap-5">
              <input type="checkbox" checked="false" class="w-6 h-6" />
              <label for="availability" class="text-xl max-md:text-normal max-sm:text-sm"
                >Out of stock</label
              >
              <h5 class="max-sm:text-sm">
                <b class="text-blue-700"> ({{ useStore.products.length <= 1 ? 0 : 0 }}) </b>
              </h5>
            </li>
          </ul>
          <button
            class="accordion w-full flex justify-between items-end mt-7 text-h5 max-md:text-normal font-bold border-dotted border-b"
            @click="checkCategory"
          >
            <span> Category </span>
            <svg
              viewBox="0 0 1024 1024"
              class="icon w-8 h-5 max-md:w-5 max-md:h-4 transition-all"
              :class="category && 'rotate-[90deg]'"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z"
                  fill="#000000"
                ></path>
              </g>
            </svg>
          </button>
          <ul
            class="h-[0rem] overflow-hidden pb-2 border-b-2 border-dotted border-b-otherTextOne transition-all"
            :class="category && 'min-h-[10rem]'"
          >
            <li
              class="col pt-3 capitalize font-bold cursor-pointer hover:bg-otherBgTwo"
              v-for="(category, index) in categoryList"
              :key="index"
              @click="filterByCategory(category)"
            >
              {{ category }}
            </li>
          </ul>
          <button
            class="accordion w-full flex justify-between items-end mt-7 text-h5 max-md:text-normal font-bold border-dotted border-b"
            @click="checkColors"
          >
            <span> Colors </span>
            <svg
              viewBox="0 0 1024 1024"
              class="icon w-8 h-5 max-md:w-5 max-md:h-4 transition-all"
              :class="colors && 'rotate-[90deg]'"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z"
                  fill="#000000"
                ></path>
              </g>
            </svg>
          </button>
          <ul
            class="colors flex items-end gap-10 max-md:gap-3 h-[0rem] overflow-scroll pb-2 border-b-2 border-dotted border-b-otherTextOne transition-all"
            :class="colors && 'min-h-[7rem]'"
          >
            <li v-for="color in colorList" class="col mb-3 mt-3" :key="color.name">
              <div
                :class="
                  colorList.length &&
                  `bg-[${color.name}] border-4 border-[white] w-7 h-7 max-md:w-5 max-md:h-5 rounded-full hover:opacity-90`
                "
              ></div>
              <span>
                {{ color.name }}
              </span>
            </li>
          </ul>
          <button
            class="accordion w-full flex justify-between items-end mt-7 text-h5 max-md:text-normal font-bold border-dotted border-b"
            @click="checkPriceRange"
          >
            <span> Price Range </span>
            <svg
              viewBox="0 0 1024 1024"
              class="icon w-8 h-5 max-md:w-5 max-md:h-4 transition-all"
              :class="priceRange && 'rotate-[90deg]'"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z"
                  fill="#000000"
                ></path>
              </g>
            </svg>
          </button>
          <ul
            class="h-[0rem] overflow-hidden pb-2 border-b-2 border-dotted border-b-otherTextOne transition-all"
            :class="priceRange && 'min-h-[7rem]'"
          >
            <li class="w-full col flex items-center mb-3 mt-3 gap-5">
              <form class="mr-5 w-full">
                <label for="price">Min-Max</label>
                <input name="range" type="range" class="w-full" />
              </form>
            </li>
          </ul>
          <button
            class="accordion w-full flex justify-between items-end mt-7 text-h5 max-md:text-normal font-bold border-dotted border-b"
            @click="checkCollection"
          >
            <span>Collections </span>
            <svg
              viewBox="0 0 1024 1024"
              class="icon w-8 h-5 max-md:w-5 max-md:h-4 transition-all"
              :class="collection && 'rotate-[90deg]'"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z"
                  fill="#000000"
                ></path>
              </g>
            </svg>
          </button>
          <ul
            class="h-[0rem] overflow-hidden pb-2 border-b-2 border-dotted border-b-otherTextOne transition-all"
            :class="collection && 'min-h-[7rem]'"
          >
            <li class="col flex items-center mb-3 mt-3 gap-5">
              <router-link> Jewelery </router-link>
            </li>
          </ul>
          <button
            class="accordion w-full flex justify-between items-end mt-7 text-h5 max-md:text-normal font-bold border-dotted border-b"
            @click="checkTags"
          >
            <span> Tags </span>
            <svg
              viewBox="0 0 1024 1024"
              class="icon w-8 h-5 max-md:w-5 max-md:h-4 transition-all"
              :class="tags && 'rotate-[90deg]'"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z"
                  fill="#000000"
                ></path>
              </g>
            </svg>
          </button>
          <ul
            class="h-[0rem] overflow-hidden pb-2 border-b-2 border-dotted border-b-otherTextOne transition-all"
            :class="tags && 'min-h-[7rem]'"
          >
            <li class="col flex items-center mb-3 mt-3 gap-5">New</li>
            <li class="col flex items-center mb-3 mt-3 gap-5">Old</li>
          </ul>
          <button
            class="accordion w-full flex justify-between items-end mt-7 text-h5 max-md:text-normal font-bold border-dotted border-b"
            @click="checkRating"
          >
            <span> Rating </span>
            <svg
              viewBox="0 0 1024 1024"
              class="icon w-8 h-5 max-md:w-5 max-md:h-4 transition-all"
              :class="rating && 'rotate-[90deg]'"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z"
                  fill="#000000"
                ></path>
              </g>
            </svg>
          </button>
          <ul
            class="h-[0rem] overflow-hidden pb-2 border-b-2 border-dotted border-b-otherTextOne transition-all"
            :class="rating && 'min-h-[7rem]'"
          >
            <li class="col flex items-center mb-3 mt-3 gap-5">1 star</li>
            <li class="col flex items-center mb-3 mt-3 gap-5">3 star</li>
            <li class="col flex items-center mb-3 mt-3 gap-5">5 star</li>
          </ul>
        </div>
      </div>
      <div class="flex flex-grow flex-col overflow-hidden w-[40%] max-md:w-[0%]">
        <div class="buttons flex flex-wrap gap-2 overflow-x-auto">
          <div class="flex text-center gap-2">
            <button
              @click="handleFilter(button)"
              class="button border font-text uppercase border-gray-400 text-gray-600 w-52 max-md:w-32 p-2 max-md:h-8 max-md:p-0 text-sm"
              :class="button.clicked && 'active'"
              v-for="button in filterType.slice(0, 6)"
              :key="button.id"
            >
              {{ button.name }}
            </button>
          </div>
          <div class="flex text-center gap-2">
            <button
              @click="handleFilter(button)"
              class="button border font-text uppercase border-gray-400 text-gray-600 w-52 max-md:w-32 p-2 max-md:h-8 max-md:p-0 text-sm"
              :class="button.clicked && 'active'"
              v-for="button in filterType.slice(6, 11)"
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
          <div v-if="useStore.isReady" class="product-list" :class="filterModal && 'active'">
            <div
              v-if="!products.length && search"
              class="absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] text-center"
            >
              <h3>({{ products.length }}) found</h3>
              <a href="/" class="text-blue-600">please reload</a>
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

        <div class="flex justify-center gap-5 mt-20 mb-10">
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
                <path
                  d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z"
                ></path>
              </g>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { onMounted, ref, computed, watch, onUnmounted } from 'vue'
import { piniaStore } from '@/stores/store'
import SearchItem from '@/components/Hero/SearchItem.vue'
import router from '@/router/router'

const useStore = piniaStore()

const search = ref('')
const filterModal = ref(false)
const availability = ref(false)
const category = ref(false)
const categoryList = ref(['clothes', 'bag', 'jewelery', 'electronics'])
const colors = ref(false)
const colorList = ref([
  { name: 'green' },
  { name: 'blue' },
  { name: 'yellow' },
  { name: 'pink' },
  { name: 'black' },
  { name: 'brown' },
  { name: 'purple' },
  { name: 'white' }
])

const priceRange = ref(false)
const collection = ref(false)
const tags = ref(false)
const rating = ref(false)

const checkAvailability = () => {
  availability.value = !availability.value
}

const checkCategory = () => {
  category.value = !category.value
}
const checkColors = () => {
  colors.value = !colors.value
}
const checkPriceRange = () => {
  priceRange.value = !priceRange.value
}
const checkCollection = () => {
  collection.value = !collection.value
}
const checkTags = () => {
  tags.value = !tags.value
}
const checkRating = () => {
  rating.value = !rating.value
}

const toggleFilterModal = () => {
  filterModal.value = !filterModal.value
}

const updateSearchValue = (value) => {
  search.value = value
}

const filterType = ref([
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

const sizesAvailable = ref(['XS', 'S', 'M', 'L', 'XL', '2XL'])

const handleFilter = (button) => {
  const filterByName = filterType.value.filter((btn) => {
    if (btn.id === button.id) {
      btn.clicked = true
      search.value = button.name
    } else {
      btn.clicked = false
    }
  })

  return filterByName
}

const filterByCategory = (category) => {
  const filterByCategory = categoryList.value.some((item) => {
    if (item == category) {
      search.value = category
    } else {
      search.value
    }
  })
  filterModal.value = false
  return filterByCategory
}

// display data per page ****pagination****

const initialPage = ref(1)
const itemsPerPage = ref(10)

const searchQuery = computed(() => search.value.toLowerCase())

const products = computed(() => {
  const startFrom = (initialPage.value - 1) * itemsPerPage.value
  const endAt = startFrom + itemsPerPage.value
  return useStore.products
    .filter((item) => {
      if (item) {
        return (
          item.title.toLowerCase().includes(searchQuery.value) || // Access searchQuery.value
          (item.category &&
            item.category.name &&
            item.category.name.toLowerCase().includes(searchQuery.value))
        )
      }
      return false // Important: Return false if item is null/undefined
    })
    .slice(startFrom, endAt)
})

// Watch for changes in searchQuery or initialPage

watch([searchQuery, initialPage], ()=>{
setUrlAccordingToSearchInput()
})


const setUrlAccordingToSearchInput = ()=>{{
  const params = new URLSearchParams()
  if(searchQuery.value){
    params.set('search', searchQuery.value)
  }if(initialPage.value > 1){
    params.set('page', initialPage.value)
  }

  const newUrl = `${window.location.pathname}?${params.toString()}`
  window.history.pushState(null, '', newUrl)
}}

window.addEventListener('popstate', ()=>{
  const params = new URLSearchParams(window.location.search)
params.get('search', searchQuery.value) || ''
const page = parseInt(params.get('page', initialPage.value)) || 1
initialPage.value = page
})


onMounted(()=>{
  useStore.footerState = false
  const params = new URLSearchParams(window.location.search)
params.get('search', searchQuery.value) || ''
const page = parseInt(params.get('page', initialPage.value)) || 1
initialPage.value = page
})


























onUnmounted(() => {
  useStore.footerState = true
})

const handlePreviousPage = () => {
  if (initialPage.value === 1) {
    return false
  } else {
    initialPage.value--
    scrollTo({ behavior: 'instant', top: 10, left: 10 })
  }
}
const handleNextPage = () => {
  if (Math.ceil(products.value.length / itemsPerPage.value === 0)) {
    return false
  } else {
    initialPage.value++
    scrollTo({ behavior: 'instant', top: 10, left: 0 })
  }
}
</script>

<style scoped>
.router-link-active {
  font-weight: 900;
}
.filter-container::-webkit-scrollbar {
  width: 0px;
}

.button.active {
  color: black;
  border-color: black;
}

.filter-modal {
  display: flex;
  width: 0px;
  overflow: hidden;
  flex-shrink: 0;
  transition: 0.2s cubic-bezier(0.75, 0.885, 0.52, 1.275);
}

.filter-modal.active {
  flex-grow: 1;
  margin-right: 1rem;
  padding-right: 0.2rem;
  box-shadow: 5px 2px 4px #d7d7d7;
}
.product-list {
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 5rem;
  gap: 2.5rem;
}

.product-list.active {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

@media (max-width: 768px) {
  .product-list {
    position: relative;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-top: 2rem;
    gap: 1.25rem;
  }

  .product-list.active {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
}

.colors::-webkit-scrollbar {
  width: 0px;
  height: 0px;
}
.buttons::-webkit-scrollbar {
  width: 0px;
  height: 0px;
}
</style>
