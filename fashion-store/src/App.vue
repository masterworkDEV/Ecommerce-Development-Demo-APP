<template>
  <div>
    <Nav v-if="useStore.navState" />
    <RouterView />
  </div>
</template>


<script setup>
import { onMounted, ref } from 'vue'
import Nav from './components/Nav.vue'
import Login from './components/Login.vue'
import { piniaStore } from './stores/store'
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

.movie--isloading {
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 15px;
}

.movie--isloading .loading-image {
  background-image: -webkit-linear-gradient(left, #ececec 0px, #f4f4f4 40px, #ececec 80px);
  background-image: -o-linear-gradient(left, #ececec 0px, #f4f4f4 40px, #ececec 80px);
  background-image: linear-gradient(90deg, #ececec 0px, #f4f4f4 40px, #ececec 80px);
  background-size: 200% 100%;
  -webkit-animation: shine-loading-image 1.2s infinite ease-out;
  animation: shine-loading-image 1.2s infinite ease-out;
}

.movie--isloading .loading-content {
  padding: 5px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}

.movie--isloading .loading-content .loading-text-container {
  -ms-flex-preferred-size: 100%;
  flex-basis: 100%;
}

.movie--isloading .loading-content .loading-main-text {
  height: 10px;
  margin-bottom: 10px;
  background: #ececec;
  background-image: -webkit-linear-gradient(left, #ececec 0px, #ddd 40px, #ececec 80px);
  background-image: -o-linear-gradient(left, #ececec 0px, #ddd 40px, #ececec 80px);
  background-image: linear-gradient(90deg, #ececec 0px, #ddd 40px, #ececec 80px);
  background-size: 200% 100%;
  border-radius: 10px;
  -webkit-animation: shine-loading-container-items 1.2s infinite ease-out;
  animation: shine-loading-container-items 1.2s infinite ease-out;
}

.movie--isloading .loading-content .loading-sub-text {
  height: 10px;
  background: #ececec;
  background-image: -webkit-linear-gradient(left, #ececec 0px, #ddd 40px, #ececec 80px);
  background-image: -o-linear-gradient(left, #ececec 0px, #ddd 40px, #ececec 80px);
  background-image: linear-gradient(90deg, #ececec 0px, #ddd 40px, #ececec 80px);
  background-size: 200% 100%;
  border-radius: 10px;
  -webkit-animation: shine-loading-container-items 1.2s infinite ease-out;
  animation: shine-loading-container-items 1.2s infinite ease-out;
}

.movie--isloading .loading-content .loading-btn {
  width: 60px;
  height: 25px;
  background: #ececec;
  background-image: -webkit-linear-gradient(left, #ececec 0px, #ddd 40px, #ececec 80px);
  background-image: -o-linear-gradient(left, #ececec 0px, #ddd 40px, #ececec 80px);
  background-image: linear-gradient(90deg, #ececec 0px, #ddd 40px, #ececec 80px);
  background-size: 200% 100%;
  border-radius: 3px;
  -webkit-animation: shine-loading-container-items 1.2s infinite ease-out;
  animation: shine-loading-container-items 1.2s infinite ease-out;
}

@-webkit-keyframes shine-loading-image {
  to {
    background-position: -100%;
  }
}

@keyframes shine-loading-image {
  to {
    background-position-x: -100%;
  }
}

@-webkit-keyframes shine-loading-container-items {
  to {
    background-position-x: -100%;
  }
}

@keyframes shine-loading-container-items {
  to {
    background-position-x: -100%;
  }
}
</style>
