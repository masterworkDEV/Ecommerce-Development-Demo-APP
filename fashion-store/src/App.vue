<template>
  <Header v-if="useStore.navState" />
  <div class="app">
    <RouterView v-slot="{ Component }">
      <Transition name="fade">
        <component :is="Component" />
      </Transition>
    </RouterView>
  </div>
  <Footer v-if="useStore.footerState" />
</template>


<script setup>
import { piniaStore } from './stores/store'
import Header from './components/Header/Header.vue'
import Footer from './components/Footer.vue'
const useStore = piniaStore()
</script>


<style>
body {
  width: 100%;
  min-height: 100vh;
  background-color: #f1f1f1;
  z-index: 0;
}
.app {
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: start;
  flex-direction: column;
}
.pages {
  margin-top: 8rem;
}
@media (max-width: 768px) {
  .pages {
    margin-top: 5rem;
  }
}
/* HTML: <div class="loader"></div> */

.loader {
  width: 50px;
  aspect-ratio: 1;
  display: grid;
  border-radius: 50%;
  background: linear-gradient(0deg, rgb(0 0 0/50%) 30%, #0000 0 70%, rgb(0 0 0/100%) 0) 50%/8% 100%,
    linear-gradient(90deg, rgb(0 0 0/25%) 30%, #0000 0 70%, rgb(0 0 0/75%) 0) 50%/100% 8%;
  background-repeat: no-repeat;
  animation: l23 1s infinite steps(12);
}
.loader::before,
.loader::after {
  content: '';
  grid-area: 1/1;
  border-radius: 50%;
  background: inherit;
  opacity: 0.915;
  transform: rotate(30deg);
}
.loader::after {
  opacity: 0.83;
  transform: rotate(60deg);
}
@keyframes l23 {
  100% {
    transform: rotate(1turn);
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease-in-out;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>
