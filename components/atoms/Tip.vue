<template>
  <div>
    <div class="tip">
      {{ text }}
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    text: {
      type: String,
      required: true
    }
  }
})
</script>

<style lang="scss" scoped>
.tip {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $primary;
  font-size: 1rem;
  font-weight: 600;
  color: white;
  height: 32px;
  width: 128px;
  padding-left: 12px;
  padding-right: 12px;
}
</style>
