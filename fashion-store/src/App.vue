<template>
  <div>
    <Header v-if="useStore.navState" />
    <VerifiedUser v-if="useStore.verifiedUser" />
    <GuestUser v-else />
  </div>
</template>


<script setup>
import { piniaStore } from './stores/store'
import Header from './components/Header/Header.vue'
import VerifiedUser from './components/UserDashboard.vue'
import GuestUser from './components/GuestUser.vue'

const useStore = piniaStore()
</script>


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
