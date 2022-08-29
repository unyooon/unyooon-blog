<template>
  <div class="footer-container">
    <div class="footer-inner">
      <div class="copy-write">
        © 2022 UNYOOON All Right Reserved
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
.footer-container {
  width: 100%;
  padding: 1rem 0;
  display: flex;
  justify-content: center;
  font-family: $title-font;
  background-color: $primary;
  color: $white;
}

.footer-inner {
  width: 100%;
  max-width: 940px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.copy-write {
  font-size: $x-small;
}

</style>
