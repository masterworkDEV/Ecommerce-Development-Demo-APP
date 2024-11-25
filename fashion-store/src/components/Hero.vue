<template>
  <main>
    <ul>
      <li>MEN</li>
      <li>WOMEN</li>
      <li>KIDS</li>
    </ul>
    <div class="search-container mt-3 relative">
      <label for="search" class="search-icon">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M20 20L15.8033 15.8033M18 10.5C18 6.35786 14.6421 3 10.5 3C6.35786 3 3 6.35786 3 10.5C3 14.6421 6.35786 18 10.5 18C14.6421 18 18 14.6421 18 10.5Z"
              stroke="#1e1e1e"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </g>
        </svg>
      </label>
      <input
        type="text"
        name="search"
        autocorrect="on"
        class="input-feild p-2 text-sm w-[400px] h-[50px] border bg-[#d9d9d9]"
      />
      <label for="search" class="search-text">
        <span> Search </span>
      </label>
    </div>
    <div class="new-collection mt-24">
      <div v-if="useStore.isLoading" class="w-full">
        <div class="row flex justify-center gap-5">
          <div class="col w-full">
            <div class="movie--isloading">
              <div class="loading-image h-[365px]"></div>
              <div class="loading-content">
                <div class="loading-text-container">
                  <div class="loading-main-text w-[80%]"></div>
                  <div class="loading-sub-text w-[60%]"></div>
                </div>
                <div class="buttons flex gap-5">
                  <div class="loading-btn"></div>
                  <div class="loading-btn"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="col w-full">
            <div class="movie--isloading">
              <div class="loading-image h-[400px]"></div>
              <div class="loading-content">
                <div class="loading-text-container"></div>
              </div>
            </div>
          </div>

          <div class="col w-full">
            <div class="movie--isloading">
              <div class="loading-image h-[400px]"></div>
              <div class="loading-content">
                <div class="loading-text-container"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <div v-if="useStore.isReady" class="row flex justify-center gap-5 w-full">
          <div class="col">
            <h1 class="text-6xl">
              <b>
                NEW <br />
                COLLECTION
              </b>
            </h1>
            <p>Summer <br />2024</p>
            <div class="flex items-center gap-2 mt-52">
              <button class="go-to-shop w-full p-2 bg-[#d9d9d9] text-start gap-5">
                <span>Go To Shop</span>
                <svg
                  fill="#000000"
                  height="none"
                  width="none"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 512.036 512.036"
                  xml:space="preserve"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <g>
                      <g>
                        <path
                          d="M508.916,248.351L295.583,35.018c-4.267-4.053-10.987-3.947-15.04,0.213c-3.947,4.16-3.947,10.667,0,14.827l195.093,195.2 H10.996c-5.333,0-10.133,3.84-10.88,9.067c-0.96,6.613,4.16,12.267,10.56,12.267h464.96L280.543,461.685 c-4.267,4.053-4.373,10.88-0.213,15.04c4.053,4.267,10.88,4.373,15.04,0.213c0.107-0.107,0.213-0.213,0.213-0.213l213.333-213.333 C513.076,259.338,513.076,252.511,508.916,248.351z"
                        ></path>
                      </g>
                    </g>
                  </g>
                </svg>
              </button>
              <div class="btns flex justify-center items-center gap-2">
                <button class="border border-gray-400 p-2 cursor-default">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        d="M15 7L10 12L15 17"
                        stroke="#000000"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </g>
                  </svg>
                </button>
                <button class="border border-gray-400 p-2 cursor-default">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        d="M10 7L15 12L10 17"
                        stroke="#000000"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </g>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div class="w-full">
            <div class="w-full flex gap-10">
              <article
                class="w-full"
                v-for="product in useStore.products.slice(0, 2)"
                :key="product.id"
              >
                <img :src="product.images" :alt="product.title" class="w-full h-[425px] shadow" />
              </article>
            </div>
          </div>
        </div>
        <div v-else class="row flex justify-center gap-5 w-full">
          <h1>error cannot display data</h1>
        </div>
        <!-- isready ends -->
      </div>
    </div>
  </main>
</template>

<script setup>
import { piniaStore } from '@/stores/store'

const useStore = piniaStore()
</script>

<style>
.search-icon {
  position: absolute;
  transform: translate(10px, 50%);
}
.search-icon > svg {
  width: 25px;
  width: 25px;
}

.search-text {
  position: absolute;
  transform: translate(-80px, 50%);
}
.search-text > span {
  color: #8a8a8a;
}

.go-to-shop {
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-between;
}
.go-to-shop > svg {
  height: 25px;
  width: 25px;
}

.btns svg {
  width: 25px;
  height: 25px;
}
</style>
