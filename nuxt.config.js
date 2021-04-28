export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'server',
  generate: {
    dir: 'dist'
  },
  vue: {
    config: {
      productionTip: false
    }
  },
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Slash - The ultimate app for do-ers.',
    meta: [
      { charset: 'utf-8' },
      { property: 'og:image', content: '/images/og.png' },
      // { property: "og:video", content: "/videos/og.mp4" },
      // { property: "og:video:type", content: "video/mp4"},
      // { property: "og:video:width", content: "802" },
      // { property: "og:video:height", content: "1032" },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'A new breed of productivity app. Slice through your to-do lists by staying focused and in flow.'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }],
    script: [
      { src: '/js/jquery-1.12.0.min.js', body: true },
      { src: '/js/main.js', body: true },
      { src: 'https://www.googleoptimize.com/optimize.js?id=GTM-WRJRZJC'}
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['~/assets/scss/style'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [{ src: '~/plugins/plyr' }],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-analytics'],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    'cookie-universal-nuxt',
    [
      'nuxt-facebook-pixel-module',
      {
        track: 'PageView',
        pixelId: '551351942291271',
        autoPageView: true,
        disabled: false,
        debug: true
      }
    ]
  ],

  googleAnalytics: {
    id: 'UA-150389140-1'
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    baseURL: process.env.BASE_URL || 'http://localhost:3000'
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    extend: function(config, { isDev, isClient }) {
      config.node = {
        fs: 'empty'
      }
    }
  }
}
