<template>
  <div class="main">
    <div class="contents">
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
</template>

<script lang="ts">
import { FetchReturn } from '@nuxt/content/types/query-builder';
import Vue from 'vue';
export default Vue.extend({
  async asyncData ({ $content, app }) {
    const articles = await $content(app.i18n.locale, 'articles').only(['title', 'category', 'slug', 'path', 'date']).sortBy('date', 'desc').fetch();
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

.contents {
  display: flex;
  justify-content: start;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 4rem 0;

  @media (max-width: $tablet) {
    justify-content: center;
  }
}

</style>
