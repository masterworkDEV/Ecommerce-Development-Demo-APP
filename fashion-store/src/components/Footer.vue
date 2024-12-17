<template>
  <div class="footer w-full mt-56">
    <div
      class="row flex justify-between items-center pt-20 px-24 max-md:px-4 max-md:justify-center max-md:gap-5"
    >
      <div class="col">
        <p class="text-smallerText max-sm:text-smallestText">INFO</p>
        <ul class="mt-5">
          <li>
            <a
              href="#"
              class="text-tabletText max-md:text-mobileText max-sm:text-smallerText hover:underline transition-all"
              >PRICING</a
            >
          </li>
          <li>
            <a
              href="#"
              class="text-tabletText max-md:text-mobileText max-sm:text-smallerText hover:underline transition-all"
              >ABOUT</a
            >
          </li>
          <li>
            <a
              href="#"
              class="text-tabletText max-md:text-mobileText max-sm:text-smallerText hover:underline transition-all"
              >CONTACT</a
            >
          </li>
        </ul>
        <p class="mt-16 text-smallerText">LAGUAGES</p>
        <ul class="mt-5">
          <li>
            <a
              href="#"
              class="text-tabletText max-md:text-mobileText max-sm:text-smallerText hover:underline transition-all"
              >ENG</a
            >
          </li>
          <li>
            <a
              href="#"
              class="text-tabletText max-md:text-mobileText max-sm:text-smallerText hover:underline transition-all"
              >ESP</a
            >
          </li>
          <li>
            <a
              href="#"
              class="text-tabletText max-md:text-mobileText max-sm:text-smallerText hover:underline transition-all"
              >SVE</a
            >
          </li>
        </ul>
      </div>
      <div class="col mr-80 max-xl:mr-52 max-lg:mr-10 max-md:mr-0">
        <p class="text-smallerText max-md:text-smallestText">TECHNOLOGIES</p>
        <div class="mt-10">
          <Logo />
        </div>
        <div class="flex items-start justify-center gap-3">
          <h1 class="text-8xl max-lg:text-6xl max-sm:text-5xl max-smaller:text-4xl">
            <span>VR</span>
            <b>XIV <br />QR</b>
          </h1>
          <p class="mt-3 text-tabletText max-md:smallerText max-sm:text-smallestText">
            Near-field communication
          </p>
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
