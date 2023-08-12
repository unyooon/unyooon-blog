<template>
  <div class="primary-button flat" :class="{ active: active }" @click="click">
    {{ props.text }}
  </div>
</template>

<script lang="ts" setup>
interface Props {
  text: string
  active: boolean
}
const props = withDefaults(defineProps<Props>(), {
  text: 'Button',
  active: false,
})

interface Emits {
  (e: 'onClick'): void
}
const emits = defineEmits<Emits>()
const click = () => {
  emits('onClick')
}
</script>

<style lang="scss" scoped>
.primary-button {
  cursor: pointer;
  user-select: none;
  border-radius: 8px;
  padding: 12px 16px;
  font-size: 14px;
  font-weight: 600;
}

.flat {
  background-color: $background-color--tonal-button;
  color: $text-color--tonal-button;
}

.flat:hover {
  background-color: $background-color--tonal-button-hover;
  color: $text-color--tonal-button-hover;
}

.flat.active {
  background-color: $background-color--tonal-button-hover;
  color: $text-color--tonal-button-hover;
}
</style>
