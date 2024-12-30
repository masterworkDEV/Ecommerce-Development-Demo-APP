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
              maxlength="50"
              placeholder="E-mail"
              class="w-full p-3 bg-inputBg text-[1rem] rounded"
            />
          </div>
          <div class="details">
            <input
              v-model="password"
              type="password"
              name="password"
              maxlength="50"
              placeholder="password"
              class="w-full p-3 bg-inputBg text-[1rem] rounded"
            />
          </div>

          <div class="details">
            <input
              v-model="confirmPassword"
              type="password"
              name="password"
              maxlength="50"
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
        <span class="mt-2 text-sm flex gap-2 items-end">
          <p class="font-text"><b>Already have an account </b></p>
          <router-link :to="{ name: 'login' }" class="underline font-text">Sign In</router-link>
          or
        </span>
        <button
          @click="signInWithGoogle"
          class="w-full mt-2 bg-white border border-slate-500 p-2 flex justify-start items-center rounded-sm"
        >
          <svg
            viewBox="-0.5 0 48 48"
            version="1.1"
            class="w-7 h-7"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            fill="#000000"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <title>Google-color</title>
              <desc>Created with Sketch.</desc>
              <defs></defs>
              <g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="Color-" transform="translate(-401.000000, -860.000000)">
                  <g id="Google" transform="translate(401.000000, 860.000000)">
                    <path
                      d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24"
                      id="Fill-1"
                      fill="#FBBC05"
                    ></path>
                    <path
                      d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333"
                      id="Fill-2"
                      fill="#EB4335"
                    ></path>
                    <path
                      d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667"
                      id="Fill-3"
                      fill="#34A853"
                    ></path>
                    <path
                      d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24"
                      id="Fill-4"
                      fill="#4285F4"
                    ></path>
                  </g>
                </g>
              </g>
            </g>
          </svg>
          <b class="ml-5">Sign in with Google</b>
        </button>
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
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup
} from 'firebase/auth'
import { useRouter } from 'vue-router'
import { data } from 'autoprefixer'

const router = useRouter()
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const minlength = ref(8)
const erroMSG = ref(false)
const isValidEmail = ref('^[^s@]+@[^s@]+.[^s@]+$')
const message = ref('')

const validateForm = () => {
  if (email.value === '') {
    erroMSG.value = true
    message.value = 'Cannot leave field blank '
  } else if (email.value.length < minlength.value) {
    erroMSG.value = true
    message.value = 'Your email is too short'
  }
  if (!email.value.includes(isValidEmail)) {
    message.value = 'Please Provide a valid '
  } else {
    erroMSG.value = false
    message.value = ''
  }

  if (password.value === '') {
    erroMSG.value = true
    message.value = 'Cannot leave field blank '
  } else if (password.value.length < minlength) {
    erroMSG.value = true
    message.value = 'Your password is too short'
  } else {
    erroMSG.value = false
    message.value = ''
  }
  if (confirmPassword.value === '') {
    erroMSG.value = true
    message.value = 'Cannot leave field blank '
  } else if (confirmPassword.value === password.value) {
    erroMSG.value = true
    message.value = 'Your password does not match'
  } else {
    erroMSG.value = false
    message.value = ''
  }
  return
}

const handleSubmit = () => {
  erroMSG.value = false
  message.value = ''
  const auth = getAuth()
  return createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((data) => {
      console.log(data)
      router.push('/user-dashboard')
    })
    .catch((err) => {
      console.log(err)
    })
}

const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider()
  signInWithPopup(getAuth(), provider)
    .then((data) => {
      router.push('/user-dashboard')
      console.log(data)
    })
    .catch((error) => {
      alert(`Something went wrong ${error}`)
      router.push('/auth/login')
    })
}
</script>



<style scoped>
</style>