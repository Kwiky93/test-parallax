<template>
  <v-rect
    ref="cardMenu"
    @mouseover="mouseenter"
    :config="configRect"
    style="cursor: pointer"></v-rect>
</template>

<script setup>
const props = defineProps(["options"]);
const configRect = ref({
  x: 0,
  y: 0,
  width: props.options.w,
  height: props.options.h,
  fill: "red",
  stroke: "black",
  strokeWidth: 4,
});

const cardMenu = ref(null);

const mouseenter = function () {
  // console.log(rev);
  stage.container().style.cursor = "pointer";
};
// cardMenu.on("mouseenter", f);

// cardMenu.on("mouseleave", function () {
//   stage.container().style.cursor = "default";
// });
</script>

<style>
.cardMenu {
  cursor: pointer;
}
</style>
