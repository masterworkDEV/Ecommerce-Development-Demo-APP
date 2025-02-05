<template>
  <header>
    <StoreNavigation />
    <RouterView v-slot="{ Component, route }">
      <transition :name="route.meta.transition || 'fade'">
        <component :is="Component" />
      </transition>
    </RouterView>
  </header>
</template>

<script setup>
import StoreNavigation from '@/components/navigate-store/StoreNavigation.vue'
import { useRoute } from 'vue-router'
</script >

<style >
.left-enter-active,
.left-leave-active {
  transition: all 0.3s ease;
}
.left-enter-from {
  transform: translateX(-500px);
}
.left-leave-to {
  opacity: 0;
  transform: translateX(-500px);
}

.right-enter-active,
.right-leave-active {
  transition: all 0.3s ease;
}
.right-enter-from,
.right-leave-to {
  transform: translateX(-500px);
  opacity: 0.8;
}
</style>