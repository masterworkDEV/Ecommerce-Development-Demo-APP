<template>
  <div class="mx-14 max-xl:mx-10 max-md:mx-5">
    <ul>
      <li
        class="text-sm mt-2 mb-3 text-textPrimary font-text 2 uppercase max-sm:text-small max-sm:mb-2"
        v-for="category in categories"
        :key="category"
      >
        <b>
          <router-link :to="{ name: 'category', params: { categoryType: category } }">
            {{ category }}
          </router-link>
        </b>
      </li>
    </ul>
    <form @submit.prevent="handlSubmit">
      <SearchItem :search-value="searchValue" @setChange="updateSearchValue" />
    </form>
    <NewCollection :products="products" :search-value="searchValue" />
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { piniaStore } from '@/stores/store'
import SearchItem from './SearchItem.vue'
import NewCollection from './NewCollection.vue'

const useStore = piniaStore()
const searchValue = ref('')
const products = computed(() =>
  useStore.products
    .slice(3, 5)
    .filter((item) => item.title.toLowerCase().includes(searchValue.value.toLowerCase()))
)

const clearInput = () => {
  searchValue.value = ''
}
const updateSearchValue = (value) => {
  searchValue.value = value
}

const categories = ref(['men', 'women', 'jewelery'])
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
