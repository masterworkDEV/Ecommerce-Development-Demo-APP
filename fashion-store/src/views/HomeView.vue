
<template>
  <WelcomeNotification />
  <main class="pages">
    <Hero />
    <ThisWeek />
    <Collections />
    <OurMission />
    <NewDesigns />
  </main>
  <Footer />
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
onMounted(() => {
  sections.value = document.querySelectorAll('section')
  observer.value = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('isIntersecting')
      } else {
        entry.target.classList.remove('isIntersecting')
      }
    })
  })
  sections.value.forEach((section) => {
    if (section) {
      observer.value.observe(section)
    } else {
      observer.value.unobserve(section)
    }
  })

  // cards

  cards.value = document.querySelectorAll('.card-display')
  observer.value = new IntersectionObserver((entries) => {
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
      observer.value.observe(card)
    }
  })
})

computed(() => {})
</script>
<style>
section {
  margin-top: 10rem;
  opacity: 0.2;
  transition: 1s ease-in-out;
}

@media (max-width: 768px) {
  section {
    margin-top: 8.5rem;
  }
}

.isIntersecting {
  opacity: 1;
  transform: translateY(-100px);
}

.card-display {
  scale: 0.2;
  transition: 1s ease-in-out;
}
.cardDisplay {
  scale: 1;
}
</style>