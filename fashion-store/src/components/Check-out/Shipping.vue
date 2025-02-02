<template>
  <main class="mt-10 flex justify-between gap-20 max-md:flex-col">
    <form id="form" class="form w-2/4 max-md:w-full">
      <label for="flat/house-no"></label>
      <input
        type="text"
        name="addresss"
        id="address"
        placeholder="Flat/House no"
        v-model="houseN0"
      />
      <label for="address"></label>
      <input type="text" name="address" id="address" placeholder="Address" v-model="address" />
      <div class="flex gap-2">
        <input type="text" name="address" id="address" placeholder="City" v-model="city" />

        <input type="text" name="address" id="address" placeholder="State" v-model="state" />
      </div>
      <div class="flex items-center gap-2">
        <input
          type="text"
          name="postal-code"
          id="postal-code"
          placeholder="Postal Code"
          v-model="postal"
        />

        <input
          type="text"
          name="landmark"
          id="address"
          placeholder="Famous Landmark"
          v-model="postal"
        />
      </div>
      <div class="flex items-center gap-1">
        <input type="checkbox" checked="no" />
        <label for="confirm-billing-address" class="text-sm"
          >My shipping and billing address are th same</label
        >
      </div>
      <button class="mt-3 bg-inputBg w-1/4 max-md:w-full p-3 text-sm font-bold">Continue</button>
    </form>
    <div class="items-in-cart w-1/4 mb-10 max-md:w-full">
      <div class="col w-full min-h-96 overflow-y-auto border-2 border-primary p-6">
        <h3 class="mb-5 font-semibold">Your Order</h3>

        <div
          v-for="product in useStore.cart"
          :key="product.id"
          class="grid grid-cols-3 gap-3 items-start mb-5"
        >
          <div class="image w-full h-[140px]">
            <img :src="product.images" :alt="product.title" class="w-full h-full object-cover" />
          </div>
          <div class="spec flex flex-col gap-3">
            <small class="name mb-2">{{
              product.title.length < 20 ? product.title : product.title.slice(0, 25)
            }}</small>
            <small class="name mb-2">{{ product.category.name }}/L</small>

            <small class="mt-2">{{ product.quantity }}</small>
          </div>

          <button class="text-sm underline font-bold max-md:text-small">Change</button>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { piniaStore } from '@/stores/store'
const useStore = piniaStore()

onMounted(() => {
  useStore.navState = !useStore.navState
  useStore.footerState = !useStore.footerState
})

onUnmounted(() => {
  useStore.navState = true
  useStore.footerState = true
})

const houseN0 = ref('')
const address = ref('')
const city = ref('')
const state = ref('')
const postal = ref('')
const landmark = ref('')
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
</style>