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
          <div :key="article._path" @click="$router.push(`/blog/${article.slug}`)">
            <MoleculesBlogCard
              :title="article.title"
              :category="article.category"
              :img="require('~/assets/picture/icatch/2022-08-25-shipito.jpg')"
            />
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  async asyncData ({ $content }) {
    const articles = await $content('articles').only(['title', 'category', 'slug']).sortBy('createdAt', 'desc').fetch();

    return {
      articles
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
  }
}
</style>
