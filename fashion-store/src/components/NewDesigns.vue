<template>
  <section>
    <div class="grid-view mt-24">
      <div class="row grid grid-cols-4 gap-5">
        <article class="grid-card w-full">
          <img
            src="https://img.freepik.com/free-photo/portrait-male-wearing-cap-sitting_23-2148854463.jpg?t=st=1730341412~exp=1730345012~hmac=131fffda28fbfbeddcffb28d9032d8a3b85dc5ab12c58becd14f2df11ae06e6e&w=740"
            alt=""
          />
        </article>
        <article class="grid-card mt-10 w-full">
          <img
            src="https://img.freepik.com/free-photo/portrait-man-posing-traditional-african-attire-outdoors_23-2150572628.jpg?t=st=1730341291~exp=1730344891~hmac=2c37ed6088fc846b6fd90bf7b3e249084404181f80404f712e1410da13e78fbc&w=740"
            alt=""
          />
        </article>
        <article class="grid-card w-full">
          <img
            src="https://img.freepik.com/free-photo/school-scene-with-queer-teens_23-2150379345.jpg?t=st=1730341190~exp=1730344790~hmac=aefbada7ba5ea95af77f3866109a9f62eaceccd8ced76fe9ce8abed90f1d99cf&w=740"
            alt="School scene 
"
          />
        </article>
        <article class="grid-card mt-10 w-full">
          <img
            src="https://img.freepik.com/premium-photo/man-trendy-fashion-clothes-collage-white_1199132-207849.jpg?w=996"
            alt=""
          />
        </article>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style>
.grid-view {
  overflow: -moz-hidden-unscrollable;
  overflow: hidden;
}
.grid-card {
  height: 400px;
}
.grid-card > img {
  width: 100%;
  height: 100%;
  object-position: center;
  object-fit: cover;
}
</style>
