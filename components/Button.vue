<template>
  <div class="button" @click="onClick">
    {{ text }}
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import { buttonTypeText } from '~/types/utility/buttonType';
export default Vue.extend({
  props: {
    text: {
      type: String,
      required: true
    },
    onClick: {
      type: Function,
      required: true
    },
    type: {
      type: Number as PropType<keyof typeof buttonTypeText>,
      required: true
    }
  },
  computed: {
    style (): string {
      return buttonTypeText[this.type];
    }
  }
});
</script>

<style lang="scss" scoped>
.button {
  min-width: 32px;
  max-height: 40px;
  display: flex;
  justify-content: center;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-right: 8px;
  padding-left: 8px;
  align-items: center;
  line-height: 1.5em;
  font-size: 12px;
}

.button:hover {
  color: $primary;
  cursor: pointer;
}
</style>
