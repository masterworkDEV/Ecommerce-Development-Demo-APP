<script setup>
import { onMounted, ref } from 'vue'
import Nav from './components/Nav.vue'
import Login from './components/Login.vue'
import { piniaStore } from './stores/store'

const useStore = piniaStore()
</script>

<template>
  <div>
    <Nav v-if="useStore.navState" />
    <RouterView />
  </div>
</template>

<style>
body {
  background: url(../src//assets/images/body.png);
  width: 100vw;
  height: 100vh;
  z-index: 0;
}
.pages {
  margin-top: 8rem;
}
body {
  font-family: 'Geostar Fill', serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  letter-spacing: 1.5px;
  line-height: 1.5;
  color: #1e1e1e;
}
section {
  margin-top: 10rem;
}

@media (max-width: 768px) {
  .pages {
    margin-top: 5rem;
  }
  section {
    margin-top: 6rem;
  }
}
</style>
