<template>
  <div v-if="article" class="main-container">
    <article>
      <div class="title-container">
        <div class="title-container__title">
          {{ article.title }}
        </div>
      </div>
      <div class="date-container">
        <div class="date-container__date">
          {{ dateFormatter(article.createdAt) }}
        </div>
        <div class="v-divider">
          |
        </div>
        <div class="date-container__tag">
          <div class="gg-folder" />
          <div class="date-container__tag__text">
            {{ article.category }}
          </div>
        </div>
      </div>
      <div class="img-container">
        <img :src="require(`~/assets/picture/icatch/${$route.params.slug}-000.jpg`)" alt="">
      </div>
      <div class="body-container">
        <nuxt-content :document="article" />
      </div>
    </article>
  </div>
</template>

<script lang="ts">
import { FetchReturn } from '@nuxt/content/types/query-builder';
import dayjs from 'dayjs';
import Vue from 'vue';
import Meta from '~/assets/mixins/meta';

export default Vue.extend({
  mixins: [Meta],
  async asyncData ({ $content, params }) {
    const article = await $content('articles', params.slug).fetch() as FetchReturn;

    return {
      article
    };
  },
  methods: {
    dateFormatter (date: string) {
      return dayjs(date).format('YYYY.MM.DD (ddd.)');
    }
  }
});
</script>

<style lang="scss" scoped>
.main-container {
  @media (min-width: $tablet) {
    margin-top: 120px;
    padding: 3rem 8rem;
  }
  @media (max-width: $tablet) {
    padding: 1em;
  }
}

.title-container {
  margin: 3rem 0;

  &__title {
    margin: 3rem 0;
    text-align: center;
    font-weight: bold;
    font-size: $x-large;
  }

}

.date-container {
  display: flex;
  align-items: center;
  margin: 3rem 0;
  border-bottom: 1px dotted $black;

  &__date {
    font-size: $x-small;
    font-weight: bold;
  }

  &__tag {
    display: flex;
    align-items: center;

    &__text {
      font-size: $x-small;
      font-weight: bold;
    }
  }
}

.img-container {
  display: flex;
  justify-content: center;

  img {
    width: 100%;
  }
}

.body-container {
  margin-top: 40px;
  margin-bottom: 40px;
}

.v-divider {
  margin-left: 8px;
  margin-right: 8px;
}

.gg-folder {
  margin: 0.3rem;
  transform: scale(var(--ggs,1))
}
.gg-folder,
.gg-folder::after {
  box-sizing: border-box;
  position: relative;
  display: block;
  width: 22px;
  height: 16px;
  border: 2px solid;
  border-radius: 3px
}
.gg-folder::after {
  content: "";
  position: absolute;
  width: 10px;
  height: 4px;
  border-bottom: 0;
  border-top-left-radius: 2px;
  border-top-right-radius: 4px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  top: -5px
}
</style>
