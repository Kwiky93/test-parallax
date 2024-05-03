<template>
  <div ref="page" class="page" :style="{ backgroundImage: `url(${url.pic})` }">
    PAge {{ route.params.id }} {{ url }}
    <!-- <img :src="url.pic" /> -->
  </div>
</template>

<script setup>
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
</style>
