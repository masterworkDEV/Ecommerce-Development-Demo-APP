<template>
  <ul>
    <li class="max-xl:text-sm text-textPrimary">MEN</li>
    <li class="max-xl:text-sm text-textPrimary">WOMEN</li>
    <li class="max-xl:text-sm text-textPrimary">KIDS</li>
  </ul>
  <SearchItem
    :search-value="parentInputValue"
    @setChange="updateParentInputValue"
    @setSubmit="updateSubmit"
  />
  <NewCollection :products="products" :search-value="parentInputValue" />
</template>

<script setup>
import { computed, ref } from 'vue'
import { piniaStore } from '@/stores/store'
import SearchItem from './SearchItem.vue'
import NewCollection from './NewCollection.vue'

const useStore = piniaStore()
const parentInputValue = ref('')
const products = computed(() =>
  useStore.products
    .slice(3, 5)
    .filter((item) => item.title.toLowerCase().includes(parentInputValue.value.toLowerCase()))
)

const clearInput = () => {
  parentInputValue.value = ''
}
const updateParentInputValue = (value) => {
  parentInputValue.value = value
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
