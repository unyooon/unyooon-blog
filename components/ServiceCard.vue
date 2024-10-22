<template>
  <div class="service-card" @click="click">
    <div class="service-card__image">
      <img :src="image" alt="" />
    </div>
    <div class="service-card__meta">
      <div v-if="category" class="category">
        {{ props.category }}
      </div>
      <div class="title">
        {{ props.title }}
      </div>
      <div v-if="description" class="description">
        {{ props.description }}
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
  description?: string
}

const props = withDefaults(defineProps<Props>(), {
  title: '',
  category: '',
  date: '',
  image: '',
  description: '',
})

interface Emits {
  (e: 'onClick'): void
}

const emits = defineEmits<Emits>()
const click = () => emits('onClick')
</script>

<style lang="scss" scoped>
.service-card {
  width: 280px;
  height: 400px;

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

.service-card:hover {
  color: $text-color--body-highlight;
}

.service-card:hover .service-card__image {
  transform: scale(1.05);
}
</style>
