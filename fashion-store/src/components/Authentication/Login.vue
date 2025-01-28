<template>
  <div class="pages w-full px-14 max-xl:px-10 max-sm:px-7">
    <ul class="flex items-center gap-3">
      <li class="text-sm underline font-primary">
        <a href="/">
          <b>Home</b>
        </a>
      </li>
      >
      <li class="text-sm font-primary">
        <a href="/auth/login">
          <b>Account</b>
        </a>
      </li>
    </ul>

    <div class="mt-14 flex justify-center gap-10">
      <div class="w-2/4 max-sm:w-full">
        <h2 class="text-4xl text-textPrimary font-primary"><b>Login</b></h2>
        <p class="w-full text-otherTextOne font-text mt-2 max-sm:text-sm tracking-wide leading-6">
          Unlock a world of convineience and tailored experiences by logging in today. <br />Your
          journey begins here.
        </p>
        <form class="w-full mt-10 flex flex-col gap-5" @submit.prevent="handleSignIn">
          <input
            v-model="email"
            type="text"
            name="email"
            placeholder="E-mail"
            required
            class="w-full p-3 bg-inputBg text-[1rem] rounded"
          />

          <input
            v-model="password"
            type="password"
            name="password"
            placeholder="password"
            required
            class="w-full p-3 bg-inputBg text-[1rem] rounded"
          />

          <p class="underline text-sm font-text">Forgot your password?</p>
          <div class="details-action mt-5">
            <div
              v-if="isLoading"
              class="fixed w-full h-full bg-transparentBLK right-0 left-0 top-0 bottom-0 z-30"
            ></div>
            <button class="p-3 bg-bgColorSecondary rounded text-white max-sm:w-full">
              <div v-if="isLoading" class="flex justify-center items-center gap-5">
                <div class="loader"></div>
                <span>Signing In</span>
              </div>
              <span v-else>Sign In</span>
            </button>
          </div>
          <p class="text-sm font-text">
            <b>New customer ?</b>
            <router-link :to="{ name: 'sign-up' }" class="underline font-text"
              >Create anaccount</router-link
            >
          </p>
        </form>
      </div>

      <div class="form-image w-full h-[28rem] max-sm:hidden">
        <img
          src="https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          class="h-full w-full border-2 object-cover"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'vue-router'
import { piniaStore } from '@/stores/store'
import { set } from '@vueuse/core'

const useStore = piniaStore()
const router = useRouter()
const email = ref('')
const password = ref('')
const isLoading = ref(false)

onMounted(() => {
  useStore.footerState = !useStore.footerState
})
onUnmounted(() => {
  useStore.footerState = true
})
const handleSignIn = async () => {
  isLoading.value = true
  const auth = await getAuth()
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then((data) => {
      useStore.welcomeMessage = data.user.email
      console.log(useStore.welcomeMessage)
      router.push('/')
    })
    .catch((error) => {
      const errorBlock = {
        invalidEmail: 'auth/invalid-email',
        userNotFound: 'auth/user-not-found',
        wrongPassword: 'auth/invalid-credential'
      }
      console.log(error.code)
    })
    .finally(() => {
      isLoading.value = false
      useStore.welcomeNotification = true
      setTimeout(() => {
        useStore.welcomeNotification = false
      }, 3500)
    })
}
</script>

<style scoped>
/* HTML: <div class="loader"></div> */
.loader {
  width: 25px;
  height: 25px;
  padding: 4px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: #d7d7d7;
  --_m: conic-gradient(#0000 10%, #000), linear-gradient(#000 0 0) content-box;
  -webkit-mask: var(--_m);
  mask: var(--_m);
  -webkit-mask-composite: source-out;
  mask-composite: subtract;
  animation: l3 0.7s infinite linear;
}
@keyframes l3 {
  to {
    transform: rotate(1turn);
  }
}
</style>