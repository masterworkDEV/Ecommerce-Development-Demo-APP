<template>
  <transition name="cart-notification">
    <div
      v-if="useStore.cartNotification & !useStore.existedInCart"
      class="fixed w-2/4 top-20 right-0 left-[50%] translate-x-[-50%] rounded-2xl cart-notification bg-black p-4 z-40 max-sm:w-3/4"
    >
      <p class="text-white text-center">
        <b>{{ useStore.productTitle }}</b> has been added to cart!
      </p>
    </div>
  </transition>
</template>
<script setup>
import { piniaStore } from '@/stores/store'
const useStore = piniaStore()
</script>
<style >
.cart-notification-enter-active,
.cart-notification-leave-active {
  transition: all 0.3s ease;
}
.cart-notification-enter-from,
.cart-notification-leave-to {
  top: -10%;
  opacity: 0;
}
</style>