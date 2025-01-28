<template>
  <input
    type="text"
    name="search"
    role="search"
    autofocus="on"
    placeholder="Search"
    v-model="inputValue"
    @change="emit('setChange', inputValue)"
    class="bg-inputBg text-[1rem] w-[30%] max-xl:w-[40%] max-md:w-full p-2 placeholder:pl-1 max-md:placeholder:pl-1"
  />
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