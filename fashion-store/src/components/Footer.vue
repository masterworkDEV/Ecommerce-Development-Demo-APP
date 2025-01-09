<template>
  <div class="footer w-full mt-56">
    <!-- <div
      class="row flex justify-between items-center pt-20 px-24 max-md:px-4 max-md:justify-center max-md:gap-5"
    > -->
    <div
      class="grid grid-cols-2 pt-20 px-24 max-md:px-10 max-sm:px-20 place-content-center place-items-start"
    >
      <div class="col">
        <p class="text-small font-primary max-sm:text-small max-smaller:text-xSmall">INFO</p>
        <ul class="mt-5">
          <li>
            <a
              href="#"
              class="text-small font-text max-md:text-smaller max-sm:text-small hover:underline transition-all max-smaller:text-xSmall"
              >PRICING</a
            >
          </li>
          <li>
            <a
              href="#"
              class="text-small font-text max-md:text-smaller max-sm:text-small hover:underline transition-all max-smaller:text-xSmall"
              >ABOUT</a
            >
          </li>
          <li>
            <a
              href="#"
              class="text-small font-text max-md:text-smaller max-sm:text-small hover:underline transition-all max-smaller:text-xSmall"
              >CONTACT</a
            >
          </li>
        </ul>
        <p class="mt-16 text-small font-primary max-smaller:text-xSmall">LAGUAGES</p>
        <ul class="mt-5">
          <li>
            <a
              href="#"
              class="text-small max-md:text-smaller max-sm:text-small hover:underline transition-all max-smaller:text-xSmall"
              >ENG</a
            >
          </li>
          <li>
            <a
              href="#"
              class="text-small font-text max-md:text-smaller max-sm:text-small hover:underline transition-all max-smaller:text-xSmall"
              >ESP</a
            >
          </li>
          <li>
            <a
              href="#"
              class="text-small font-text max-md:text-smaller max-sm:text-small hover:underline transition-all max-smaller:text-xSmall"
              >SVE</a
            >
          </li>
        </ul>
      </div>
      <div class="col">
        <p class="text-small max-md:text-small font-primary">TECHNOLOGIES</p>
        <div class="mt-5 flex justify-start">
          <Logo />
        </div>
        <div class="flex items-start justify-center gap-2">
          <h1 class="text-8xl max-lg:text-6xl max-sm:text-h3 font-text">
            <span>VR</span>
            <b>XIV <br />QR</b>
          </h1>
          <p class="mt-3 font-secondary text-small max-md:text-smaller max-sm:text-xSmall">
            Near-field communication
          </p>
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
