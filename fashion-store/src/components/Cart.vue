<template>
  <main class="pages mx-14">
    <div
      class="title flex justify-start items-center gap-7 border-b border-[#999] mb-5 pb-3 pt-20 w-[65%]"
    >
      <h4 class="text-[.9rem]"><b>SHOPPING BAG</b></h4>
      <span class="favourite">
        <router-link :to="{ name: 'favourite' }">
          <small class="text-[.7rem]">FAVORITES</small>
        </router-link>
      </span>
    </div>

    <div class="flex items-start justify-between max-mobile:flex-col max-mobile:gap-16 pb-10">
      <div class="row grid grid-cols-2 justify-center gap-10 max-mobile:grid-cols-1">
        <div class="col w-[400px]" v-for="product in useStore.cart" :key="product.id">
          <div class="preview flex items-start justify-center text-center gap-5 relative">
            <img
              :src="product.images"
              :alt="product.title"
              class="w-[325px] h-[350px] border-2 border-primary"
            />
            <div class="preview-side w-10">
              <button
                @click="useStore.useDelProductFromCart(product)"
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
              <form>
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
                    :value="product.quantity"
                  />
                  <button
                    @click.prevent="product.quantity--"
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
              </form>
            </div>
          </div>
          <div class="card-bottom flex justify-start items-end gap-48">
            <div class="name-type">
              <p class="mb-2 mt-2 text-[.85rem]">{{ product.category.name }}</p>
              <h6 class="text-sm">
                <b> {{ product.title }}</b>
              </h6>
            </div>
            <div class="price">
              <h6 class="mr-14">
                <b>${{ product.price * product.quantity }} </b>
              </h6>
            </div>
          </div>
        </div>
        <!--  -->
      </div>

      <!-- row-ends -->
      <div class="col border border-[#999] w-[325px] h-[390px] p-10">
        <h3 class="pt-7 pb-5"><b>ORDER SUMMARY</b></h3>
        <div class="subtotal flex justify-between mb-2">
          <small> <b> Subtotal</b></small>
          <small
            ><b>${{ subtotal }}</b></small
          >
        </div>
        <div class="shopping flex justify-between border-b-2 border-[#ddd] mb-5 pb-6">
          <small> <b>Shipping</b> </small>
          <small
            ><b>${{ shippingTotal ? shippingTotal : 0 }}</b></small
          >
        </div>
        <div class="shopping flex justify-between mb-7 mt-7">
          <h3><b>TOTAL</b><small>(TAX INCL)</small></h3>
          <h3>
            $<b>{{ totalAmount }}</b>
          </h3>
        </div>

        <div class="actions w-full">
          <div class="action flex justify-center items-center gap-2 w-full">
            <input
              type="checkbox"
              name="checkbox"
              class="w-[16px] h-[16px]"
              v-model="agreeToTermAndConditions"
            />
            <label class="text-[.75rem]">I agree to the Terms and Condition</label>
          </div>
          <button
            class="action w-full flex justify-center text-center bg-otherBgFour p-3 mt-3 text-sm"
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

// states
const subtotal = ref(null)
const shippingTotal = ref(null)
const totalAmount = ref(0)

// methods

// get total banlance of items in cart;
const getTotal = computed(() => {
  const total = Object.entries(useStore.cart).reduce((total, product) => {
    return total + product[1].price * product[1].quantity
  }, 0)
  return total
})

// total amount of items
subtotal.value = computed(() => getTotal.value)

const calculateShippingRate = computed(() => {
  const shippingCost = getTotal.value / 90
  return shippingCost
})
// total shipping cost for items in cart
shippingTotal.value = computed(() => calculateShippingRate.value)

const calculateTotalAmount = computed(() => {
  const total = getTotal.value + calculateShippingRate.value
  return total.toFixed(2)
})
totalAmount.value = computed(() => calculateTotalAmount.value)

// checkout validations

const checkOutNow = () => {
  if (Object.values(useStore.cart).length < 1) {
    alert('cannot check out when store is empty, buy some products!')
    router.push('/')
  } else if (Object.values(useStore.cart).length > 1 && !agreeToTermAndConditions.value) {
    alert('Agree to terms and condition please')
    return false
  } else {
    router.push('/check-out')
    return (useStore.navState = false)
  }
}
</script>

<style scoped>
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