<template>
  <transition name="cart-slide-left">
    <div
      v-if="useStore.cartNotification & !useStore.existedInCart"
      class="fixed w-2/4 top-20 right-0 left-[50%] translate-x-[-50%] rounded-2xl cart-notification bg-[#f1f1f1] border border-green-500 p-4 z-40 max-sm:w-3/4"
    >
      <p class="text-center text-green-600">
        <b class="text-green-600">{{ useStore.productTitle }}</b> has been added to cart!
      </p>
    </div>
  </transition>
</template>
<script setup>
import { piniaStore } from '@/stores/store'
const useStore = piniaStore()
</script>
<style >
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