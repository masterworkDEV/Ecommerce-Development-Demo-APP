<template>
  <transition name="cart-notification">
    <div
      v-if="useStore.existedInCart"
      class="fixed w-2/4 top-20 right-0 left-[50%] translate-x-[-50%] rounded-2xl cart-notification bg-black p-4 z-40 max-sm:w-3/4"
    >
      <p class="text-red-600 text-center">
        <b class="text-white">{{ useStore.productTitle }}</b> is already in cart!
      </p>
    </div>
  </transition>
</template>
<script setup>
import { piniaStore } from '@/stores/store'
const useStore = piniaStore()
</script>