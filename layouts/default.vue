<template>
  <div
    class="layout-main"
    :style="style"
  >
    <OrganismsHeader
      @changeLang="changeLang"
    />
    <div class="site-body container mx-auto">
      <Nuxt />
    </div>
    <OrganismsFooter />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

type Data = {
  style: {[index: string]: string};
}

export default Vue.extend({
  data (): Data {
    return {
      style: {}
    };
  },
  mounted () {
    if (this.$i18n.locale === 'ja') {
      this.style = {
        fontFamily: '\'Kosugi\',sans-serif'
      };
    } else if (this.$i18n.locale === 'en') {
      this.style = {
        fontFamily: '\'Work Sans\', sans-serif'
      };
    }
  },
  methods: {
    changeLang (locale: string) {
      if (locale === 'ja') {
        this.style = {
          fontFamily: '\'Kosugi\',sans-serif'
        };
      } else if (locale === 'en') {
        this.style = {
          fontFamily: '\'Work Sans\', sans-serif'
        };
      }
    }
  }
});
</script>

<style lang="scss" scoped>
.layout-main {
  display: flex;
  width: 100%;
  min-height: 100vh;
  flex-direction: column;
  justify-content: space-between;
}

.site-body {
  min-height: calc(calc(100vh - $header-height) - $footer-height);
}
</style>
