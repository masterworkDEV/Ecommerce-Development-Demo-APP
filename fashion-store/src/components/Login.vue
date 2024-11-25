<template>
  <!-- login -->
  <div class="login-modal">
    <div class="container">
      <div
        class="layer w-full h-full fixed top-0 bottom-0 left-0 right-0 bg-[#ffffffa7] z-20"
      ></div>
      <div
        class="w-[800px] h-[450px] drop-shadow-2xl fixed left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] right-0 z-30 flex"
      >
        <div class="row w-[65%] h-full bg-white rounded-l">
          <div class="greeting text-start ml-10">
            <span class="flex items-center gap-3">
              <h2 class="text-5xl mt-10"><b>Welcome back </b></h2>
              <svg
                viewBox="0 0 36 36"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                class="iconify iconify--twemoji mt-10"
                preserveAspectRatio="xMidYMid meet"
                fill="#000000"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    fill="#90603E"
                    d="M4.861 9.147c.94-.657 2.357-.531 3.201.166l-.968-1.407c-.779-1.111-.5-2.313.612-3.093c1.112-.777 4.263 1.312 4.263 1.312c-.786-1.122-.639-2.544.483-3.331a2.483 2.483 0 0 1 3.456.611l10.42 14.72L25 31l-11.083-4.042L4.25 12.625a2.495 2.495 0 0 1 .611-3.478z"
                  ></path>
                  <path
                    fill="#AF7E57"
                    d="M2.695 17.336s-1.132-1.65.519-2.781c1.649-1.131 2.78.518 2.78.518l5.251 7.658c.181-.302.379-.6.6-.894L4.557 11.21s-1.131-1.649.519-2.78c1.649-1.131 2.78.518 2.78.518l6.855 9.997c.255-.208.516-.417.785-.622L7.549 6.732s-1.131-1.649.519-2.78c1.649-1.131 2.78.518 2.78.518l7.947 11.589c.292-.179.581-.334.871-.498L12.238 4.729s-1.131-1.649.518-2.78c1.649-1.131 2.78.518 2.78.518l7.854 11.454l1.194 1.742c-4.948 3.394-5.419 9.779-2.592 13.902c.565.825 1.39.26 1.39.26c-3.393-4.949-2.357-10.51 2.592-13.903L24.515 8.62s-.545-1.924 1.378-2.47c1.924-.545 2.47 1.379 2.47 1.379l1.685 5.004c.668 1.984 1.379 3.961 2.32 5.831c2.657 5.28 1.07 11.842-3.94 15.279c-5.465 3.747-12.936 2.354-16.684-3.11L2.695 17.336z"
                  ></path>
                  <g fill="#5DADEC">
                    <path
                      d="M12 32.042C8 32.042 3.958 28 3.958 24c0-.553-.405-1-.958-1s-1.042.447-1.042 1C1.958 30 6 34.042 12 34.042c.553 0 1-.489 1-1.042s-.447-.958-1-.958z"
                    ></path>
                    <path
                      d="M7 34c-3 0-5-2-5-5a1 1 0 1 0-2 0c0 4 3 7 7 7a1 1 0 1 0 0-2zM24 2a1 1 0 0 0 0 2c4 0 8 3.589 8 8a1 1 0 0 0 2 0c0-5.514-4-10-10-10z"
                    ></path>
                    <path
                      d="M29 .042c-.552 0-1 .406-1 .958s.448 1.042 1 1.042c3 0 4.958 2.225 4.958 4.958c0 .552.489 1 1.042 1s.958-.448.958-1C35.958 3.163 33 .042 29 .042z"
                    ></path>
                  </g>
                </g>
              </svg>
            </span>
            <h3 class="ml-3 mt-1 text-black">
              <b> Log in to your account </b>
            </h3>
          </div>

          <!-- end of title -->
          <form
            class="ml-12 mt-10 text-start"
            novalidate
            @submit.prevent="HandleForm"
            ref="resetForm"
          >
            <div class="details mt-5 flex flex-col mr-14">
              <!-- <label for="Email/Username">Email/Username</label> -->
              <input
                type="text"
                name="email"
                minlength="10"
                maxlength="50"
                v-model="email"
                placeholder="Email/Username"
                v-bind="emailAttrs"
                class="p-2 rounded border-2 border-[#ddd] hover:bg-[#fafafa] hover:cursor-text hover:border-blue-300 text-[1rem] outline-blue-400 transition"
                size="43"
              />
              <small>{{ errors }}</small>
            </div>
            <div class="details mt-5 flex flex-col mr-14">
              <!-- <label for="password">Password</label> -->
              <input
                type="password"
                name="password"
                v-model="password"
                v-bind="passwordAttrs"
                placeholder="Enter password"
                minlength="8"
                maxlength="50"
                class="p-2 rounded border-2 border-[#ddd] hover:bg-[#fafafa] hover:cursor-text hover:border-blue-300 text-[1rem] outline-blue-400 transition"
                size="43"
              />
              <small></small>
            </div>

            <a href="#" class="text-blue-400 hover:text-blue-500 transition text-sm mt-1">
              I forgot my password
            </a>

            <div class="details-action mt-8">
              <button
                class="rounded mt-8 bg-[#1e1e1e] text-white w-[30%] flex justify-center items-center gap-2 p-2"
              >
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M16.584 6C15.8124 4.2341 14.0503 3 12 3C9.23858 3 7 5.23858 7 8V10.0288M7 10.0288C7.47142 10 8.05259 10 8.8 10H15.2C16.8802 10 17.7202 10 18.362 10.327C18.9265 10.6146 19.3854 11.0735 19.673 11.638C20 12.2798 20 13.1198 20 14.8V16.2C20 17.8802 20 18.7202 19.673 19.362C19.3854 19.9265 18.9265 20.3854 18.362 20.673C17.7202 21 16.8802 21 15.2 21H8.8C7.11984 21 6.27976 21 5.63803 20.673C5.07354 20.3854 4.6146 19.9265 4.32698 19.362C4 18.7202 4 17.8802 4 16.2V14.8C4 13.1198 4 12.2798 4.32698 11.638C4.6146 11.0735 5.07354 10.6146 5.63803 10.327C5.99429 10.1455 6.41168 10.0647 7 10.0288Z"
                      stroke="#fff"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </g>
                </svg>
                <span><b>Log in </b></span>
              </button>
            </div>
          </form>
        </div>
        <div class="row relative w-[35%] h-full bg-[#1e1e1e] rounded-r flex">
          <div class="cancel-button absolute right-4 top-4">
            <button @click="$emit('isLoginClosed', router.push('/'))">
              <svg
                fill="none"
                viewBox="0 0 32 32"
                class="stroke-white hover:fill-[#fff] hover:stroke-[#ddd] transition-all"
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
          </div>

          <div class="other-actions flex flex-col items-center justify-center mx-5 gap-5 w-full">
            <button
              class="google-btn p-2 bg-white text-[#333] w-full z-10 rounded flex items-center justify-center gap-2 hover:rounded-none hover:text-black transition cursor-default"
            >
              <svg
                viewBox="-0.5 0 48 48"
                version="1.1"
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
              <span>Google</span>
            </button>
            <button
              class="p-2 bg-[#101010] z-10 text-slate-100 w-full rounded hover:rounded-none hover:text-slate-300 transition cursor-default"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- login-end -->
</template>

<script setup>
import { defineProps, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useForm } from 'vee-validate'
import * as yup from 'yup'

const schema = yup.object({
  email: yup.string().required().email()
  // password: yup.string().required().password()
})
const { values, errors, defineField } = useForm({ validationSchema: schema })
const [email, emailAttrs] = defineField('email')
const [password, passwordAttrs] = defineField('password')
const resetForm = ref()

// const HandleForm = (e) => {
//   console.log(e)
//   resetForm.value.reset()
// }
const router = useRouter()

defineProps({
  isLoginModal: {
    type: Boolean,
    default: null
  }
})
</script>

<style>
svg {
  width: 20px;
  height: 20px;
}

.greeting svg {
  width: 35px;
  height: 35px;
}

.google-btn > svg {
  width: 15px;
  height: 15px;
}
</style>
