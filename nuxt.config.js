/* eslint-disable camelcase */
export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  ssr: true,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'UNYOOON',
    htmlAttrs: {
      lang: 'ja',
      prefix: 'og: http://ogp.me/ns#'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'a coder based in Japan'
      },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'x-default', href: 'https://unyooon.com/ja/' },
      {
        rel: 'alternate',
        hreflang: 'ja',
        href: 'https://unyooon.com/ja/'
      },
      {
        rel: 'alternate',
        hreflang: 'en',
        href: 'https://unyooon.com/en/'
      },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon-green.png' },
      { rel: 'android-chrome', size: '192x192', href: '/android-chrome-192x192-green.png' },
      { rel: 'android-chrome', size: '512x512', href: '/android-chrome-512x512-green.png' },
      { rel: 'mask-icon', href: '/apple-touch-icon.png', colors: '#2F7777' },

      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@100;200;300;400;500;600;700;800;900&display=swap'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;200;300;400;500;600;700;800;900&display=swap'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Bevan'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swapm'
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [{ src: '~/assets/sass/app.scss', lang: 'scss' }],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/fontawesome.ts'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // '@nuxtjs/stylelint-module'
    '@nuxt/postcss8'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/google-gtag',
    '@nuxt/content',
    '@nuxtjs/i18n',
    '@nuxtjs/style-resources',
    '@nuxtjs/dayjs',
    '@nuxtjs/sitemap'
  ],

  styleResources: {
    scss: ['~/assets/sass/variables.scss']
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {}
      }
    },
    extend (config, ctx) {
      config.node = {
        fs: 'empty'
      };
    }
  },

  'google-gtag': {
    id: process.env.GOOGLE_ANALYTICS_ID,
    debug: true
  },

  i18n: {
    strategy: 'prefix_and_default',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root' // recommended
    },
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        file: 'en-US.json'
      },
      {
        code: 'ja',
        iso: 'ja-JP',
        file: 'ja-JP.json'
      }
    ],
    langDir: 'locales/',
    vueI18n: {
      fallbackLocale: 'ja'
    },
    lazy: true
  },

  generate: {
    async routes () {
      const { $content } = require('@nuxt/content');
      const articles_ja = await $content('ja', 'articles')
        .where({ public: true })
        .only(['path'])
        .fetch();
      const articles_en = await $content('en', 'articles')
        .where({ public: true })
        .only(['path'])
        .fetch();
      return articles_ja
        .concat(articles_en)
        .map(article => (article.path === '/index' ? '/ja' : article.path));
    }
  },

  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://unyooon.com',
    routes: async () => {
      const { $content } = require('@nuxt/content');
      const articles_ja = await $content('ja', 'articles')
        .where({ public: true })
        .only(['path'])
        .fetch();
      const articles_en = await $content('en', 'articles')
        .where({ public: true })
        .only(['path'])
        .fetch();
      return articles_ja.concat(articles_en).map(a => a.path);
    }
  },

  publicRuntimeConfig: {
    GOOGLE_ANALYTICS_ID: process.env.GOOGLE_ANALYTICS_ID
  },

  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.ts',
    exposeConfig: false,
    config: {},
    injectPosition: 0,
    viewer: true
  },

  axios: {}
};
