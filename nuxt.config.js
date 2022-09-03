export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  ssr: true,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'UNYOOON BLOG',
    htmlAttrs: {
      lang: 'ja',
      prefix: 'og: http://ogp.me/ns#'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '2年目ITエンジニアのしがないBLOG' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'x-default', href: 'https://blog.unyooon.com/ja/' },
      { rel: 'alternate', hreflang: 'ja', href: 'https://blog.unyooon.com/ja/' },
      { rel: 'alternate', hreflang: 'en', href: 'https://blog.unyooon.com/en/' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@100;200;300;400;500;600;700;800;900&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;200;300;400;500;600;700;800;900&display=swap' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    { src: '~/assets/sass/app.scss', lang: 'scss' }
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // '@nuxtjs/stylelint-module'
    '@nuxtjs/google-gtag',
    '@nuxt/postcss8'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxt/content',
    'nuxt-i18n',
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
    }
  },

  i18n: {
    strategy: 'prefix_and_default',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected'
    },
    locales: [{
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
    }
  },

  generate: {
    async routes() {
      const { $content } = require('@nuxt/content');
      const files = await $content().only(['path']).fetch();
      return files.map(file => file.path === '/index' ? '/' : file.path);
    }
  },

  'google-gtag': {
    id: process.env.GOOGLE_ANALYTICS_ID,
  },

  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://blog.unyooon.com',
    routes: async () => {
      const { $content } = require('@nuxt/content');

      const articles = await $content().only(['path']).fetch();
      return articles.map(a => a.path);
    }
  },

  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.ts',
    exposeConfig: false,
    config: {},
    injectPosition: 0,
    viewer: true,
  },

  storybook: {
    // 追加のアドオンなどあれば
    addons: [
      '@storybook/addon-controls',
      '@storybook/addon-notes',
    ],
    // ポート指定
    port: 3003,
    // ストーリーの親に要素など追加しcssなど設定できる
    decorators: [
    ],
    // 背景色や表示位置、デバイスの設定など
    parameters: {
      // 背景色：デフォルトの色を使う場合
      backgrounds: {
        default: 'dark', // light or dark
      },
      // 背景色：カスタマイズする場合
      backgrounds: {
        default: 'light',
        values: [
          {
            name: 'brown',
            value: '#56371B'
          },
          {
            name: 'light',
            value: '#fff'
          },
          {
            name: 'dark',
            value: '#333'
          },
        ]
      },
      // Description, Default, Controlsカラムの表示
      controls: {
        expanded: true
      },
      // 表示位置
      layout: 'centered', // centered:中央表示, padded:コンポーネントに余白付与, fullscreen:幅いっぱい
    }
  }
};
