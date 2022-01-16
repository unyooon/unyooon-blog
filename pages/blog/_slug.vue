<template>
  <article>
    <nuxt-content :document="articles" />
  </article>
</template>

<script lang="ts">
import { FetchReturn } from '@nuxt/content/types/query-builder';
import Vue from 'vue';

type Data = {
  articles: FetchReturn | FetchReturn[] | null
}

export default Vue.extend({
  data (): Data {
    return {
      articles: null
    };
  },
  async fetch () {
    console.log(await this.$content('articles').fetch());
    this.articles = await this.$content('articles', this.$route.params.slug).fetch();
  }
});
</script>
