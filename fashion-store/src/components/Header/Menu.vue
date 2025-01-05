<template>
  <div>
    <div
      v-if="props.menuState"
      class="fixed top-0 right-0 left-0 bottom-0 h-full w-full bg-transparentBLK z-0"
    ></div>
    <transition name="slide-fade">
      <div class="menu" :class="props.menuState ? 'active' : 'leave-active'">
        <button @click="emits('closeMenu')" class="text-white">close</button>
        <nav class="nav">
          <router-link :to="{ name: 'home' }">Home</router-link>
          <router-link :to="{ name: 'about' }">About</router-link>
          <router-link :to="{ name: 'contact' }">Contact</router-link>
          <router-link :to="{ name: 'collections' }">Collections</router-link>
        </nav>
      </div>
    </transition>
  </div>
</template>

<script setup>
const emits = defineEmits(['closeMenu'])
const props = defineProps({
  menuState: {
    type: Boolean
  }
})
</script>

<style >
.menu {
  position: fixed;
  width: 100%;
  height: 0%;
  background: #f1f1f1;
  box-shadow: 0px 2px 3px #fafafa;
  top: -20%;
  left: 0;
  right: 0;
  z-index: 9;
  transform: translateX(-5000px);

  transition: height 0.22s cubic-bezier(1, 0.92, 0.65, 1);
}

.nav > a {
  color: #000;
}

.menu.active {
  height: 65%;
  top: 0;
  transform: translateX(0px);
}
.menu.leave-active {
  transition: all 1s;
  opacity: 0.7;
}
</style>