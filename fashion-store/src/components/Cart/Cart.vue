<template>
  <main class="pages px-14 max-md:px-5">
    <div
      class="title flex justify-start items-center gap-7 border-b border-primary mb-5 pb-3 pt-20 w-[65%] max-md:w-full max-md:border-none"
    >
      <h4 class="text-normal max-md:text-smaller font-text"><b>SHOPPING BAG</b></h4>
      <span class="favourite">
        <router-link :to="{ name: 'favourite' }">
          <p class="text-normal max-md:text-smaller font-text">FAVORITES</p>
        </router-link>
      </span>
    </div>
    <h3 v-if="!Object.values(useStore.cart).length" class="text-h4 text-center max-md:text-h5 m-10">
      There is no product in cart!!
    </h3>
    <div
      v-else
      class="w-full flex justify-center items-start gap-12 max-md:grid max-md:grid-cols-1 max-md:place-content-center p-5"
    >
      <div
        class="grid grid-cols-2 place-content-center place-items-center gap-10 max-md:grid-cols-1 text-center"
      >
        <div class="w-full max-md:w-full" v-for="product in useStore.cart" :key="product.id">
          <div class="w-full flex items-start justify-center text-center gap-5 relative">
            <img
              :src="product.images"
              :alt="product.title"
              class="w-full h-[350px] border-2 border-primary"
            />
            <div class="preview-side w-10">
              <button
                @click="useStore.useDelProductFromCart(product.id)"
                class="delete flex justify-start items-center text-center"
              >
                <svg
                  viewBox="0 0 64 64"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke-width="2"
                  stroke="#000000"
                  fill="none"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="1"></g>
                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <line x1="8.06" y1="8.06" x2="55.41" y2="55.94"></line>
                    <line x1="55.94" y1="8.06" x2="8.59" y2="55.94"></line>
                  </g>
                </svg>
              </button>

              <span class="size">
                <h4 class="text-start pt-20 mb-3 uppercase"><b>m</b></h4>
              </span>
              <div class="bg-cyan-400 w-8 h-8 pt-5"></div>

              <div class="flex flex-col justify-start items-start text-start pt-5">
                <button
                  @click.prevent="product.quantity++"
                  class="plus border border-[#999] w-8 h-8 flex justify-center text-center items-center"
                >
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <rect width="30" height="30" fill="none"></rect>
                      <path
                        d="M12 6V18"
                        stroke="#000000"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M6 12H18"
                        stroke="#000000"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </g>
                  </svg>
                </button>
                <input
                  type="text"
                  class="bg-transparent border border-[#999] w-8 h-8 flex justify-center text-center items-center"
                  :value="product.quantity < 1 ? (product.quantity = 1) : product.quantity"
                />
                <button
                  @click.prevent="
                    product.quantity < 1 ? (product.quantity = 1) : product.quantity--
                  "
                  class="minus border border-[#999] text-center w-8 h-8 flex justify-center items-center"
                >
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <rect width="30" height="30" fill="none"></rect>
                      <path
                        d="M6 12H18"
                        stroke="#000000"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </g>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div class="flex justify-between items-end text-start">
            <div>
              <p class="mb-2 mt-2 text-p font-text max-md:text-smaller">
                {{ product.category.name }}
              </p>
              <h6 class="text-sm font-text max-md:text-p">
                <b> {{ product.title }}</b>
              </h6>
            </div>
            <div class="price font-text max-md:text-smaller">
              <h6 class="mr-14">
                <b>${{ product.price * product.quantity }} </b>
              </h6>
            </div>
          </div>
        </div>
      </div>

      <!-- row-ends -->
      <div class="col border border-[#999] p-10 max-md:p-5">
        <h3 class="pt-5 pb-5 text-h5 max-md:text-normal font-secondary"><b>ORDER SUMMARY</b></h3>
        <div class="subtotal flex justify-between mb-2">
          <p class="font-secondary text-normal max-md:text-small"><b> Subtotal</b></p>
          <p class="font-secondary max-md:text-small">
            <b>${{ subtotal }}</b>
          </p>
        </div>
        <div class="shopping flex justify-between border-b-2 border-[#ddd] mb-5 pb-6">
          <p class="font-secondary max-md:text-small"><b>Shipping</b></p>
          <p class="font-secondary max-md:text-small">
            <b>${{ shippingTotal ? shippingTotal : 0 }}</b>
          </p>
        </div>
        <div class="shopping flex justify-between mb-7 mt-7">
          <h3>
            <b class="font-secondary max-md:text-small">TOTAL</b>
            <p class="font-secondary max-md:text-small">(TAX INCL)</p>
          </h3>
          <h3>
            $<b class="font-secondary max-md:text-small">{{ totalAmount }}</b>
          </h3>
        </div>

        <div class="actions w-full">
          <div class="action flex justify-center items-center gap-2 w-full">
            <input
              type="checkbox"
              name="checkbox"
              class="w-7 h-7 max-md:w-5 max-md:h-5"
              v-model="agreeToTermAndConditions"
            />
            <label class="font-secondary text-small max-md:text-smaller"
              >I agree to the Terms and Condition</label
            >
          </div>
          <button
            class="action w-full flex justify-center text-center bg-inputBg p-3 mt-3 text-sm font-secondary"
            :class="
              agreeToTermAndConditions
                ? 'checked text-textPrimaryTwo cursor-default'
                : 'cursor-not-allowed'
            "
            @click="checkOutNow"
          >
            CONTINUE
          </button>
        </div>
      </div>
    </div>
    <div
      v-if="agreementModal"
      class="not-agreeing-to-our-terms-modal fixed top-10 left-[50%] right-0 translate-x-[-50%] w-80 bg-transparentBLK text-white text-center z-30 p-2 rounded-full"
    >
      <p>Agree to terms and Conditions</p>
    </div>
  </main>
</template>

<script setup>
import { piniaStore } from '@/stores/store'
import { computed, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

// states management
const useStore = piniaStore()
const router = useRouter()
const agreeToTermAndConditions = ref(false)
const agreementModal = ref(false)

// states
const subtotal = ref(null)
const shippingTotal = ref(null)
const totalAmount = ref(0)

// methods

// get total banlance of items in cart;
const getTotal = computed(() => {
  const totalString = Object.entries(useStore.cart).reduce((total, product) => {
    return total + product[1].price * product[1].quantity
  }, 0)
  const sumTotal = parseFloat(totalString)
  if (isNaN(sumTotal)) {
    alert(`Error this isn't a number`)
  } else {
    return sumTotal.toFixed(2)
  }
})

// total amount of items
subtotal.value = computed(() => getTotal.value)

const calculateShippingRate = computed(() => {
  const shippingCost = getTotal.value / 90
  const totalShipingCost = parseFloat(shippingCost)
  if (isNaN(totalShipingCost)) {
    console.log(`Error, this has to be number ${totalShipingCost}`)
  } else {
    return totalShipingCost.toFixed(2)
  }
})
// total shipping cost for items in cart
shippingTotal.value = computed(() => calculateShippingRate.value)

const calculateTotalAmount = computed(() => {
  const total = getTotal.value + calculateShippingRate.value
  const totalPrice = parseFloat(total)
  if (isNaN(totalPrice)) {
    alert(`Error, this isn't a number${totalPrice}`)
  } else {
    return totalPrice.toFixed(2)
  }
})
totalAmount.value = computed(() => calculateTotalAmount.value)

// checkout funcion
const checkOutNow = () => {
  if (!agreeToTermAndConditions.value) {
    agreementModal.value = true

    setTimeout(() => {
      agreementModal.value = false
    }, 2000)
  } else {
    router.push('/check-out')
  }
}
</script>

<style >
svg {
  width: 20px;
  height: 20px;
}

.checked {
  background: blue;
}
.checked:hover {
  background: rgb(3, 3, 203);
}
</style>