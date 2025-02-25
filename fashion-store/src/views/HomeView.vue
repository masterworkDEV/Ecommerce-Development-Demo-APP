
<template>
  <WelcomeNotification />
  <main class="home pages">
    <Hero />
    <ThisWeek />
    <Collections />
    <OurMission />
    <NewDesigns />
  </main>
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
import { computed, onBeforeMount, onMounted, ref } from 'vue'

// Intersection Observer
const sections = ref([])
const cards = ref([])
const observer = ref(null)
const cardObserver = ref(null)
onMounted(() => {
  sections.value = document.querySelectorAll('section')
  observer.value = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('isIntersecting')
      }
    })
  })
  sections.value.forEach((section) => {
    if (section) {
      observer.value.observe(section)
    }
  })

  // cards

  cards.value = document.querySelectorAll('.card-display')
  cardObserver.value = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('cardDisplay')
      } else {
        entry.target.classList.remove('cardDisplay')
      }
    })
  })
  cards.value.forEach((card) => {
    if (card) {
      cardObserver.value.observe(card)
    }
  })})
</script>
<style>
section {
  margin-top: 10rem;
  opacity: 0;
  transition: 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

@media (max-width: 768px) {
  section {
    margin-top: 8.5rem;
  }
}

.isIntersecting {
  opacity: 1;
  transform: translateY(-60px);
}

.card-display {
  scale: 0.5;
  transform: translateY(40px);
  transition: 0.3s ease-in-out;
}
.cardDisplay {
  transform: translateY(0px);
  scale: 1;
}
</style>