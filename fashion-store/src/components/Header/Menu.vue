<template>
  <div v-if="props.menuSate">
    <div class="over-lay fixed w-full h-full bg-[rgba(255,255,255,0.5)] z-10"></div>

    <div
      class="menu bg-bgColorPrimary w-full h-[70%] fixed top-0 left-0 right-0 z-40 max-xl:h-[40%] shadow-2xl max-md:h-[50%] max-sm:h-[60%]"
    >
      <button
        @click="emits('closeMenu')"
        class="cursor-default absolute right-5 top-2 w-12 h-12 flex justify-center items-center max-sm:w-10 max-sm:h-10 bg-inputBg hover:bg-[#d7d7d7]"
      >
        <svg
          class="w-2/4 h-2/4 fill-gray-700 stroke-gray-400 hover:stroke-gray-900 hover:fill-gray-950 transition-all"
          fill="none"
          stroke="none"
          viewBox="0 0 32 32"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="1"></g>
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
      <header class="grid grid-cols-5 text-start max-md:grid-cols-3">
        <nav>
          <ul>
            <li>
              <router-link
                @click="emits('closeMenu')"
                class="text-textPrimary text-sm max-lg:text-tabletText hover:text-black transition-all font-primary"
                :to="{ name: 'home' }"
              >
                Home
              </router-link>
            </li>
            <li>
              <router-link
                @click="emits('closeMenu')"
                class="text-textPrimary text-sm max-lg:text-tabletText hover:text-black transition-all font-primary"
                :to="{ name: 'about' }"
              >
                About</router-link
              >
            </li>
            <li>
              <router-link
                @click="emits('closeMenu')"
                class="text-textPrimary text-sm max-lg:text-tabletText hover:text-black transition-all font-primary"
                :to="{ name: 'collections' }"
              >
                Collections
              </router-link>
            </li>
            <li>
              <router-link
                @click="emits('closeMenu')"
                class="text-textPrimary text-sm max-lg:text-tabletText hover:text-black transition-all font-primary"
                :to="{ name: 'deals' }"
              >
                Deals
              </router-link>
            </li>
          </ul>
        </nav>
        <nav>
          <ul>
            <li>
              <router-link
                @click="emits('closeMenu')"
                class="text-textPrimary text-sm max-lg:text-tabletText hover:text-black transition-all font-primary"
                :to="{ name: 'settings' }"
                >Settings
              </router-link>
            </li>
            <li>
              <router-link
                @click="emits('closeMenu')"
                class="text-textPrimary text-sm max-lg:text-tabletText hover:text-black transition-all font-primary"
                :to="{ name: 'cart' }"
              >
                Cart
              </router-link>
            </li>
            <li>
              <router-link
                @click="emits('closeMenu')"
                class="text-textPrimary text-sm max-lg:text-tabletText hover:text-black transition-all font-primary"
                :to="{ name: 'favourite' }"
              >
                Favourite
              </router-link>
            </li>
            <li>
              <router-link
                @click="emits('closeMenu')"
                class="text-textPrimary text-sm max-lg:text-tabletText hover:text-black transition-all font-primary"
                :to="{ name: 'contact' }"
              >
                Contact</router-link
              >
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
  margin: 60px 40px auto;
  border-radius: 0.1rem;
  transition: all 0.025s ease;
  cursor: default;
}
nav ul > li {
  padding: 25px;
}

nav > ul > li > a {
  padding: 15px;
  font-weight: 600;

  &:hover {
    background: #d7d7d7;
  }
}
</style>