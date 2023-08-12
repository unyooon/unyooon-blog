<template>
  <div class="text-input">
    <textarea
      name=""
      id=""
      cols="30"
      rows="10"
      :placeholder="placeholder"
      :value="value"
      @change="onChange"
    ></textarea>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  placeholder: string
  value: string
}

const props = withDefaults(defineProps<Props>(), {
  placeholder: '',
  value: '',
})

interface Emits {
  (e: 'onChange', value: string): void
}

const emits = defineEmits<Emits>()

const onChange = (e: Event) => {
  const target = e.target as HTMLInputElement
  emits('onChange', target.value)
}
</script>

<style lang="scss" scoped>
.text-input {
  display: flex;
  width: 100%;
  min-width: 240px;
  background-color: #fff;

  textarea {
    width: 100%;
    font-size: 16px;
    border: none;
    resize: none;
    padding: 16px;
  }

  textarea::placeholder {
    color: #c4c4c4;
  }

  textarea:focus {
    outline: none;
  }
}
</style>
