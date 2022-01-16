<template>
  <div>
    <Header />
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
  margin-right: 10%;
  margin-left: 10%;
  margin-bottom: 0px;
  justify-content: center;
}

.body {
  width: 60%;
}

.right-body {
  width: 20%;
}

.left-body {
  width: 20%;
}
</style>
