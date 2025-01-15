<template>
  <transition name="cart-slide-left">
    <div
      v-if="useStore.welcomeNotification"
      class="fixed w-2/4 top-20 right-0 left-[50%] translate-x-[-50%] rounded-2xl bg-blue-800 p-4 z-40 max-sm:w-[80%]"
    >
      <p class="text-white text-center">
        Signed in as <b>{{ useStore.welcomeMessage }}</b>
      </p>
    </div>
  </transition>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { piniaStore } from '@/stores/store'
const useStore = piniaStore()
</script>

<style>
.cart-slide-left-enter-active,
.cart-slide-left-leave-active {
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.cart-slide-left-enter-from,
.cart-slide-left-leave-to {
  left: 80%;
  opacity: 0;
}
</style>