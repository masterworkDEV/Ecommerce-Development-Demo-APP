<template>
  <form class="search-container mt-3 relative">
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
      class="input-field bg-inputBg p-3 placeholder:pl-80 text-[1rem] w-[30%] max-xl:w-[40%] h-[50px] rounded max-md:w-full"
    />
    <svg
      class="icon absolute w-6 h-6 left-4 top-[50%] translate-y-[-50%] stroke-[#1e1e1e]"
      viewBox="0 0 24 24"
      fill="none"
      stroke="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <path
          d="M20 20L15.8033 15.8033M18 10.5C18 6.35786 14.6421 3 10.5 3C6.35786 3 3 6.35786 3 10.5C3 14.6421 6.35786 18 10.5 18C14.6421 18 18 14.6421 18 10.5Z"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </g>
    </svg>
  </form>
</template>

<script setup>
import { ref } from 'vue'

const search = ref('')

// const props = defineProps({
//   search: ''
// })
</script>

<style>
</style>