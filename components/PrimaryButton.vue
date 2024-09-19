<template>
  <button
    v-if="!props.link"
    :class="[
      styleType,
      'primary-button',
      { active: active, disabled: disabled, loading: loading },
    ]"
    :style="{ width, height }"
    :type="type"
    @click="handleClick"
  >
    <img
      v-if="icon"
      class="primary-button__icon"
      :src="icon"
      width="16px"
      height="16px"
    />
    <span v-if="!loading">{{ props.text }}</span>
    <span v-else class="loading-spinner"></span>
  </button>
  <NuxtLink v-else :to="link" :target="linkTarget">{{ text }}</NuxtLink>
</template>

<script lang="ts" setup>
interface Props {
  type: 'button' | 'submit'
  text: string
  styleType: 'flat' | 'outline' | 'fill'
  active?: boolean
  disabled?: boolean
  loading?: boolean
  width?: string
  height?: string
  link?: string
  linkTarget?: string
  iconName?: IconName
}

const props = withDefaults(defineProps<Props>(), {
  type: 'button',
  text: 'Button',
  active: false,
  styleType: 'flat',
  disabled: false,
  loading: false,
  linkTarget: '_blank',
})

interface Emits {
  (e: 'onClick'): void
}

const emits = defineEmits<Emits>()

interface Icon {
  name: IconName
  src: string
}

// アイコン名の型を定義 （'edit' | 'xxx' | 'yyy'）
type IconName = 'edit' | 'edit-white'

const icons: Icon[] = [
  {
    name: 'edit',
    src: imgPenIconSvg,
  },
  {
    name: 'edit-white',
    src: imgPenIconWhiteSvg,
  },
]

const icon = computed(() => {
  const target = icons.find((icon) => icon.name === props.iconName)
  return target ? target.src : ''
})

const handleClick = (e: MouseEvent) => {
  if (props.type === 'submit') {
    // ロード中や無効化されている場合は送信しない
    if (props.loading || props.disabled) {
      e.preventDefault()
    }
  } else {
    emits('onClick')
  }
}
</script>

<style lang="scss" scoped>
.primary-button {
  cursor: pointer;
  user-select: none;
  border-radius: 8px;
  box-sizing: border-box;
  padding: 12px 16px;
  font-size: 14px;
  font-weight: 600;
  transition: background-color 0.3s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  &__icon {
    margin-right: 4px;
  }
}

/* flatスタイル */
.flat {
  background-color: $background-color--tonal-button;
  color: $text-color--tonal-button;
}

.flat:hover {
  background-color: $background-color--tonal-button-hover;
  color: $text-color--tonal-button-hover;
}

.flat.active,
.flat:active {
  background-color: $background-color--tonal-button-active;
  color: $text-color--tonal-button-active;
}

/* outlineスタイル */
.outline {
  background-color: $background-color--outline-button;
  color: $text-color--outline-button;
  border: 2px solid $border-color--outline-button;
}

.outline:hover {
  background-color: $background-color--outline-button-hover;
  color: $text-color--outline-button-hover;
}

.outline.active,
.outline:active {
  background-color: $background-color--outline-button-active;
  color: $text-color--outline-button-active;
}

.outline.disabled {
  border-color: $border-color--outline-button-disabled;
}

/* fillスタイル */
.fill {
  background-color: $background-color--fill-button;
  color: $text-color--fill-button;

  .loading-spinner {
    border: 3px solid $background-color--fill-spinner;
    border-top: 3px solid $background-color--spinner-top;
  }
}

.fill:hover {
  background-color: $background-color--fill-button-hover;
  color: $text-color--fill-button-hover;
}

.fill.active,
.fill:active {
  background-color: $background-color--fill-button-active;
  color: $text-color--fill-button-active;
}

/* disabledスタイル */
.disabled {
  cursor: not-allowed;
  opacity: 0.6;
  background-color: $background-color--disabled-button;
  color: $text-color--disabled-button;
  pointer-events: none;
}

/* loadingスタイル */
.loading {
  cursor: wait;
  pointer-events: none;
}

.loading-spinner {
  width: 20px;
  height: 20px;
  border: 3px solid $background-color--spinner;
  border-top: 3px solid $background-color--spinner-top;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
