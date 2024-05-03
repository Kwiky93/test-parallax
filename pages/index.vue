<template>
  <div ref="menu" class="menu" @wheel="test">
    <div class="background" :style="parallaxBackground">BEST DESIGN</div>

    <div class="testFlex" :style="transform">
      <div class="testFlexCol" v-for="col in arrayLinksFlex">
        <div v-for="item in col">
          <CardMenu :data="item" :width="calcWidth"></CardMenu>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
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

const arrayLinksFlex = [
  [
    {
      color: "green",
      pic: "/pics/3.jpg",
      link: "/test3",
    },
    {
      color: "green",
      pic: "/pics/4.jpg",
      link: "/test4",
    },
    {
      color: "green",
      pic: "/pics/5.jpg",
      link: "/test5",
    },
  ],
  [
    {
      color: "red",
      pic: "/pics/1.jpg",
      link: "/test",
    },
    {
      color: "purple",
      pic: "/pics/7.jpg",
      link: "/test7",
    },
    {
      color: "white",
      pic: "/pics/8.jpg",
      link: "/test8",
    },
  ],

  [
    {
      color: "yellow",
      pic: "/pics/6.jpg",
      link: "/test6",
    },
    {
      color: "blue",
      pic: "/pics/2.jpeg",
      link: "/test2",
    },

    {
      color: "red",
      pic: "/pics/9.png",
      link: "/test9",
    },
  ],
  [
    {
      color: "red",
      pic: "/pics/10.jpg",
      link: "/test10",
    },
  ],
];
</script>

<style>
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
  transition: ".3s ease-out all";
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
</style>
