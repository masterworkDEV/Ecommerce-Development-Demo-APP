<template>
  <main class="pages px-14 max-md:px-5 pb-10">
    <div v-if="!Object.values(useStore.cart).length" class="text-center">
      <p class="text-h5 max-md:text-normal m-5">There is no product in cart!!</p>
      <a href="/" class="text-blue-600">Go back home</a>
    </div>

    <div v-else>
      <div
        class="cart-row w-full flex justify-center gap-20 items-start max-md:justify-start max-md:flex-col"
      >
        <div class="prod-row w-3/4 grid grid-cols-2 gap-20 max-md:grid-cols-1 max-md:w-full">
          <div
            class="prod-card w-full h-[350px] flex items-start justify-start gap-5 max-md:gap-3 hover:mt-1 hover:opacity-90 transition-all"
            v-for="product in useStore.cart"
            :key="product.id"
          >
            <div class="h-full">
              <img
                :src="product.images"
                :alt="product.title"
                class="w-full h-full max-md:h-[90%] border-2 border-primary"
              />
              <div class="flex justify-between items-end text-start">
                <div>
                  <p class="mb-2 mt-2 font-text text-small text-gray-600 max-md:text-smaller">
                    {{ product.category.name }}
                  </p>
                  <h6 class="text-sm font-text max-md:text-small">
                    <b> {{ product.title }}</b>
                  </h6>
                </div>
                <div class="price text-sm font-text max-md:text-small">
                  <h4>
                    <b>${{ product.price.toFixed(2) * product.quantity }} </b>
                  </h4>
                </div>
              </div>
            </div>
            <!-- <div
              v-if="possibleDeletion"
              class="fixed w-full h-full bg-transparentBLK bottom-0 left-0 right-0 z-10"
            ></div> -->
            <!-- 
            <div
              v-if="deleteItem !== null"
              class="fixed w-1/4 max-md:w-3/4 left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] bg-[#f1f1f1] p-5 rounded-sm z-50 shadow-2xl"
            >
              <p class="text-sm">
                Are you sure you want to delete
                <b>{{ product.title }} ?</b>
              </p>
              <div class="mt-5 flex items-center justify-end gap-10">
                <button @click="noDeletion" class="text-green-600 uppercase">Cancel</button>
                <button
                  @click="useStore.useDelProductFromCart(deleteItem)"
                  class="text-green-600 uppercase"
                >
                  Delete
                </button>
              </div>
            </div> -->
            <!--  -->
            <div class="preview-side">
              <button
                @click="confirmDelete(product)"
                class="delete flex justify-start items-center text-center"
              >
                <svg
                  viewBox="0 0 64 64"
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-8 h-8 max-md:w-6 max-md:h-6"
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
              <div :class="`bg-black w-8 h-8 pt-5`"></div>

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
        </div>
        <!-- row-ends -->
        <div class="border max-md:w-full border-primary p-10 max-md:p-5">
          <h3 class="pt-5 pb-5 text-h5 max-md:text-normal text-center font-secondary">
            <b>ORDER SUMMARY</b>
          </h3>
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
            <h3 class="flex items-center">
              <b class="font-secondary text-sm max-md:text-small">TOTAL</b>
              <p class="font-secondary text-sm max-md:text-small">(TAX INCL)</p>
            </h3>
            <h3>
              $<b class="font-secondary text-sm max-md:text-small">{{ totalAmount }}</b>
            </h3>
          </div>

          <div class="action flex justify-center items-center gap-2 w-full">
            <input
              type="checkbox"
              name="checkbox"
              class="w-7 h-7 max-md:w-5 max-md:h-5"
              v-model="agreeToTermAndConditions"
              :checked="agreeToTermAndConditions"
              @change="updateChange"
            />
            <label class="font-secondary w-full text-small"
              >I agree to the Terms and Condition</label
            >
          </div>
          <button
            class="action w-full flex justify-center text-center bg-inputBg p-3 mt-7 text-sm font-secondary"
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
      class="fixed w-full h-full bg-transparentBLK top-0 right-0 left-0 bottom-0 z-30"
    ></div>
    <transition name="cart-slide-left">
      <div
        v-if="agreementModal"
        class="not-agreeing-to-our-terms-modal fixed top-10 left-[50%] right-0 translate-x-[-50%] w-80 bg-[#fff] border border-red-600 text-white text-center z-40 pb-1 pt-1 rounded-md"
      >
        <p class="text-sm text-red-600">Please agree to terms our and conditions.</p>
      </div>
    </transition>
  </main>
</template>

<script setup>
import { piniaStore } from '@/stores/store'
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { useRouter } from 'vue-router'

// states management
const useStore = piniaStore()

onMounted(() => {
  useStore.footerState = !useStore.footerState
})
onUnmounted(() => {
  useStore.footerState = true
})
const router = useRouter()
const agreeToTermAndConditions = ref(false)
const agreementModal = ref(false)

// states
const subtotal = ref(null)
const shippingTotal = ref(null)
const totalAmount = ref(0)

const confirmDelete = (product) => {
  return useStore.useDelProductFromCart(product.id)
}

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
const updateChange = () => {
  return agreeToTermAndConditions.value
}
const checkOutNow = () => {
  if (!agreeToTermAndConditions.value) {
    agreementModal.value = true

    setTimeout(() => {
      agreementModal.value = false
    }, 2000)
  } else {
    router.push('/check-out/user-information')
  }
}
</script>

<style>
.checked {
  background: blue;
}
.checked:hover {
  background: rgb(3, 3, 203);
}
</style>