<template>
  <div class="main">
    <div class="contents">
      <template v-for="article in articles">
        <nuxt-link :key="article._path" :to="article.path">
          <MoleculesBlogCard
            :title="article.title"
            :category="article.category"
            :img="require(`~/assets/picture/icatch/${article.slug}-000.jpg`)"
          />
        </nuxt-link>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  async asyncData ({ $content }) {
    const articles = await $content('articles').only(['title', 'category', 'slug', 'path']).sortBy('createdAt', 'desc').fetch();
    return {
      articles
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
