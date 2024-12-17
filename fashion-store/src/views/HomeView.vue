<script setup>
import Hero from '@/components/Hero.vue'
import ThisWeek from '@/components/ThisWeek.vue'
import Collections from '@/components/Collections.vue'
import NewDesigns from '@/components/NewDesigns.vue'
import OurMission from '@/components/OurMission.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <div class="pages">
    <main class="px-14 max-md:px-7">
      <Hero />
      <this-week />
      <Collections />
      <OurMission />
      <NewDesigns />
    </main>

    <Footer />
  </div>
</template>
<style>
</style>
