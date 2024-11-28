<template>
  <div class="footer w-full mt-56">
    <div class="row p-24 flex justify-start items-center gap-[26rem] max-sm:p-10 max-sm:gap-10">
      <div class="col">
        <p class="text-[.65rem]">INFO</p>
        <ul class="mt-5">
          <li><a href="#" class="text-[.75rem]">PRICING</a></li>
          <li><a href="#" class="text-[.75rem]">ABOUT</a></li>
          <li><a href="#" class="text-[.75rem]">CONTACT</a></li>
        </ul>
        <p class="mt-16 text-[.65rem]">LAGUAGES</p>
        <ul class="mt-5">
          <li><a href="#" class="text-[.75rem]">ENG</a></li>
          <li><a href="#" class="text-[.75rem]">ESP</a></li>
          <li><a href="#" class="text-[.75rem]">SVE</a></li>
        </ul>
      </div>
      <div class="col">
        <p class="text-[.65rem]">TECHNOLOGIES</p>
        <div class="mt-10">
          <Logo />
        </div>
        <div class="flex items-start justify-center gap-3">
          <h1 class="text-8xl max-md:text-6xl max-sm:text-5xl">
            <span>VR</span>
            <b>XIV <br />QR</b>
          </h1>
          <p class="mt-3 text-[.75rem] max-sm:text-[.6rem]">Near-field communication</p>
          <!-- / -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Logo from './Logo.vue'
</script>

<style>
.footer {
  background: url(../assets/images/footer.png);
  width: 100%;
  height: 500px;
}
</style>
