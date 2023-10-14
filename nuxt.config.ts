// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: "@nuxt-themes/typography",
  modules: ["@nuxt/content", "@nuxtjs/color-mode"],
  content: {
    documentDriven: true,
  },
  colorMode: {
    classSuffix: "",
  },
});
