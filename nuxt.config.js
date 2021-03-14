export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  server: {
    port: 5213, 
  },
  loading: '~/components/Loading.vue',
  head: {
    title: 'LikeIT',
    htmlAttrs: {
      lang: 'ru'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'msapplication-TileColor', content: '#da532c' },
      { name: 'theme-color', content: '#ffffff' }
    ],
    link: [
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'mask-icon', type: 'image/png', color: '#5bbad5', href: '/safari-pinned-tab.svg' }
    ]
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/precss/main.pcss',
    '~/assets/css/fonts.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~filters/nl2br.js',
    { src: '~/plugins/vue-gallery.js', ssr: false },
    { src: '~/plugins/slider.js', ssr: false },
    { src: '~/plugins/vuelidate.js' },
    { src: '~/plugins/locomotive.js', mode: 'client' },
    { src: '~/plugins/scroll.js' },
    { src: '~/plugins/locomotiveServer.js', mode: 'server' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/tailwindcss',
    '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/strapi'
  ],
  strapi: {
    entities: ['homepage', 'courses', 'categories', 'ages', 'testimonials', 'prices', 'site-settings', 'leads', 'howtopay'],
    url: 'https://school.likeit.website'
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  env: {
    NODE_TLS_REJECT_UNAUTHORIZED: 0,
    strapiBaseUri: process.env.API_URL || 'https://school.likeit.website'
  }
}
