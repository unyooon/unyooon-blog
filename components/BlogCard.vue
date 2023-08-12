<template>
  <div class="blog-card" @click="click">
    <div class="blog-card__image">
      <img :src="image" alt="" />
    </div>
    <div class="blog-card__meta">
      <div class="category">
        {{ props.category }}
      </div>
      <div class="title">
        {{ props.title }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  title: string
  category: string
  date: string
  image: string
}

const props = withDefaults(defineProps<Props>(), {
  title: '',
  category: 'Category',
  date: '',
  image: '',
})

interface Emits {
  (e: 'onClick'): void
}

const emits = defineEmits<Emits>()
const click = () => emits('onClick')
</script>

<style lang="scss" scoped>
.blog-card {
  width: 280px;
  height: 480px;

  &__image {
    cursor: pointer;
    width: 280px;
    height: 280px;
    transition-duration: 0.3s;

    img {
      border-radius: 12px;
      width: 100%;
      height: auto;
    }
  }

  &__meta {
    display: flex;
    flex-direction: column;
    height: 200px;
    padding-top: 16px;
    cursor: pointer;
  }

  &__meta > .title {
    padding-top: 8px;
    font-weight: 600;
  }

  &__meta > .category {
    font-size: 14px;
  }
}

.blog-card:hover {
  color: $text-color--body-highlight;
}

.blog-card:hover .blog-card__image {
  transform: scale(1.05);
}
</style>
