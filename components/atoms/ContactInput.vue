<template>
  <div
    class="w-full"
    :style="inputStyle"
  >
    <input
      v-if="!multiple"
      type="text"
      class="p-2 w-full h-full"
      :placeholder="placeholder"
      :value="val"
      :required="required"
      @change="v => val = v.target.value"
    >
    <textarea
      v-else
      class="p-2 w-full h-full resize-none"
      :value="val"
      :required="required"
      @change="v => val = v.target.value"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  props: {
    required: {
      type: Boolean,
      required: false,
      default: false
    },
    width: {
      type: String,
      required: false,
      default: ''
    },
    height: {
      type: String,
      required: false,
      default: ''
    },
    maxWidth: {
      type: String,
      required: false,
      default: '800px'
    },
    maxHeight: {
      type: String,
      required: false,
      default: '800px'
    },
    minWidth: {
      type: String,
      required: false,
      default: '120px'
    },
    minHeight: {
      type: String,
      required: false,
      default: '20px'
    },
    value: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      required: false,
      default: ''
    },
    multiple: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  computed: {
    val: {
      get (): string {
        return this.value;
      },
      set (v: string) {
        this.$emit('setVal', v);
      }
    },
    inputStyle (): {[index: string]: string} {
      return {
        width: this.width,
        height: this.height,
        maxWidth: this.maxWidth,
        maxHeight: this.maxHeight,
        minWidth: this.minWidth,
        minHeight: this.minHeight
      };
    }
  }
});
</script>
