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
        <a href="/login">
          <b>Account</b>
        </a>
      </li>
    </ul>

    <div class="mt-14 flex justify-center gap-10">
      <div class="w-2/4 max-sm:w-full">
        <h2 class="text-4xl text-textPrimary"><b>Sign Up</b></h2>
        <p class="w-full text-otherTextOne">
          Unlock a world of convineience and tailored experiences by logging in today. <br />Your
          journey begins here.
        </p>
        <form class="w-full mt-10 flex flex-col gap-5" @submit.prevent="handleSubmit">
          <div class="details">
            <input
              v-model="email"
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
              class="p-3 bg-bgColorSecondary rounded text-white max-sm:w-full"
              type="submit"
            >
              Create an account
            </button>
          </div>
        </form>
        <span class="mt-2 text-sm flex gap-2 items-end">
          <p><b>Already have an account </b></p>
          <router-link :to="{ name: 'login' }" class="underline">Sign In</router-link>
          or
          <button
            class="bg-slate-100 border border-slate-500 p-2 flex justify-between items-center"
          >
            <span>Login with </span>
            <svg
              viewBox="0 -0.5 25 25"
              class="w-10 h-5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M9.78353 7.74971C10.1976 7.73814 10.5239 7.39311 10.5123 6.97906C10.5007 6.565 10.1557 6.23873 9.74164 6.25029L9.78353 7.74971ZM5.50158 11.5L6.25132 11.52C6.25167 11.5067 6.25167 11.4933 6.25132 11.48L5.50158 11.5ZM9.76258 16L9.74164 16.7497C9.7556 16.7501 9.76957 16.7501 9.78353 16.7497L9.76258 16ZM14.0236 11.5L14.7733 11.48C14.7625 11.0737 14.43 10.75 14.0236 10.75V11.5ZM9.76258 10.75C9.34837 10.75 9.01258 11.0858 9.01258 11.5C9.01258 11.9142 9.34837 12.25 9.76258 12.25V10.75ZM19.3276 9.679C19.7418 9.679 20.0776 9.34321 20.0776 8.929C20.0776 8.51479 19.7418 8.179 19.3276 8.179V9.679ZM17.5016 8.179C17.0874 8.179 16.7516 8.51479 16.7516 8.929C16.7516 9.34321 17.0874 9.679 17.5016 9.679V8.179ZM17.5016 9.679C17.9158 9.679 18.2516 9.34321 18.2516 8.929C18.2516 8.51479 17.9158 8.179 17.5016 8.179V9.679ZM15.6756 8.179C15.2614 8.179 14.9256 8.51479 14.9256 8.929C14.9256 9.34321 15.2614 9.679 15.6756 9.679V8.179ZM16.7516 8.929C16.7516 9.34321 17.0874 9.679 17.5016 9.679C17.9158 9.679 18.2516 9.34321 18.2516 8.929H16.7516ZM18.2516 7C18.2516 6.58579 17.9158 6.25 17.5016 6.25C17.0874 6.25 16.7516 6.58579 16.7516 7H18.2516ZM18.2516 8.929C18.2516 8.51479 17.9158 8.179 17.5016 8.179C17.0874 8.179 16.7516 8.51479 16.7516 8.929H18.2516ZM16.7516 10.857C16.7516 11.2712 17.0874 11.607 17.5016 11.607C17.9158 11.607 18.2516 11.2712 18.2516 10.857H16.7516ZM9.74164 6.25029C6.90939 6.32941 4.67644 8.68761 4.75185 11.52L6.25132 11.48C6.19794 9.47505 7.77861 7.80571 9.78353 7.74971L9.74164 6.25029ZM4.75185 11.48C4.67644 14.3124 6.90939 16.6706 9.74164 16.7497L9.78353 15.2503C7.77861 15.1943 6.19794 13.5249 6.25132 11.52L4.75185 11.48ZM9.78353 16.7497C12.6158 16.6706 14.8487 14.3124 14.7733 11.48L13.2738 11.52C13.3272 13.5249 11.7466 15.1943 9.74164 15.2503L9.78353 16.7497ZM14.0236 10.75H9.76258V12.25H14.0236V10.75ZM19.3276 8.179H17.5016V9.679H19.3276V8.179ZM17.5016 8.179H15.6756V9.679H17.5016V8.179ZM18.2516 8.929V7H16.7516V8.929H18.2516ZM16.7516 8.929V10.857H18.2516V8.929H16.7516Z"
                  fill="#124"
                ></path>
              </g>
            </svg>
          </button>
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
</script>



<style scoped>
</style>