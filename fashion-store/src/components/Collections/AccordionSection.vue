<template>
  <button
    class="accordion w-full flex justify-between items-end mt-7 text-h5 max-md:text-normal font-bold border-dotted border-b"
    @click="emits('toggle')"
  >
    <span> {{ props.title }} </span>
    <svg
      viewBox="0 0 1024 1024"
      class="icon w-8 h-5 max-md:w-5 max-md:h-4 transition-all"
      :class="props.isOpen && 'rotate-[90deg]'"
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
</template>

<script setup>
const emits = defineEmits(['toggle'])
const props = defineProps({
  title: String,
  isOpen: {
    type: Boolean
  }
})
</script>

<style>
</style>