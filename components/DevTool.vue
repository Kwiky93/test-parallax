<template>
  <div class="devTool">
    Test {{ x }} {{ y }} <br />Tilt:{{ parallax.tilt }} Roll:
    {{ parallax.roll }}
  </div>
</template>

<script setup>
const props = defineProps(["main"]);
const { x, y, sourceType } = useMouse(props.main);
const parallax = useParallax(props.main);
</script>

<style>
.devTool {
  position: fixed;
  top: 0;
  background-color: grey;
  padding: 10px;
  width: 200px;
}
</style>
