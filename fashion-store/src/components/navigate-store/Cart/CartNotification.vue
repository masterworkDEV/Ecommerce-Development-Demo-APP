<template>
  <div
    class="cart-count top-2 right-2 absolute rounded-full w-2 h-2 bg-red-600"
    v-if="props.cartNotification"
  ></div>
</template>
<script setup>
const props = defineProps({
  cartNotification: {
    type: Number
  }
})
</script>