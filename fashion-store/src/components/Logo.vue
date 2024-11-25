<template>
  <div class="logo">
    <svg
      width="256px"
      height="256px"
      viewBox="-2.4 -2.4 28.80 28.80"
      fill="#fff"
      xmlns="http://www.w3.org/2000/svg"
      transform="matrix(-1, 0, 0, 1, 0, 0)rotate(45)"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M18 6H6V18H18V6ZM4.5 4.5V19.5H19.5V4.5H4.5Z"
          fill="#000"
        ></path>
      </g>
    </svg>
    <div class="layer-1"></div>
  </div>
</template>

<script setup></script>

<style>
.logo {
  position: relative;
  width: 40px;
  height: 40px;
}
.logo > svg {
  width: 40px;
  height: 40px;
  z-index: 1;
}
</style>
