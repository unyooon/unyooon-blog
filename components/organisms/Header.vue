<template>
  <div class="header-container">
    <div class="header-inner">
      <div class="title-container" @click="goHome">
        <div class="title-container__title">
          UNYOOON BLOG
        </div>
      </div>
      <div class="button-container">
        <div class="button-sub-container">
          <AtomsButton
            text="Home"
            :type="0"
            :on-click="goHome"
          />
        </div>
        <!-- <div class="button-sub-container">
          <AtomsButton
            text="About"
            :type="0"
            :on-click="goAbout"
          />
        </div>
        <div class="button-sub-container">
          <AtomsButton
            text="Blog"
            :type="0"
            :on-click="goBlog"
          />
        </div> -->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  methods: {
    goHome () {
      this.$router.push('/');
    }
    // goAbout () {
    //   this.$router.push('/about');
    // },
    // goBlog () {
    //   this.$router.push('/blog');
    // }
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
  background-color: $primary;
  color: $white;
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
}

.title-container {
  &__title {
    font-size: $x-large;
  }
}

.title-container:hover {
  cursor: pointer;
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
