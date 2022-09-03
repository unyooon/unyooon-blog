<template>
  <div class="main">
    <div class="new-topics">
      <div class="new-topics__title">
        <div class="new-topics__title__text">
          New Topics
        </div>
        <div class="new-topics__title__divider" />
      </div>
      <div class="new-topics__content">
        <template v-for="article in articles">
          <nuxt-link :key="article._path" :to="localePath(article.path)">
            <MoleculesBlogCard
              :title="article.title"
              :category="article.category"
              :img="require(`~/assets/picture/icatch/${article.slug}-000.jpg`)"
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
    const articles = await $content(app.i18n.locale, 'articles').only(['title', 'category', 'slug', 'path']).sortBy('createdAt', 'desc').fetch();
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
.new-topics {
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
    width: 40%;

    @media (max-width: $tablet) {
        width: 80%;
    }

    &__text {
      font-size: $x-large;
      font-weight: bold;
      font-family: $title-font;
      color: $primary;
      text-align: center;
      margin: 1rem 0;
    }

    &__divider {
      border: solid 0.5px $primary;
      margin: 1rem 0;
      width: 100%;
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
