<template>
  <section class="pages w-full px-14 max-sm:px-7">
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
        <h2 class="text-4xl text-textPrimary font-primary"><b>Sign Up</b></h2>
        <p class="w-full text-otherTextOne font-text mt-2 max-sm:text-sm tracking-wide leading-6">
          Unlock a world of convineience and tailored experiences by logging in today. <br />Your
          journey begins here.
        </p>
        <form class="w-full mt-10 flex flex-col gap-5" @submit.prevent="handleSubmit">
          <div class="details">
            <input
              v-model="email"
              role="textbox"
              type="text"
              name="email"
              minlength="5"
              maxlength="50"
              required
              placeholder="E-mail"
              class="w-full p-3 bg-inputBg text-[1rem] rounded"
            />
          </div>
          <div class="details">
            <input
              v-model="password"
              type="password"
              name="password"
              minlength="8"
              maxlength="50"
              required
              placeholder="password"
              class="w-full p-3 bg-inputBg text-[1rem] rounded"
            />
          </div>

          <div class="details">
            <input
              v-model="confirmPassword"
              type="password"
              name="password"
              minlength="8"
              maxlength="50"
              required
              placeholder="Retype password"
              class="w-full p-3 bg-inputBg text-[1rem] rounded"
            />
          </div>

          <div class="details-action mt-5">
            <button
              role="button"
              class="p-3 bg-bgColorSecondary font-text rounded text-sm text-white max-sm:w-full"
              type="submit"
            >
              Create an account
            </button>
          </div>
        </form>
        <span class="mt-5 text-sm flex gap-2 items-end">
          <p class="font-text"><b>Already have an account </b></p>
          <router-link :to="{ name: 'login' }" class="underline font-text">Sign In</router-link>
        </span>
      </div>

      <div class="form-image w-full h-[28rem] max-sm:hidden">
        <img
          src="https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          class="h-full w-full border-2 object-cover"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'vue-router'

const router = useRouter()
const email = ref('')
const password = ref('')
const confirmPassword = ref('')

const validateForm = () => {
  if (password.value !== confirmPassword.value) {
    alert('password does not match')
    return false
  }
  return true
}

const handleSubmit = () => {
  if (validateForm() === true) {
    const auth = getAuth()
    return createUserWithEmailAndPassword(auth, email.value, password.value)
      .then((data) => {
        console.log(data)
        router.push('/')
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
</script>



<style scoped>
</style>