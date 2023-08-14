---
title: 【Nuxt3】nuxt content v2でgenerateしようとしたら動的ページが生成されない！？
description: nuxt3のnuxt content v2で静的なブログサイトを作成しているときにgenerateしても動的ページが生成されないことに詰まり、調べていてもうまくいっている記事を見かけなかったので、僕なりに解決した方法をまとめてみました。
category: Nuxt.js
date: 2023-08-15
public: true
---

## 詰まった箇所

Nuxt3にてnuxt conten v2を使用してこのサイトを作成しようとしたときのこと

generate時にブログの一覧ページは生成されるのに、詳細ページは生成されない！！

\
理由としては簡単で、generateは静的ページを生成するので、動的ページは明示的に定義して上げないと生成されません。

（動的ページとはNuxtでいう\[id\].vueのようなもの）

## 解決方法

こちらを参考にしました。

[Nuxt.js 3で動的ルーティングのFull static generationをする (zenn.dev)](https://zenn.dev/kon_karin/articles/0e514dea329044)

\
このサイトでは、nitro の config 経由で動的ルーティングの静的生成をする方法と動的ルーティングのページコンポーネント内で`useFetch()`する方法が紹介されていました。（最終的には`useFetch()`を利用するほうがいいと書かれています。）

\
ただ、nuxt contentでは`useFetch()`をラップしてるっぽい`queryContent()`という関数で記事の情報を取得しています。`useFetch()`を使っているような気もするのですがうまく行かなかったため，nitroのconfig経由で実装する方法で試してみました。

\
結果としてはこんな感じ

```typescript
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
```

\
多分普通にnuxt contentを利用してる方はここまで複雑にはならないと思います。

\
私の場合はmdファイルにpublicというカスタムプロパティを設定して、それで公開/非公開を確認しているので、その情報をfsパッケージを利用して確認しています。

\
それが必要なければ多分こうなるのかな？

```typescript
  hooks: {
    'nitro:config': async function extendNitroConfig(nitroConfig) {
      const addRoute = (route: string) => {
        if (!nitroConfig.prerender?.routes?.includes(route)) {
          nitroConfig.prerender?.routes?.push(route)
        }
      }

      const getFilePaths = (folderPath: string) => {
        // フォルダ内のすべてのアイテムを取得
        const items = fs.readdirSync(folderPath)

        const filePaths: string[] = []

        // 各アイテムについて処理を行う
        items.forEach((item) => {
          // アイテムの絶対パスを取得
          const itemPath = path.join(folderPath, item)

          // 取得した絶対パスを配列に追加
          filePaths.push(itemPath)

          // アイテムがディレクトリかどうかを確認
          const isDirectory = fs.statSync(itemPath).isDirectory()

          if (isDirectory) {
            // アイテムがディレクトリの場合は再帰的にそのディレクトリ内のファイルパスを取得
            const subFolderPaths = getFilePaths(itemPath)

            // 取得したファイルパスを配列に追加
            filePaths.push(...subFolderPaths)
          }
        })

        return filePaths
      }

      const folderPath = './content'
      const filepaths = getFilePaths(folderPath)

      filepaths.forEach((filepath) => addRoute(filepath.slice(7).split('.')[0]))
    },
  },
```

\
ちょっとこれは試してないのでわかりませんが、結構ゴリ押ししてます。

もっといい方法あれば改善してまた記事にしてみます。

\
今回は以上です。
