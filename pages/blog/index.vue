<template>
  <div>
    <div v-for="article in articles" :key="article._path">
      <div> {{ article.title }} </div>
      <div> {{ article.description }} </div>
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
  }
});
</script>

<style lang="scss" scoped>

</style>
