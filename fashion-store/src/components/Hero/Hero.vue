<template>
  <div class="mx-14 max-md:mx-5">
    <ul>
      <li class="max-xl:text-sm text-textPrimary font-text max-sm:text-small">
        <b>MEN</b>
      </li>
      <li class="max-xl:text-sm text-textPrimary font-text max-sm:text-small">
        <b> WOMEN </b>
      </li>
      <li class="max-xl:text-sm text-textPrimary font-text max-sm:text-small">
        <b> KIDS </b>
      </li>
    </ul>
    <SearchItem :search-value="searchValue" @setChange="updateSearchValue" />
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
