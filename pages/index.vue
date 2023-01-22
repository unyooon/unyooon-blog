<template>
  <div class="main">
    <div class="blogs">
      <nuxt-link class="blogs__title" :to="localePath('/articles')">
        <div class="blogs__title__text">
          Blog
        </div>
        <div class="blogs__title__divider" />
      </nuxt-link>
      <div class="blogs__content">
        <template v-for="article in articles">
          <nuxt-link :key="article._path" :to="localePath(article.path)">
            <MoleculesBlogCard
              :title="article.title"
              :category="article.category"
              :img="require(`~/assets/picture/icatch/${article.slug}-000.png`)"
            />
          </nuxt-link>
        </template>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { FetchReturn } from '@nuxt/content/types/query-builder';
export default Vue.extend({
  async asyncData ({ $content, app }) {
    const articles = await $content(app.i18n.locale, 'articles')
      .where({ public: true })
      .only(['title', 'category', 'slug', 'path', 'date'])
      .sortBy('date', 'desc')
      .fetch();
    return {
      articles: articles.map((article: FetchReturn) => ({
        ...article,
        path: article.path.replace(`/${app.i18n.locale}`, '')
      }))
    };
  }
});
</script>

<style lang="scss" scoped>
.home-description {
  background-image: url('~/assets/picture/icatch/00_home.png');
  background-size: cover;
  height: 100vh;
  z-index: -1;
}

.blogs {
  margin-top: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: $tablet) {
    margin-top: 2rem;
  }

  &__title {
    margin: 1rem 0;
    width: 100%;
    cursor: pointer;

    @media (max-width: $tablet) {
        width: 80%;
    }

    &__text {
      font-size: $normal;
      font-family: $title-font;
      color: $primary;
      text-align: left;
      margin-top: 1rem;
      margin-bottom: 0.2rem;
    }

    &__divider {
      border-bottom: dashed 0.5px $primary;
      margin-bottom: 1rem;
      width: 120px;
    }
  }

  &__content {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: wrap;

    @media (max-width: $tablet) {
      justify-content: center;
    }
  }
}
</style>
