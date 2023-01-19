<template>
  <div class="card">
    <div class="img-content">
      <img class="img" :src="img" alt="">
    </div>
    <div class="card__title">
      {{ title }}
    </div>
    <div class="card__category">
      <div class="gg-folder" />
      {{ category }}
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  props: {
    img: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true
    }
  }
});
</script>

<style lang="scss" scoped>
.card {
  width: 280px;
  margin: 1em;

  &:hover {
    cursor: pointer;
  }

  &__title {
    font-size: $small;
    line-height: 1.5em;

    &:hover {
      color: $primary;
    }
  }

  &__category {
    display: flex;
    margin-top: 0.4rem;
    font-size: $x-small;
    align-items: center;
  }
}

.img-content {
  width: 280px;
  height: 280px;
  margin-bottom: 0.8rem;
  transition: transform .3s;

  &:hover {
    transition: transform .3s;
    transform: scale(1.05);
  }
}

.img {
  border-radius: 5px;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
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
