<template>
  <div class="header-container">
    <div class="header-inner">
      <h1 class="title" @click="clickHome">
        山 川 道 場
      </h1>
      <div class="button-container">
        <Button
          text="Home"
          :type="0"
          :on-click="clickHome"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  methods: {
    clickHome () {
      this.$router.push('/');
    }
  }
});
</script>

<style lang="scss" scoped>
.header-container {
  width: 100%;
  height: 96px;
  display: flex;
  justify-content: center;
}

.header-inner {
  width: 80%;
  padding-top: 32px;
  padding-bottom: 8px;
  padding-right: 8px;
  padding-left: 8px;
  border-bottom: 1px solid $primary;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.title {
  font-family: $header-title-font;
}

.title:hover {
  cursor: pointer;
}

.button-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
