<template>
  <!-- <v-rect
    ref="cardMenu"
    @mouseover="mouseenter"
    :config="configRect"
    style="cursor: pointer"></v-rect> -->
  <!-- <div> -->
  <NuxtLink :to="props.data.link">
    <img
      :src="props.data.pic"
      :class="{ fullSize: hasClick }"
      :width="calcWidth" />
  </NuxtLink>
  <!-- </div> -->
</template>

<script setup>
const props = defineProps(["options", "data"]);
// const configRect = ref({
//   x: props.options.x,
//   y: props.options.y,
//   width: props.options.w,
//   height: props.options.h,
//   fill: props.options.color || "red",
//   stroke: "black",
//   strokeWidth: 4,
// });

const cardMenu = ref(null);
const hasClick = ref(false);
const mouseenter = function () {
  // console.log(rev);
  stage.container().style.cursor = "pointer";
};
// cardMenu.on("mouseenter", f);

// cardMenu.on("mouseleave", function () {
//   stage.container().style.cursor = "default";
// });
function onCLickLink() {
  // hasClick.value = true;
  navigateTo({ path: props.data.link });
}
const calcWidth = computed(() => {
  return (window.innerWidth - 100 - 4 * 50) / 5;
});
</script>

<style scoped>
.cardMenu {
  cursor: pointer;
}
img {
  margin: 25px;
  transition: transform 0.2s ease;
  object-fit: cover;
  height: -webkit-fill-available;
  cursor: pointer;
  /* transition: 1s linear; */
}
img:hover {
  transform: scale(1.02);
}
.fullSize {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}
</style>
