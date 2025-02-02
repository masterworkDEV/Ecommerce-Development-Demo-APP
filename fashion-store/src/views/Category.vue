<template>
  <p v-if="isLoading">Loading please wait</p>
  <p v-else-if="error">{{ error }}</p>
  <pre v-else>{{ categoryResult }}</pre>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'

const route = useRoute()
const categoryResult = ref([])
const isLoading = ref(false)
const error = ref(null)

onMounted(() => {
  isLoading.value = true
  const asyncFetch = async () => {
    try {
      const res = await fetch(
        `https://fakestoreapi.com/products/category/${route.params.categoryType}`
      )
      if (!res.ok) throw Error('Error there is no product for this category')
      const result = await res.json()
      console.log(result)
      categoryResult.value = result
    } catch (err) {
      error.value = err.message
      console.log(err.stack)
    } finally {
      isLoading.value = false
    }
  }

  ;(async () => asyncFetch())()
})
</script>

<style>
</style>