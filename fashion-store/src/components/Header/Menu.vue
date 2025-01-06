<template>
  <div>
    <div
      v-if="props.menuState"
      class="fixed top-0 right-0 left-0 bottom-0 h-full w-full bg-transparentBLK z-0"
    ></div>
    <transition name="slide-fade">
      <div class="menu" :class="props.menuState ? 'active' : 'leave-active'">
        <button @click="emits('closeMenu')" class="absolute top-4 right-4">
          <svg
            class="w-10 h-10 max-md:w-7 max-md:h-7"
            viewBox="0 0 512 512"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            fill="#000000"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <title>cancel</title>
              <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="work-case" fill="#000000" transform="translate(91.520000, 91.520000)">
                  <polygon
                    id="Close"
                    points="328.96 30.2933333 298.666667 1.42108547e-14 164.48 134.4 30.2933333 1.42108547e-14 1.42108547e-14 30.2933333 134.4 164.48 1.42108547e-14 298.666667 30.2933333 328.96 164.48 194.56 298.666667 328.96 328.96 298.666667 194.56 164.48"
                  ></polygon>
                </g>
              </g>
            </g>
          </svg>
        </button>
        <nav class="nav">
          <ul>
            <li>
              <router-link :to="{ name: 'home' }">Home</router-link>
            </li>
            <li>
              <router-link :to="{ name: 'about' }">About</router-link>
            </li>
            <li>
              <router-link :to="{ name: 'contact' }">Contact</router-link>
            </li>
            <li>
              <router-link :to="{ name: 'collections' }">Collections</router-link>
            </li>
          </ul>
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
  height: 70%;
  top: 0;
  transform: translateX(0px);
}
.menu.leave-active {
  transition: all 1s;
  opacity: 0.7;
}
</style>