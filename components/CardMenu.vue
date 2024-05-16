<template>
  <!-- <v-rect
    ref="cardMenu"
    @mouseover="mouseenter"
    :config="configRect"
    style="cursor: pointer"></v-rect> -->
  <!-- <Transition name="card" > -->
  <div
    ref="cardMenu"
    :class="[{ 'card-active': linkClicked }, 'card']"
    :key="!linkClicked"
    @click="onCLickLink">
    <!-- <NuxtLink :to="props.data.link"> -->
    <img
      :src="props.data.pic"
      :class="{ fullSize: hasClick, clicked: linkClicked }"
      :width="calcWidth" />
  </div>

  <!-- </NuxtLink> -->

  <!-- </Transition> -->
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

const bounding = useElementBounding(cardMenu);

const hasClick = ref(false);
const mouseenter = function () {
  // console.log(rev);
  stage.container().style.cursor = "pointer";
};
// cardMenu.on("mouseenter", f);

// cardMenu.on("mouseleave", function () {
//   stage.container().style.cursor = "default";
// });
const linkClicked = ref(false);

function onCLickLink(event) {
  // hasClick.value = true;
  linkClicked.value = true;
  console.log("Bounding", bounding);

  navigateTo({ path: props.data.link });
}
const calcWidth = computed(() => {
  return (window.innerWidth - 100 - 4 * 50) / 5;
});
// const getOffsets = computed(() => {
//   // const element = document.querySelector(
//   //   "#__nuxt > div > div.testFlex > div:nth-child(2) > div:nth-child(1) > div"
//   // );
//   return cardMenu.offsetWidth;

//   // return {
//   //   x: cardMenu.offsetTop,
//   //   y: cardMenu.offsetLeft,
//   //   w: cardMenu.offsetWidth,
//   //   h: cardMenu.offsetHeight,
//   // };
// });
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

/*.card-enter-active {
  animation: card-in 0.5s reverse;
}
.card-leave-active {
   animation: card-in 0.5s reverse;
}
@keyframes card-in {
  0% {

    opacity: 0;
  }
  50% {

  }
  100% {

    opacity: 1;
  }
}*/
</style>
