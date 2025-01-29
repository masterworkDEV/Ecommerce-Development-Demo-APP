<template>
  <main class="pt-14 px-14 max-xl:px-10 max-md:px-5">
    <CheckOutProgress />
    <RouterView v-slot="{ Component, route }">
      <transition :name="route.meta.transition">
        <component :is="Component" />
      </transition>
    </RouterView>
  </main>
</template>

<script setup>
import { useRoute } from 'vue-router'
import CheckOutProgress from './CheckOutProgress.vue'
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
</style>