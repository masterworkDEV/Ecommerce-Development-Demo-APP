<template>
  <RouterView v-slot="{ Component, route }" >
    <transition :name="route.meta.transition">
      <component :is="Component" />
    </transition>
  </RouterView>
</template>

<script setup>
</script>

<style>
</style>