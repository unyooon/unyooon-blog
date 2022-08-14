<template>
  <div>
    <div class="articles">
      <template v-for="article in articles" >
        <div @click="$router.push(`/blog/${article.slug}`)" :key="article._path">
          <MoleculesBlogCard
            width="320px"
            :title="article.title"
            :description="article.description"
            :date="`2022-06-01`"
            :category="`category`"
          />
        </div>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  async asyncData ({ $content }) {
    const articles = await $content('articles').sortBy('createdAt', 'desc').fetch();

    return {
      articles
    }
  },
});
</script>

<style lang="scss" scoped>
.articles {
  display: flex;
}
</style>
