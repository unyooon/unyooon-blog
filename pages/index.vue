<template>
  <div class="home">
    <div class="services">
      <h2>Services</h2>
      <div class="services__list">
        <template v-for="(service, i) in services">
          <a :href="service._path" target="_blank">
            <ServiceCard
              :key="`service-${i}`"
              :title="service.title"
              :description="service.description"
              :image="service.image"
            />
          </a>
        </template>
      </div>
    </div>
    <div class="articles">
      <h2>Articles</h2>
      <div class="articles__list">
        <template v-for="(article, i) in data">
          <nuxt-link :to="article._path">
            <BlogCard
              :key="`article-${i}`"
              :title="article.title"
              :category="article.category"
              :date="article.date"
              :image="article.image"
            />
          </nuxt-link>
        </template>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const services = [
  {
    title: 'chillndfocus',
    description: 'Chill and Focusにより、リラックスしながら効果的に集中を促す',
    image: '/logo/logo-chillndfocus.png',
    _path: 'https://chillndfocus.com',
  },
]
const { data } = await useAsyncData('articles', async () => {
  const data = await queryContent('/articles')
    .where({
      public: {
        $eq: true,
      },
    })
    .only(['title', 'category', 'date', 'public', '_path'])
    .find()
  return data.map((article) => {
    article.image = `/icatch/${article._path}-000.png`
    return article
  })
})
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.services,
.articles {
  width: 100%;
  max-width: 1000px;

  h2 {
    text-align: center;
    text-decoration: underline;
  }
}

.services__list,
.articles__list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  padding-top: 24px;
}

.services__list a,
.articles__list a {
  text-decoration: none;
  color: $text-color--body;
}

.services__list:after,
.articles__list:after {
  content: '';
  display: block;
  width: 280px;
  margin: 16px;
  height: 0;
}
</style>
