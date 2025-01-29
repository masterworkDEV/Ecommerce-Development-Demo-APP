<template>
  <footer class="footer relative mt-40 bottom-0 max-md:mt-20">
    <div
      class="grid grid-cols-2 pt-20 px-24 max-md:px-10 max-sm:px-14 place-content-center place-items-start"
    >
      <div class="col">
        <p class="text-small max-sm:tex:text-xSmall">
          <b> INFO </b>
        </p>
        <ul class="mt-5">
          <li>
            <a
              href="#"
              class="text-small font-text max-sm:text-small hover:underline transit:text-xSmall"
              >PRICING</a
            >
          </li>
          <li>
            <a
              href="#"
              class="text-small font-text max-sm:text-small hover:underline transit:text-xSmall"
              >ABOUT</a
            >
          </li>
          <li>
            <a
              href="#"
              class="text-small font-text max-sm:text-small hover:underline transit:text-xSmall"
              >CONTACT</a
            >
          </li>
        </ul>
        <p class="mt-16 text-small">
          <b> LAGUAGES </b>
        </p>
        <ul class="mt-5">
          <li>
            <a href="#" class="text-small max-sm:text-small hover:underline transit:text-xSmall"
              >ENG</a
            >
          </li>
          <li>
            <a
              href="#"
              class="text-small font-text max-sm:text-small hover:underline transit:text-xSmall"
              >ESP</a
            >
          </li>
          <li>
            <a
              href="#"
              class="text-small font-text max-sm:text-small hover:underline transit:text-xSmall"
              >SVE</a
            >
          </li>
        </ul>
      </div>
      <div class="col">
        <p class="text-small max-md:text-small">
          <b> TECHNOLOGIES </b>
        </p>
        <div class="mt-5 flex justify-start">
          <Logo />
        </div>
        <div class="flex items-start justify-center gap-2 mt-2">
          <h1 class="text-8xl max-xl:text-6xl max-sm:text-h3">
            <span>VR</span>
            <b>XIV <br />QR</b>
          </h1>
          <p class="mt-3 font-secondary text-small max-sm:text-xSmall max-sm:hidden">
            Near-field communication
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import Logo from './Logo.vue'
</script>

<style>
.footer {
  background: url(../assets/images/footer.png);
  width: 100%;
  min-height: 450px;
}
</style>
