<template>
  <div>
    <div
      v-if="props.menuState"
      class="fixed top-0 right-0 left-0 bottom-0 h-full w-full bg-transparentBLK z-0"
    ></div>
    <transition name="slide-fade">
      <div class="menu" :class="props.menuState ? 'active' : 'leave-active'">
        <header class="flex justify-between border-b-2 border-primary p-3 px-5 pt-5">
          <div class="flex items-center gap-3">
            <button @click="emits('closeMenu')" class="border border-black">
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
            <h2 class="logo text-h4 max-md:text-normal">
              <b>XIV</b>
            </h2>
          </div>
          <nav class="nav-icons flex items-center gap-5">
            <router-link :to="{ name: 'collections' }" @click="emits('closeMenu')">
              <svg
                viewBox="0 0 24 24"
                class="w-10 h-10 max-md:w-7 max-md:h-7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M16.6725 16.6412L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
                    stroke="#000000"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </g>
              </svg>
            </router-link>
            <router-link :to="{ name: 'cart' }" @click="emits('closeMenu')">
              <svg
                viewBox="0 0 24 24"
                class="fill-black w-10 h-10 max-md:w-7 max-md:h-7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.4179 3.25077C8.69861 2.65912 9.30146 2.25 9.99986 2.25H13.9999C14.6983 2.25 15.3011 2.65912 15.5818 3.25077C16.2654 3.25574 16.7981 3.28712 17.2737 3.47298C17.8418 3.69505 18.3361 4.07255 18.6998 4.5623C19.0667 5.05639 19.2389 5.68968 19.476 6.56133C19.4882 6.60604 19.5005 6.65137 19.513 6.69735L20.1039 8.86428C20.4914 9.06271 20.8304 9.32993 21.1133 9.6922C21.7353 10.4888 21.8454 11.4377 21.7348 12.5261C21.6274 13.5822 21.2949 14.9122 20.8787 16.577L20.8523 16.6824C20.5891 17.7352 20.3755 18.59 20.1213 19.2572C19.8563 19.9527 19.5199 20.5227 18.9653 20.9558C18.4107 21.3888 17.7761 21.5769 17.0371 21.6653C16.3282 21.75 15.4472 21.75 14.362 21.75H9.63771C8.55255 21.75 7.67147 21.75 6.96266 21.6653C6.22365 21.5769 5.58901 21.3888 5.03439 20.9558C4.47977 20.5227 4.14337 19.9527 3.8784 19.2572C3.62426 18.5901 3.41058 17.7353 3.1474 16.6825L3.121 16.5769C2.70479 14.9121 2.37229 13.5822 2.26492 12.5261C2.15427 11.4377 2.26442 10.4888 2.88642 9.6922C3.16927 9.32993 3.50834 9.06271 3.89582 8.86428L4.48667 6.69735C4.49921 6.65137 4.51154 6.60604 4.5237 6.56134C4.76077 5.68968 4.93302 5.05639 5.29995 4.5623C5.66367 4.07255 6.15788 3.69505 6.72607 3.47298C7.20162 3.28712 7.73436 3.25574 8.4179 3.25077ZM8.41931 4.75219C7.75748 4.75888 7.4919 4.78416 7.2721 4.87007C6.96615 4.98964 6.70003 5.19291 6.50419 5.45662C6.32808 5.69376 6.22474 6.02508 5.93384 7.09195L5.58026 8.38869C6.61806 8.24996 7.95786 8.24998 9.62247 8.25H14.3772C16.0419 8.24998 17.3817 8.24996 18.4195 8.38869L18.0659 7.09194C17.775 6.02508 17.6716 5.69377 17.4955 5.45663C17.2997 5.19291 17.0336 4.98964 16.7276 4.87007C16.5078 4.78416 16.2422 4.75888 15.5804 4.75219C15.2991 5.34225 14.6971 5.75 13.9999 5.75H9.99986C9.30262 5.75 8.70062 5.34225 8.41931 4.75219ZM9.99986 3.75C9.86179 3.75 9.74986 3.86193 9.74986 4C9.74986 4.13807 9.86179 4.25 9.99986 4.25H13.9999C14.1379 4.25 14.2499 4.13807 14.2499 4C14.2499 3.86193 14.1379 3.75 13.9999 3.75H9.99986ZM5.69971 9.88649C4.78854 10.0183 4.34756 10.2582 4.06873 10.6153C3.78989 10.9725 3.66411 11.4584 3.75723 12.3744C3.85233 13.3099 4.15656 14.5345 4.59127 16.2733C4.86853 17.3824 5.06163 18.1496 5.28013 18.7231C5.49144 19.2778 5.69835 19.5711 5.95751 19.7735C6.21667 19.9758 6.5514 20.1054 7.14076 20.1759C7.75015 20.2488 8.54133 20.25 9.68452 20.25H14.3152C15.4584 20.25 16.2496 20.2488 16.859 20.1759C17.4483 20.1054 17.783 19.9758 18.0422 19.7735C18.3014 19.5711 18.5083 19.2778 18.7196 18.7231C18.9381 18.1496 19.1312 17.3824 19.4084 16.2733C19.8432 14.5345 20.1474 13.3099 20.2425 12.3744C20.3356 11.4584 20.2098 10.9725 19.931 10.6153C19.6522 10.2582 19.2112 10.0183 18.3 9.88649C17.3694 9.75187 16.1075 9.75 14.3152 9.75H9.68452C7.89217 9.75 6.63034 9.75187 5.69971 9.88649Z"
                  ></path>
                </g>
              </svg>
            </router-link>
          </nav>
        </header>
        <nav class="nav-links max-md:mt-10 mx-5">
          <ul>
            <li>
              <router-link
                :to="{ name: 'home' }"
                @click="emits('closeMenu')"
                class="font-text hover:underline transition-all"
                >Home</router-link
              >
            </li>
            <li>
              <router-link
                :to="{ name: 'about' }"
                @click="emits('closeMenu')"
                class="font-text hover:underline transition-all"
                >About</router-link
              >
            </li>
            <li>
              <router-link
                class="font-text hover:underline transition-all"
                :to="{ name: 'contact' }"
                @click="emits('closeMenu')"
                >Contact</router-link
              >
            </li>
            <li>
              <router-link
                :to="{ name: 'collections' }"
                class="collections font-text hover:underline transition-all"
                @click="emits('closeMenu')"
              >
                Collections
              </router-link>
            </li>
          </ul>
        </nav>
        <div class="mt-20 mx-5">
          <router-link :to="{ name: 'login' }" @click="emits('closeMenu')">
            <button
              :to="{ name: 'login' }"
              class="w-1/4 max-md:w-[40%] p-3 rounded-md bg-black text-white text-sm font-text"
            >
              Login
            </button>
          </router-link>
          <p class="mt-5 flex items-center text-normal font-text text-gray-500">
            No account yet?
            <router-link
              to="/auth/sign-up"
              class="text-sm text-textPrimary underline"
              @click="emits('closeMenu')"
              >Create account</router-link
            >
          </p>
          <div class="mt-10 pt-5 flex justify-between items-center border-t border-primary">
            <form>
              <select name="locations" class="p-3 bg-[#ddd] rounded-md">
                <option value="CA">CA</option>
                <option value="NY">NY</option>
                <option value="NG">NG</option>
              </select>
            </form>
            <form>
              <select name="languages" class="p-3 bg-[#ddd] rounded-md">
                <option value="EN">EN</option>
                <option value="SP">SP</option>
                <option value="FR">FR</option>
              </select>
            </form>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import Logo from '../Logo.vue'
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
  height: 20%;
  background: #f1f1f1;
  box-shadow: 0px 2px 3px #9999;
  top: -20%;
  opacity: 0;
  left: 0;
  right: 0;
  z-index: 9;
  transform: translateX(-5000px);
  transition: height 0.2s cubic-bezier(1, 0.92, 0.65, 1);
}

.menu.active {
  height: 90%;
  top: 0;
  opacity: 1;
  transform: translateX(0px);
}
.menu.leave-active {
  transition: all 1s;
  opacity: 0.7;
}

@media (max-width: 768px) {
  .menu.active {
    height: 80%;
  }
}

.nav-links > ul > li {
  padding-top: 30px;
}

.collections:hover > .collections-child {
  display: block;
}
</style>