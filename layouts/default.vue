<template>
  <div class="wrapper">
    <Header />
    <div class="slot">
      <slot />
    </div>
    <Footer />
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.wrapper {
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.slot {
  flex: 1;
}
</style>
