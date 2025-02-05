<template>
  <div
    class="row flex justify-between items-start gap-32 max-md:flex-col max-md:gap-14 max-md:items-center"
  >
    <form class="form mb-10 pr-5 max-md:pr-0 w-full" @submit.prevent="handleInformation">
      <div class="">
        <div class="col-description mt-10 mb-2">
          <h3 class="font-text max-md:text-sm">CONTACT INFO</h3>
        </div>
        <div class="details">
          <label for="email"></label>
          <input type="email" name="email" placeholder="Email" v-model="email" required />
        </div>
        <div class="details">
          <label for="phone"></label>

          <input type="text" name="phone" placeholder="Phone" v-model="phone" required />
        </div>
      </div>
      <div class="col">
        <div class="col-description mb-2 mt-10">
          <h3 class="font-text max-md:text-sm">SHIPPING ADDRESS</h3>
        </div>
        <div class="details">
          <label for="name"></label>

          <input type="text" name="name" placeholder="First Name" v-model="name" />
        </div>

        <div class="details">
          <select name="countries" id="countries" v-model="countries">
            <option value="">Select countries</option>
            <option :value="country" v-for="country in availableCountries" :key="country">
              {{ country }}
            </option>
          </select>
        </div>
        <div class="details">
          <label for="address"></label>
          <input type="text" name="state" placeholder="State/Region" v-model="state" required />
        </div>
        <div class="details">
          <label for="address"></label>

          <input type="text" name="address" placeholder="Address" v-model="address" required />
        </div>
        <div class="details flex items-center gap-2">
          <input type="text" name="city" placeholder="City" v-model="city" required />
          <input
            type="text"
            name="postal"
            placeholder="Postal Code"
            v-model="postalCode"
            required
          />
        </div>

        <div class="details w-full flex justify-end">
          <button
            :disabled="!isValid"
            class="submit-btn w-2/4 max-md:w-full h-10 flex justify-between items-center bg-inputBg p-2 px-4 cursor-not-allowed transition-all"
            :class="{ active: isValid }"
          >
            <span> Shipping </span>
            <svg
              class="arrow w-[50px]"
              :class="{ active: isValid }"
              height="200px"
              width="200px"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 476.213 476.213"
              xml:space="preserve"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <polygon
                  points="476.213,238.105 400,161.893 400,223.106 0,223.106 0,253.106 400,253.106 400,314.32 "
                ></polygon>
              </g>
            </svg>
          </button>
        </div>
      </div>
    </form>
    <div class="items-in-cart w-full pl-56 max-sm:pl-0 mb-10">
      <div class="col relative w-full min-h-[500px] overflow-y-auto border-2 border-primary p-6">
        <h4
          class="absolute top-0 right-0 bg-white text-blue-800 w-8 h-8 flex justify-center text-center items-center"
        >
          {{ useStore.cart.length }}
        </h4>

        <h3 class="mb-5 font-semibold text-gray-600">Your Order</h3>

        <div
          v-for="product in useStore.cart"
          :key="product.id"
          class="grid grid-cols-3 gap-3 items-start mb-5"
        >
          <div class="image w-full h-[125px]">
            <img
              :src="product.images"
              :alt="product.title"
              class="w-full h-full object-cover border border-primary"
            />
          </div>
          <div class="spec flex flex-col gap-3">
            <small class="name mb-2 font-primary">{{
              product.title.length < 20 ? product.title : product.title.slice(0, 25)
            }}</small>
            <small class="name mb-2 font-primary">{{ product.category.name }}/L</small>

            <small class="mt-2 text-blue-800 font-primary">({{ product.quantity }})</small>
          </div>
          <div class="flex flex-col items-end gap-3">
            <button class="text-sm underline font-primary font-bold max-md:text-small">
              Change
            </button>
            <small class="mt-5 font-primary">${{ product.price }}</small>
          </div>
        </div>
        <div class="subtotal flex justify-between pt-2 border-t border-primary">
          <small>Subtotal</small>
          <small class="font-primary">
            <b> ${{ subtotal.toFixed(2) }} </b>
          </small>
        </div>
        <div class="subtotal flex justify-between pt-2 mb-2">
          <small>Shipping</small>
          <small class="text-smaller text-gray-500 font-primary">Calculated at next step</small>
        </div>
        <div class="total flex justify-between mt-2 pt-2 border-t border-primary">
          <small>Total</small>
          <small class="font-primary">
            <b> ${{ subtotal.toFixed(2) }} </b>
          </small>
        </div>
      </div>
    </div>
  </div>
</template>
    
<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { piniaStore } from '@/stores/store'
import { useRouter } from 'vue-router'
import countriesJS from '@/Countries'

const useStore = piniaStore()
const router = useRouter()
const availableCountries = ref([])

onMounted(() => {
  useStore.navState = !useStore.navState
  useStore.footerState = !useStore.footerState
  availableCountries.value = countriesJS
  useStore.showInformationLink = true
})

onUnmounted(() => {
  useStore.navState = true
  useStore.footerState = true
  useStore.showInformationLink = false
})

const email = ref('')
const name = ref('')
const phone = ref('')
const countries = ref('')
const state = ref('')
const address = ref('')
const city = ref('')
const postalCode = ref('')

const isValid = computed(() => {
  return (
    email.value.trim() !== '' &&
    name.value.trim() !== '' &&
    phone.value.trim() !== '' &&
    countries.value.trim() !== '' &&
    state.value.trim() !== '' &&
    address.value.trim() !== '' &&
    city.value.trim() !== '' &&
    postalCode.value.trim() !== ''
  )
})

const handleInformation = () => {
  //   // for submission to backend
  //   // const formData = new FormData();
  //   // formData.append('name', name.value)
  //   // other input fields, and then push the form data object to our server....

  //   // but since we're pushing to another route
  if (isValid.value) {
    return router.push('/check-out/shipping')
  } else {
    alert('all fields must be completed')
  }
}

const subtotal = computed(() => {
  const getSubtotal = useStore.cart.reduce((acc, product) => {
    return acc + product.price * product.quantity
  }, 0)
  return getSubtotal
})
</script>
    
 <style >
.details {
  width: 100%;
}
.details > input {
  width: 100%;
  margin-bottom: 16px;
  padding: 7px;
  background: transparent;
  outline: solid 2px #d7d7d7;
  transition: all 0.3s ease-in-out;
}
.details > select {
  width: 100%;
  margin-bottom: 16px;
  padding: 7px;
  background: transparent;
  outline: solid 2px #d7d7d7;
  transition: all 0.3s ease-in-;
}
.details > input::placeholder {
  padding: 16px;
}
.details > input:hover {
  background: #dedcdc86;
  outline-color: #d1d1d1;
}
.details > input:focus {
  outline-color: #919090;
}

.submit-btn.active {
  background: darkblue;
  color: #fff;
  cursor: pointer;
}
.arrow.active {
  fill: #fff;
}
</style>
    
       