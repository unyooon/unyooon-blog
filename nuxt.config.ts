import fs from 'fs'
import path from 'path'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,

  app: {
    head: {
      title: 'UNYOOON',
      htmlAttrs: {
        lang: 'ja',
        prefix: 'og: http://ogp.me/ns#',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'a coder based in Japan',
        },
        { name: 'format-detection', content: 'telephone=no' },
      ],
      link: [
        { rel: 'x-default', href: 'https://unyooon.com/ja/' },
        {
          rel: 'alternate',
          hreflang: 'ja',
          href: 'https://unyooon.com/ja/',
        },
        {
          rel: 'alternate',
          hreflang: 'en',
          href: 'https://unyooon.com/en/',
        },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/apple-touch-icon-green.png',
        },
        {
          rel: 'android-chrome',
          href: '/android-chrome-192x192-green.png',
        },
        {
          rel: 'android-chrome',
          href: '/android-chrome-512x512-green.png',
        },
        { rel: 'mask-icon', href: '/apple-touch-icon.png' },

        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@100;200;300;400;500;600;700;800;900&display=swap',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;200;300;400;500;600;700;800;900&display=swap',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Bevan',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swapm',
        },
      ],
    },
  },

  modules: ['@nuxt/content'],

  imports: {
    dirs: ['composables/**'],
  },

  css: ['@/assets/styles/main.scss'],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "@/assets/styles/_variables.scss";`,
        },
      },
    },
  },

  content: {},

  hooks: {
    'nitro:config': async function extendNitroConfig(nitroConfig) {
      const addRoute = (route: string) => {
        if (!nitroConfig.prerender?.routes?.includes(route)) {
          nitroConfig.prerender?.routes?.push(route)
        }
      }

      const getFilePaths = async (folderPath: string) => {
        // フォルダ内のすべてのアイテムを取得
        const items = fs.readdirSync(folderPath)

        const filePaths: string[] = []

        // 各アイテムについて処理を行う
        await Promise.all(
          items.map(async (item) => {
            // アイテムの絶対パスを取得
            const itemPath = path.join(folderPath, item)

            // 取得した絶対パスを配列に追加
            // filePaths.push(itemPath)

            // アイテムがディレクトリかどうかを確認
            const isDirectory = fs.statSync(itemPath).isDirectory()

            if (isDirectory) {
              // アイテムがディレクトリの場合は再帰的にそのディレクトリ内のファイルパスを取得
              const subFolderPaths = await getFilePaths(itemPath)

              // 取得したファイルパスを配列に追加
              filePaths.push(...subFolderPaths)
            } else {
              // publicがtrueの場合のみ、ファイルパスを配列に追加
              const data = await new Promise<string>((resolve, reject) => {
                fs.readFile(itemPath, 'utf8', (err, data) => {
                  if (err) reject(err)
                  resolve(data)
                })
              })

              const isPublic = data.includes('public: true')
              if (isPublic) {
                filePaths.push(itemPath)
              }
            }
          })
        )

        return filePaths
      }

      const folderPath = './content'
      const filepaths = await getFilePaths(folderPath)
      console.log(filepaths)

      filepaths.forEach((filepath) => addRoute(filepath.slice(7).split('.')[0]))
    },
  },

  nitro: {
    prerender: {
      routes: ['/sitemap.xml'],
    },
  },
})
