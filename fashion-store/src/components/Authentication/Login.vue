<template>
  <div class="mt-5 w-full px-14 max-xl:px-10 max-sm:px-7">
    <ul class="flex items-center gap-3">
      <li class="text-sm underline">
        <a href="/">
          <b>Home</b>
        </a>
      </li>
      >
      <li class="text-sm">
        <a href="/auth/login">
          <b>Account</b>
        </a>
      </li>
    </ul>
    <div class="mt-14 flex justify-center gap-10">
      <div class="w-2/4 max-sm:w-full">
        <h2 class="text-4xl text-textPrimary font-primary"><b>Login</b></h2>
        <form class="w-full mt-10 flex flex-col gap-5" @submit.prevent="handleSignIn">
          <input
            v-model="email"
            type="text"
            name="email"
            placeholder="E-mail"
            class="w-full p-3 bg-inputBg text-[1rem] rounded"
          />
          <p v-if="emailError" class="text-red-500 text-sm">{{ emailError }}</p>

          <input
            v-model="password"
            type="password"
            name="password"
            placeholder="password"
            class="w-full p-3 bg-inputBg text-[1rem] rounded"
          />
          <p v-if="passwordError" class="text-red-500 text-sm">{{ passwordError }}</p>

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
            <b>New customer ? </b>
            <a href="/auth/sign-up">Create and account</a>
          </p>
        </form>
      </div>

      <div class="form-image w-full max-sm:hidden">
        <img
          src="https://img.freepik.com/premium-photo/woman-s-clothing-hanger-modern-shop-boutique_267395-1243.jpg?w=1380"
          class="h-full w-full border-2 object-cover"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useRouter, useRoute } from 'vue-router'
import { piniaStore } from '@/stores/store'

const useStore = piniaStore()
const router = useRouter()
const route = useRoute()
const email = ref('')
const password = ref('')
const isLoading = ref(false)
const emailError = ref(null)
const passwordError = ref(null)

onMounted(() => {
  useStore.footerState = !useStore.footerState
  useStore.navState = !useStore.navState
})
onUnmounted(() => {
  useStore.footerState = true
  useStore.navState = true
})

const validateForm = () => {
  let isValid = true
  emailError.value = null
  passwordError.value = null

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email.value)) {
    emailError.value = 'Email address is required.'
    isValid = false
  }

  if (!password.value.trim()) {
    passwordError.value = 'Password is required.'
    isValid = false
  }

  return isValid
}

const handleSignIn = async () => {
  if (!validateForm()) {
    return // Stop if validation fails
  }

  isLoading.value = true
  const auth = await getAuth()
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then((data) => {
      useStore.welcomeMessage = data.user.email
      router.push(route.query.redirect || '/')
    })
    .catch((error) => {
      const errorBlock = {
        'auth/invalid-email': 'Invalid email address.',
        'auth/user-not-found': 'User not found. Please check your email.',
        'auth/invalid-credential': 'Incorrect password. Please try again.',
        'auth/too-many-requests': 'Too many attempts. Please try again later.',
        'auth/user-disabled': 'This account has been disabled.'
      }

      if (error.code === 'auth/invalid-email' || error.code === 'auth/user-not-found') {
        emailError.value = errorBlock[error.code]
      } else if (error.code === 'auth/invalid-credential') {
        passwordError.value = errorBlock[error.code]
      } else {
        console.error(error.code)
      }
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
  animation: l3 0.5s infinite linear;
}
@keyframes l3 {
  to {
    transform: rotate(1turn);
  }
}
</style>