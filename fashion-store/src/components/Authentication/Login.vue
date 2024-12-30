<template>
  <div class="pages w-full px-14 max-sm:px-7">
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
          <div class="details">
            <input
              v-model="email"
              type="text"
              name="email"
              placeholder="E-mail"
              class="w-full p-3 bg-inputBg text-[1rem] rounded"
            />
          </div>
          <div class="details">
            <input
              v-model="password"
              type="password"
              name="password"
              placeholder="password"
              class="w-full p-3 bg-inputBg text-[1rem] rounded"
            />
          </div>
          <p class="underline text-sm font-text">Forgot your password?</p>
          <div class="details-action mt-5">
            <button class="p-3 bg-bgColorSecondary rounded text-white max-sm:w-full">
              {{ isLoading ? 'Loading...' : 'Sign In' }}
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
import { ref } from 'vue'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'vue-router'

const router = useRouter()
const email = ref('')
const password = ref('')
const isLoading = ref(false)

const handleSignIn = async () => {
  isLoading.value = true
  const auth = await getAuth()
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then((data) => {
      isLoading.value = false
      router.push('/')
      alert(`Welcome back ${data.user.email}`)
    })
    .catch((error) => {
      isLoading.value = false
      const errorBlock = {
        invalidEmail: 'auth/invalid-email',
        userNotFound: 'auth/user-not-found',
        wrongPassword: 'auth/invalid-credential'
      }
      console.log(error.code)
    })
}
</script>

<style scoped>
</style>