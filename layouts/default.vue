<template>
  <div>
    <OrganismsHeader />
    <div class="container">
      <div class="left-body" />
      <div class="body">
        <Nuxt />
      </div>
      <div class="right-body" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({

});
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  margin-top: 24px;
  margin-bottom: 0px;
  justify-content: center;
}

.body {
  width: 100%;
  max-width: 940px;
  margin-top: 48px;
}

.right-body {
  max-width: 20%;
}

.left-body {
  max-width: 20%;
}
</style>
