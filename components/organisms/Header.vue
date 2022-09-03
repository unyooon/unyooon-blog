<template>
  <div class="header-container">
    <div class="header-inner">
      <div class="header-logo">
        <nuxt-link :to="localePath('/')">
          <img :src="require('~/assets/picture/logo/header_logo.png')" alt="">
        </nuxt-link>
      </div>
      <div class="button-container">
        <div class="button-sub-container">
          <MoleculesLanguageSwitcher />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  methods: {
  }
});
</script>

<style lang="scss" scoped>
.header-container {
  width: 100%;
  height: $header-height;
  display: flex;
  justify-content: center;
  font-family: $title-font;
  // background-color: $primary;
  // color: $white;

  @media (max-width: $tablet) {
    height: $header-height-mb;
  }
}

.header-inner {
  width: 100%;
  max-width: 940px;
  padding-top: 32px;
  padding-bottom: 8px;
  padding-right: 8px;
  padding-left: 8px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  @media (max-width: $tablet) {
    flex-direction: column;
  }
}

.header-logo {

  img {
    width: 240px;
  }

  @media (max-width: $tablet) {
    display: flex;
    justify-content: center;
    width: 100%;
  }
}

.button-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.button-sub-container {
  margin-right: 12px;
  margin-left: 12px;
}
</style>
