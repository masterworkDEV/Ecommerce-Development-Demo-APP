<template>
  <main class="mt-10 flex justify-between gap-20 max-md:flex-col">
    <form id="form" class="form w-2/4 max-md:w-full" @submit.prevent="submitShipingDetails">
      <label for="flat/house-no"></label>
      <input
        type="text"
        name="addresss"
        id="address"
        placeholder="Flat/House no"
        v-model="houseN0"
        required
      />
      <label for="address"></label>

      <input
        type="text"
        name="address"
        id="address"
        placeholder="Address"
        v-model="address"
        required
      />
      <div class="flex gap-2">
        <input type="text" name="address" id="address" placeholder="City" v-model="city" required />

        <input
          type="text"
          name="address"
          id="address"
          placeholder="State"
          v-model="state"
          required
        />
      </div>
      <div class="flex items-center gap-2">
        <input
          type="text"
          name="postal-code"
          id="postal-code"
          placeholder="Postal Code"
          v-model="postal"
          required
        />

        <input
          type="text"
          name="landmark"
          id="address"
          placeholder="Famous Landmark"
          v-model="landmark"
          required
        />
      </div>
      <div class="flex items-center gap-1">
        <input type="checkbox" checked="no" />
        <label for="confirm-billing-address" class="text-sm"
          >My shipping and billing address are th same</label
        >
      </div>
      <button
        :disabled="!isValid"
        class="Submit-shipping mt-3 bg-inputBg w-1/4 max-md:w-full p-3 text-sm font-bold"
        :class="isValid && 'active'"
      >
        Continue
      </button>
    </form>
    <div class="items-in-cart w-1/4 mb-10 max-md:w-full">
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
          <small class="font-primary">
            <b> ${{ shippingPrice }} </b>
          </small>
        </div>
        <div class="total flex justify-between mt-2 pt-2 border-t border-primary">
          <small>Total</small>
          <small class="font-primary">
            <b> ${{ totalPrice }} </b>
          </small>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { piniaStore } from '@/stores/store'
import { useRouter } from 'vue-router'

const useStore = piniaStore()
const router = useRouter()
onMounted(() => {
  useStore.navState = !useStore.navState
  useStore.footerState = !useStore.footerState
  useStore.showShippingLink = true
})

onUnmounted(() => {
  useStore.navState = true
  useStore.footerState = true
  useStore.showShippingLink = false
})

const houseN0 = ref('')
const address = ref('')
const city = ref('')
const state = ref('')
const postal = ref('')
const landmark = ref('')

const isValid = computed(() => {
  return (
    houseN0.value !== '' &&
    address.value !== '' &&
    city.value !== '' &&
    state.value !== '' &&
    postal.value !== '' &&
    landmark.value !== ''
  )
})

const submitShipingDetails = () => {
  if (isValid) {
    router.push('/check-out/payment')
  }
}

const subtotal = computed(() => {
  const getSubtotal = useStore.cart.reduce((acc, product) => {
    return acc + product.price * product.quantity
  }, 0)
  return getSubtotal
})

const shippingPrice = computed(() => {
  const getShippingPrice = subtotal.value / 10
  return getShippingPrice.toFixed(2)
})

const totalPrice = computed(() => {
  const getTotalPrice = subtotal.value + shippingPrice.value * 1
  const converPriceToNumber = parseFloat(getTotalPrice).toFixed(2)
  return converPriceToNumber
})
</script>

<style scoped>
.form input[type='text'] {
  width: 100%;
  margin-bottom: 16px;
  padding: 7px;
  background: transparent;
  outline: solid 2px #d7d7d7;
  transition: all 0.3s ease-in-out;
}

.Submit-shipping.active {
  background: darkblue;
  color: white;
}
</style>