<template>
  <div ref="konva" class="konva">
    <v-stage
      ref="stage"
      :config="configKonva"
      @dragmove="test1"
      @mousedown="onDown"
      @mouseup="onUp"
      @mousemove="onMouseMove"
      @draggable="onMouseMove">
      <v-layer>
        <CardMenu
          v-for="i in 9"
          :options="{
            x: marginCard + (i - 1) * (marginCard + cardWidth),
            y: 50,
            w: cardWidth,
            h: cardWidth,
          }"></CardMenu>
      </v-layer>
    </v-stage>
  </div>
</template>

<script>
const konva = ref(null);

const countCardInWidth = 9;
const marginCard = 50;

const cardWidth = computed(() => {
  return (
    (window.innerWidth - marginCard * (countCardInWidth + 1)) / countCardInWidth
  );
});

const onDownValue = ref(false);

const onDown = function () {
  onDownValue.value = true;
};

const onUp = function () {
  onDownValue.value = false;
};

const onMouseMove = function (event) {
  if (!onDownValue.value) return;

  console.log(x, y);
  control_x = x * 2;
  control_y = y * 2;
};

const configKonva = ref({
  x: control_x,
  y: control_y,
  width: window.innerWidth,
  height: window.innerHeight,
  dragDistance: 50,
  // initialX: 20,
  // initialY: 20,
  draggable: true,
  onDragMove: ({ evt: { x, y } }) => {
    this.setState({ x, y });
  },
});
</script>

<style>
.konva {
  position: absolute;
  margin: 0;
  top: 0;
  left: 0;
}
</style>
