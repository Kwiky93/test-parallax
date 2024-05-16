<template>
  <div ref="page" class="page" :style="{ backgroundImage: `url(${url.pic})` }">
    PAge {{ route.params.id }} {{ url }}
    <!-- <img :src="url.pic" /> -->
  </div>
</template>

<script setup>
definePageMeta({
  pageTransition: {
    name: "card",
    mode: "out-in", // default
  },
});

const route = useRoute();
const storePages = usePages();
const url = storePages.getPicsByLink(route.params.id);
</script>

<style>
.page {
  background-position: center;
  height: 100%;
  position: absolute;
  width: 100%;
  margin: 0;
  background-size: cover;
  top: 0;
  overflow: hidden;
  left: 0;
}
.card-enter-active,
.card-leave-active {
  transition: all 1s;
}
.card-enter-from {
  scale: 0.2;
}
.card-leave-to {
  opacity: 0;

  /* filter: blur(1rem); */
}
</style>
