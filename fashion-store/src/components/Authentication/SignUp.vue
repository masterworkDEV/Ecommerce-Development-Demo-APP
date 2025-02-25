<template>
  <main class="mt-5 w-full px-14 max-sm:px-7">
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
        <h2 class="text-4xl text-textPrimary font-primary"><b>Create Account</b></h2>
        <form class="w-full mt-10 flex flex-col gap-5" @submit.prevent="handleSubmit">
          <div class="details">
            <label class="block text-sm font-medium text-gray-700">First Name</label>
            <input
              v-model="firstName"
              type="text"
              placeholder="First Name"
              class="w-full p-3 bg-inputBg text-[1rem] rounded"
            />
            <p v-if="firstNameError" class="text-red-500 text-sm mt-1">{{ firstNameError }}</p>
          </div>
          <div class="details">
            <label class="block text-sm font-medium text-gray-700">Last Name</label>
            <input
              v-model="lastName"
              type="text"
              placeholder="Last Name"
              class="w-full p-3 bg-inputBg text-[1rem] rounded"
            />
            <p v-if="lastNameError" class="text-red-500 text-sm mt-1">{{ lastNameError }}</p>
          </div>
          <div class="details">
            <label class="block text-sm font-medium text-gray-700">Email</label>
            <input
              v-model="email"
              type="email"
              placeholder="Email"
              class="w-full p-3 bg-inputBg text-[1rem] rounded"
            />
            <p v-if="emailError" class="text-red-500 text-sm mt-1">{{ emailError }}</p>
          </div>
          <div class="details">
            <label class="block text-sm font-medium text-gray-700">Phone Number (Optional)</label>
            <input
              v-model="phoneNumber"
              type="tel"
              placeholder="Phone Number"
              class="w-full p-3 bg-inputBg text-[1rem] rounded"
            />
            <p v-if="phoneNumberError" class="text-red-500 text-sm mt-1">{{ phoneNumberError }}</p>
          </div>
          <div class="details">
            <label class="block text-sm font-medium text-gray-700">Password</label>
            <input
              v-model="password"
              type="password"
              placeholder="Password"
              class="w-full p-3 bg-inputBg text-[1rem] rounded"
            />
            <p v-if="passwordError" class="text-red-500 text-sm mt-1">{{ passwordError }}</p>
          </div>
          <div class="details">
            <label class="block text-sm font-medium text-gray-700">Confirm Password</label>
            <input
              v-model="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              class="w-full p-3 bg-inputBg text-[1rem] rounded"
            />
            <p v-if="confirmPasswordError" class="text-red-500 text-sm mt-1">
              {{ confirmPasswordError }}
            </p>
          </div>

          <div class="details-action mt-5">
            <button
              type="submit"
              class="p-3 bg-bgColorSecondary font-text rounded text-sm text-white max-sm:w-full"
            >
              <span v-if="!isLoading">Create an account</span>
              <span v-else>Creating Account...</span>
            </button>
          </div>
        </form>
        <span class="mt-5 text-sm flex gap-2 items-end">
          <p class="font-text"><b>Already have an account </b></p>
          <router-link :to="{ name: 'login' }" class="underline font-text">Sign In</router-link>
        </span>
      </div>

      <div class="form-image w-full max-sm:hidden">
        <img
          src="https://img.freepik.com/free-photo/three-afican-american-women-tracksuits-shopping-sportswear-mall-against-mannequin-sport-store-theme_627829-663.jpg?t=st=1740470561~exp=1740474161~hmac=aa70599206683df26d34e5f9c1f0ba60c90ecaab44674a49490fdc6e2ffef80f&w=1060"
          class="h-full w-full border-2 object-cover"
        />
      </div>
    </div>
  </main>
</template>

<script setup>
import { onMounted, onUnmounted, computed, ref } from 'vue'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'vue-router'
import { useRoute } from 'vue-router'
import { piniaStore } from '@/stores/store'

const useStore = piniaStore()

onMounted(() => {
  useStore.footerState = !useStore.footerState
  useStore.navState = !useStore.navState
})
onUnmounted(() => {
  useStore.footerState = true
  useStore.navState = true
})

const router = useRouter()
const route = useRoute()
const firstName = ref('')
const lastName = ref('')
const email = ref('')
const phoneNumber = ref('')
const password = ref('')
const confirmPassword = ref('')
const firstNameError = ref(null)
const lastNameError = ref(null)
const emailError = ref(null)
const phoneNumberError = ref(null)
const passwordError = ref(null)
const confirmPasswordError = ref(null)
const isLoading = ref(false)

const validateForm = computed(() => {
  let isValid = true
  firstNameError.value = null
  lastNameError.value = null
  emailError.value = null
  phoneNumberError.value = null
  passwordError.value = null
  confirmPasswordError.value = null

  if (!firstName.value.trim()) {
    firstNameError.value = 'First name is required.'
    isValid = false
  }
  if (!lastName.value.trim()) {
    lastNameError.value = 'Last name is required.'
    isValid = false
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email.value)) {
    emailError.value = 'Invalid email format.'
    isValid = false
  }

  const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s./0-9]*$/ // Improved regex
  if (phoneNumber.value.trim() && !phoneRegex.test(phoneNumber.value)) {
    phoneNumberError.value = 'Invalid phone number format.'
    isValid = false
  }

  if (password.value.length < 8) {
    passwordError.value = 'Password must be at least 8 characters.'
    isValid = false
  }

  if (password.value !== confirmPassword.value) {
    confirmPasswordError.value = 'Passwords do not match.'
    isValid = false
  }

  return isValid
})

const handleSubmit = () => {
  const auth = getAuth()
  if (validateForm.value === true) {
    createUserWithEmailAndPassword(auth, email.value, password.value)
      .then((data) => {
        console.log(data)
        router.push(route.query.redirect || '/')
      })
      .catch((error) => {
        console.log(error)
      })
      .finally((isLoading.value = false))
  }
}
</script>