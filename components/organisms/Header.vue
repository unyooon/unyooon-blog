<template>
  <div class="header-container">
    <div class="header-inner">
      <div class="header-logo">
        <nuxt-link class="flex items-center" :to="localePath('/')">
          <img :src="require('~/assets/picture/logo/header_logo.png')" alt="">
          <div class="ml-4 header-logo__title text-2xl">
            UNYOOON
          </div>
        </nuxt-link>
      </div>
      <div class="button-container">
        <AtomsButton
          text="About"
          :on-click="() => $router.push(localePath('/about'))"
          :type="0"
        />
        <AtomsButton
          text="Blog"
          :on-click="() => $router.push(localePath('/articles'))"
          :type="0"
        />
        <AtomsButton
          text="Contact"
          :on-click="() => $router.push(localePath('/contact'))"
          :type="0"
        />
        <div class="button-sub-container">
          <MoleculesLanguageSwitcher
            @changeLang="changeLang"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  methods: {
    changeLang (locale: string) {
      return this.$emit('changeLang', locale);
    }
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
  padding-top: 64px;
  padding-bottom: 8px;
  padding-right: 8px;
  padding-left: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: $tablet) {
    flex-direction: column;
  }
}

.header-logo {

  img {
    width: 64px;
    border-radius: 50%;
  }

  @media (max-width: $tablet) {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  &__title {
    font-weight: bold;
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
