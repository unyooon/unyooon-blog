<template>
  <div>
    <div class="card" :style="cardCssProps">
      <div class="img-container">
        <div class="img-container__date">
          <AtomsDateTip :date="date" />
        </div>
        <div class="img-container__category">
          <AtomsTip :text="category" />
        </div>
      </div>
      <div class="content">
        <div class="content__title">
          {{ title }}
        </div>
        <div class="content__description">
          {{ description }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    width: {
      type: String,
      required: false,
      default: '400px'
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true
    },
  },
  computed: {
    cardCssProps () {
      return {
        '--width': this.width,
      }
    }
  }
})
</script>

<style lang="scss" scoped>
.card {
  width: var(--width);
  height: calc(calc(var(--width) / 1.91) * 2.5);
  border: 1px solid $primary;
  border-radius: 4%;
  overflow: hidden;
  background-color: white;
  cursor: pointer;
}

.img-container {
  display: flex;
  flex-direction: column;
  height: 40%;
  background-image: url('~/assets/picture/icatch/2022-06-01-cat.jpeg');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;

  &__date {
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    padding: 12px;
    flex-grow: 99;
  }

  &__category {
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
  }
}

.content {
  padding: 4px;
  display: flex;
  flex-direction: column;
  
  &__title {
    font-size: 1.2em;
    margin: 4px;
  }

  &__description {
    font-size: 1em;
    margin: 4px;
  }
}
</style>
