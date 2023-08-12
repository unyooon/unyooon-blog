<template>
  <div class="text-input">
    <input
      type="text"
      :value="value"
      :placeholder="placeholder"
      @change="onChange"
    />
  </div>
</template>

<script lang="ts" setup>
interface Props {
  placeholder: string
  multiple: boolean
  value: string
}

const props = withDefaults(defineProps<Props>(), {
  placeholder: '',
  multiple: false,
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
  align-items: center;
  padding: 0 16px;
  width: 100%;
  min-width: 240px;
  height: 56px;
  background-color: #fff;

  input {
    font-size: 16px;
    border: none;
    width: 100%;
  }

  input::placeholder {
    color: #c4c4c4;
  }

  input:focus {
    outline: none;
  }
}
</style>
