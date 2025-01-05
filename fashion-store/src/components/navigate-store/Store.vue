<template>
  <header>
    <StoreNavigation />
    <RouterView v-slot="{ Component, route }">
      <transition :name="route.meta.transition">
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
  transition: all 0.55s ease;
}
.left-enter-from,
.left-leave-to {
  transform: translateX(-500px);
  opacity: 0;
}

.right-enter-active,
.right-leave-active {
  transition: all 0.5s ease;
}
.right-enter-from,
.right-leave-to {
  transform: translateX(-500px);
  opacity: 0;
}
</style>