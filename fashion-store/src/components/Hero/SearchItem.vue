<template>
  <form class="search-container mt-3 relative" @submit.prevent="emit('setSubmit')">
    <input
      type="text"
      name="search"
      autocorrect="on"
      role="search"
      autofocus="on"
      placeholder="Search"
      v-model="inputValue"
      @change="emit('setChange', inputValue)"
      class="input-field bg-inputBg px-3 placeholder:pl-1 max-md:placeholder:pl-1 text-[1rem] w-[30%] max-xl:w-[40%] h-[50px] rounded max-md:w-full"
    />
  </form>
</template>

<script setup>
import { ref } from 'vue'
const emit = defineEmits(['setChange', 'setSubmit'])

const props = defineProps({
  searchValue: String
})
const inputValue = ref(props.searchValue)
</script>

<style>
</style>