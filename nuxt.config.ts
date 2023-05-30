// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/assets/css/tailwind.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  //https://favicon.io/favicon-converter/
  app: {
    head: {
      link: [{ rel: "icon", type: "image/png", href: "digitize.png" }],
    },
  },

  // vue: {
  //   compilerOptions: {
  //     isCustomElement: (tag) => ["lite-youtube"].includes(tag),
  //   },
  // },

  modules: ["@pinia/nuxt"],
});
