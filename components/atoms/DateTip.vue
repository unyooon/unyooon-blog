<template>
  <div>
    <div class="tip">
      <div class="day">
        {{ day }}
      </div>
      <div class="year">
        {{ year }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import dayjs from 'dayjs';

export default Vue.extend({
  props: {
    date: {
      type: String,
      required: false,
      default: '2022-06-01'

    }
  },
  computed: {
    day (): string {
      return dayjs(this.date).format('MM');
    },
    year (): string {
      return dayjs(this.date).format('YYYY');
    }
  }
});
</script>

<style lang="scss" scoped>
.tip {
  border-radius: 50%;
  width: 56px;
  height: 56px;
  display: flex;
  flex-direction: column;
  color: white;
  align-items: center;
  justify-content: center;
  padding: 4px;
  background-color: $primary;
}

.day {
  font-size: 1rem;
  font-weight: bold;
}

.year {
  font-size: 0.8rem;
}
</style>
