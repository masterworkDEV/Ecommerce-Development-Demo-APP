<template>
  <RouterView v-slot="{ Component }">
    <Transition name="slide">
      <component :is="Component" />
    </Transition>
  </RouterView>
</template>
      

<script setup>
</script>

<style>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s ease;
}
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
