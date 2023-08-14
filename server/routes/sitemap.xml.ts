import { serverQueryContent } from '#content/server'
import { SitemapStream, streamToPromise } from 'sitemap'

export default defineEventHandler(async (event) => {
  // Fetch all documents
  const allDocs = await serverQueryContent(event).find()
  const publicDocs = allDocs.filter((doc) => doc._public)
  const sitemap = new SitemapStream({
    hostname: 'https://unyooon.com',
  })

  for (const doc of publicDocs) {
    sitemap.write({
      url: doc._path,
      changefreq: 'monthly',
    })
  }
  sitemap.end()

  return streamToPromise(sitemap)
})
