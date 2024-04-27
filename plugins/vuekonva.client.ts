import VueKonva from "vue-konva";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueKonva);
  // return {
  //   provide: {
  //     VueKonva,
  //   },
  // };
  // nuxtApp.vueApp.use(VueKonva);
});
