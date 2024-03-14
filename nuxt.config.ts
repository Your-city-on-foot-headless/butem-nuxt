// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  runtimeConfig: {
    public: {
      wordpressUrl: 'http://butem-bedrock-wp.ddev.site/wp-json/wp/v2'
    }
  }
  // routeRules: {
  //   '/**': {
  //     swr: true   
  //   }
  // }
})
