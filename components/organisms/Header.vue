<template>
  <div class="header-container">
    <div class="header-inner flex flex-col">
      <div class="flex items-center justify-between header-logo mb-4">
        <div class="header-logo__switcher-mobile flex justify-end w-full mb-4">
          <MoleculesLanguageSwitcher
            @changeLang="changeLang"
          />
        </div>
        <nuxt-link class="flex items-center" :to="localePath('/')">
          <img :src="require('~/assets/picture/logo/header_logo.png')" alt="">
          <div class="ml-4 header-logo__title text-2xl">
            UNYOOON
          </div>
        </nuxt-link>
        <div class="header-logo__switcher-pc">
          <MoleculesLanguageSwitcher
            @changeLang="changeLang"
          />
        </div>
      </div>
      <div class="flex border-y border-black py-3 mt-4 header-inner__button-group">
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
  display: flex;
  justify-content: center;
  font-family: $title-font;
}

.header-inner {
  width: 100%;
  max-width: 940px;
  padding-top: 64px;
  padding-bottom: 8px;
  padding-right: 8px;
  padding-left: 8px;

  @media (max-width: $tablet) {
    padding-top: 24px;
    flex-direction: column;
  }

  &__button-group {

    @media (max-width: $tablet) {
      justify-content: center;;
    }
  }
}

.header-logo {
  img {
    width: 64px;
    border-radius: 50%;
  }

  @media (max-width: $tablet) {
    justify-content: center !important;
    flex-direction: column !important;
    width: 100%;
  }

  &__title {
    font-weight: bold;
  }

  &__switcher-pc {
    @media (max-width: $tablet) {
      display: none;
    }
  }

  &__switcher-mobile {
    @media (min-width: $tablet) {
      display: none;
    }
  }
}
</style>
