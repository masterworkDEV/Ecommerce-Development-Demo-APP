
<template>
  <div class="pages px-14 max-md:px-7">
    <Hero />
    <ThisWeek />
    <Collections />
    <OurMission />
    <NewDesigns />
    <Footer />
  </div>
</template>

<script setup>
import Hero from '@/components/Hero/Hero.vue'
import ThisWeek from '@/components/This-week/ThisWeek.vue'
import Collections from '@/components/Collections.vue'
import NewDesigns from '@/components/NewDesigns.vue'
import OurMission from '@/components/OurMission.vue'
import Footer from '@/components/Footer.vue'
</script>
