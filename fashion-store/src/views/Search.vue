<template >
  <main class="pages">
    <h1 class="font-text text-h3 max-xl:text-h4 max-md:text-h5 text-center">Search Products</h1>
    <form @submit.prevent="" class="px-14 max-md:px-5">
      <SearchItem class="w-full" />
    </form>
  </main>
</template>

<script setup>
import SearchItem from '@/components/Hero/SearchItem.vue'
</script>

<style>
</style>