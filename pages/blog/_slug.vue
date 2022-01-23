<template>
  <div v-if="article" class="main-container">
    <article>
      <div class="title-container">
        <div class="title-container__title">
          {{ article.title }}
        </div>
      </div>
      <div class="description-container">
        <div class="description-container__description">
          {{ article.description }}
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
          {{ "tag" }}
        </div>
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

type Data = {
  article: FetchReturn | null
}

export default Vue.extend({
  data (): Data {
    return {
      article: null
    };
  },
  async fetch () {
    this.article = await this.$content('articles', this.$route.params.slug).fetch() as FetchReturn;
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
  padding-top: 16px;
  padding-left: 8px;
  padding-right: 8px;
  padding-bottom: 16px;
}

.title-container {
  margin-top: 32px;
  margin-bottom: 16px;

  &__title {
    font-weight: bold;
    font-size: $huge;
  }
}

.description-container {
  margin-top: 16px;
  margin-bottom: 24px;

  &__description {
    font-size: $small;
  }
}

.date-container {
  display: flex;
  align-items: center;
  margin-top: 24px;
  margin-bottom: 24px;

  &__date {
    font-size: $x-small;
  }

  &__tag {
    font-size: $x-small;
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
</style>
