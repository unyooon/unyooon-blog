<template>
  <div class="layout-main">
    <OrganismsHeader />
    <div class="container mx-auto">
      <Nuxt />
    </div>
    <OrganismsFooter />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({

});
</script>

<style lang="scss" scoped>
.layout-main {
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  justify-content: space-between;
}
</style>
