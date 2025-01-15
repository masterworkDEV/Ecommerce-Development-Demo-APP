
<template>
  <div class="home">
    <WelcomeNotification />

    <main class="pages px-14 max-md:px-5">
      <Hero />
      <ThisWeek />
      <Collections />
      <OurMission />
      <NewDesigns />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import { piniaStore } from '@/stores/store'
import Hero from '@/components/Hero/Hero.vue'
import ThisWeek from '@/components/This-week/ThisWeek.vue'
import Collections from '@/components/Collections.vue'
import NewDesigns from '@/components/NewDesigns.vue'
import OurMission from '@/components/OurMission.vue'
import Footer from '@/components/Footer.vue'
import WelcomeNotification from '@/components/Authentication/WelcomeNotification.vue'
const useStore = piniaStore()
</script>
