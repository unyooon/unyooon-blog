<template>
  <div class="translate-container" @click="changeLang()">
    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" /></svg>
    <div v-if="$i18n.locale !== 'ja'">
      JA
    </div>
    <div v-if="$i18n.locale !== 'en'">
      EN
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  methods: {
    changeLang () {
      this.$i18n.locale !== 'ja'
        ? this.$router.push(this.switchLocalePath('ja'))
        : this.$router.push(this.switchLocalePath('en'));

      return this.$i18n.locale !== 'ja'
        ? this.$emit('changeLang', 'ja')
        : this.$emit('changeLang', 'en');
    }
  }
});
</script>

<style lang="scss" scoped>
.translate-container {
  display: flex;
  align-items: center;
  border: 2px solid $black;
  padding: 0.2rem 1rem;
  border-radius: 8px;
  cursor: pointer;

  svg {
    margin: 0 0.2rem;
  }
}
</style>
