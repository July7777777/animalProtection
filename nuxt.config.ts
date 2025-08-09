// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  ssr: true,
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  devServer: {
    port: 3001
  },
  css: [
    '~/assets/css/main.css',
    '~/assets/css/global.css',
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/ui'
  ],
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  nitro: {
    prerender: {
      crawlLinks: true, // Enable link crawling
      routes: [
        '/',
        '/about',
        '/news',
        '/projects',
        '/projects/panda',
        '/projects/forest',
        '/projects/marine',
        '/projects/crested-ibis',
        '/projects/snow-leopard',
        '/species',
        '/species/golden-monkey',
        '/species/panda',
        '/species/snow-leopard'
      ] // Explicit routes including all pages
    }
  }
})