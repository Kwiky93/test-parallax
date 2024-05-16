<template>
  <div ref="menu" class="menu" @wheel="test">
    <div class="background" :style="parallaxBackground">BEST DESIGN</div>

    <div class="testFlex" :style="transform">
      <div class="testFlexCol" v-for="col in storePages.getPages">
        <div v-for="item in col">
          <CardMenu :data="item" :width="calcWidth"></CardMenu>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  pageTransition: {
    name: "menu",
    mode: "out-in", // default
  },
});
// provide(startPosition, getOffsets());
const storePages = usePages();
const menu = ref(null);

const parallax = reactive(useParallax(menu));

let zoom = ref(1);

const test = function (event) {
  if (
    (event.deltaY == -100 && zoom.value < 1.25) ||
    (event.deltaY == 100 && zoom.value > 0.75)
  ) {
    zoom.value = zoom.value - event.deltaY / 1000;
  }
};

const parallaxBackground = computed(() => ({
  transform: `translateX(calc(-50% + ${
    -parallax.tilt * 100
  }px)) translateY(calc(-100% + ${parallax.roll * 100}px))`,
}));

const transform = computed(() => ({
  transform: `translateX(${-parallax.tilt * 200}px) translateY(${
    parallax.roll * 200
  }px)`,
  scale: zoom.value,
}));

const calcWidth = computed(() => {
  return (window.innerWidth - 100 - 4 * 50) / 5;
});
</script>

<style lang="scss">
.menu {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  margin: 0;
  /* padding: 50px; */
}
.background {
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 72pt;
  font-weight: bold;
  font-family: sans-serif;
  text-transform: uppercase;
  // transition: ".3s ease-out all";
}

.testFlex {
  position: relative;
  margin: 50px;
  height: -webkit-fill-available;
  display: flex;
  flex-direction: row;
  justify-content: center;
  transition: transform 1s ease;
  transition: scale 2s ease;
}
.testFlexCol {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.menu-enter-active,
.menu-leave-active {
  transition: all 2s;
  .background {
    // color: blue;
    transition: all 2s;
  }
  .testFlex {
    transition: all 2s;
    .card-active {
      transition: all 2s;
      .img {
        transition: all 2s;
      }
    }
  }

  :not(.card-active) {
    transition: all 2s;
  }
}
// .main-enter-from {
//   opacity: 0;
// }
.menu-leave-to {
  // opacity: 0;
  .background {
    opacity: 0;
  }
  .card:not(.card-active) {
    opacity: 0;
  }
  .testFlex {
    transform: translate(0, 0) !important;
    scale: 1 !important;
    margin: 0;
    .card-active {
    }
    img {
      // position: absolute;
      // left: 0;
      // top: 0;
    }
  }

  /* filter: blur(1rem); */
}
</style>
