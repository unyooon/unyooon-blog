<template>
  <div class="articles">
    <div class="articles__list">
      <BlogCard
        v-for="(article, i) in data"
        :key="`article-${i}`"
        :title="article.title"
        :category="article.category"
        :date="article.date"
        :image="article.image"
        @onClick="() => router.push(article._path)"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
const router = useRouter()

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
.articles {
  display: flex;
  justify-content: center;

  &__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 1248px;
    padding-top: 24px;

    > div {
      margin: 16px;
    }
  }

  &__list:after {
    content: '';
    display: block;
    width: 280px;
    margin: 16px;
    height: 0;
  }
}
</style>
