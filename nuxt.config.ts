// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  plugins: [{ src: "~/plugins/vuekonva.client" }],
  modules: ["@vueuse/nuxt", "@pinia/nuxt"],
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
  pinia: {
    storesDirs: ["./stores/**"],
  },
  // build: {
  //   transpile: ["konva"],
  // },
});
