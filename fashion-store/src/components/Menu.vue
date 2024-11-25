<template>
  <div v-if="props.menuSate">
    <div class="menu bg-bgColorPrimary w-full h-[70%] fixed top-0 left-0 right-0 z-40 shadow-2xl">
      <button
        @click="emits('closeMenu')"
        class="cancel-button cursor-default absolute right-5 top-2 p-3 rounded-full hover:bg-otherBgFour"
      >
        <svg
          fill="#1e1e1e"
          stroke="#1e1e1e"
          viewBox="0 0 32 32"
          class="hover:fill-[#000] hover:stroke-[#000] transition-all"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <title>times</title>
            <path
              d="M17.062 16l9.37-9.37c0.136-0.136 0.219-0.323 0.219-0.53 0-0.415-0.336-0.751-0.751-0.751-0.208 0-0.395 0.084-0.531 0.22v0l-9.369 9.369-9.37-9.369c-0.135-0.131-0.319-0.212-0.522-0.212-0.414 0-0.75 0.336-0.75 0.75 0 0.203 0.081 0.387 0.212 0.522l9.368 9.369-9.369 9.369c-0.136 0.136-0.22 0.324-0.22 0.531 0 0.415 0.336 0.751 0.751 0.751 0.207 0 0.394-0.084 0.53-0.219v0l9.37-9.37 9.369 9.37c0.136 0.136 0.324 0.22 0.531 0.22 0.415 0 0.751-0.336 0.751-0.751 0-0.207-0.084-0.395-0.22-0.531v0z"
            ></path>
          </g>
        </svg>
      </button>
      <!-- router links -->
      <header class="flex justify-start gap-48">
        <nav>
          <ul>
            <li>
              <router-link class="text-white" :to="{ name: 'home' }"> Home </router-link>
            </li>
            <li>
              <router-link class="text-white" :to="{ name: 'about' }"> About</router-link>
            </li>
            <li>
              <router-link class="text-white" :to="{ name: 'collections' }">
                Collections
              </router-link>
            </li>
            <li>
              <router-link class="text-white" :to="{ name: 'deals' }"> Deals </router-link>
            </li>
          </ul>
        </nav>
        <nav>
          <ul>
            <li>
              <router-link class="text-white" :to="{ name: 'settings' }">Settings </router-link>
            </li>
            <li>
              <router-link class="text-white" :to="{ name: 'cart' }"> Cart </router-link>
            </li>
            <li>
              <router-link class="text-white" :to="{ name: 'favourite' }"> Favourite </router-link>
            </li>
            <li>
              <router-link class="text-white" :to="{ name: 'contact' }"> Contact</router-link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  menuSate: {
    type: null,
    required: true
  }
})

const emits = defineEmits(['closeMenu'])
</script>

<style scoped>
nav ul {
  display: flex;
  flex-direction: column;
  text-align: start;
  margin: 60px 60px;
  border-radius: 0.1rem;
  font-weight: 700;
  transition: all 0.14s ease-in-out;
  cursor: default;
}
nav ul > li {
  padding: 30px;
}
nav > ul > li > a {
  padding: 15px;
}
nav ul li > a:hover {
  background: #d7d7d7;
  color: #1e1e1e;
}
</style>