<template>
  <div class="header">
    <div class="header__logo">
      <NuxtLink to="/">UNYOOON</NuxtLink>
    </div>
    <div class="header__nav">
      <PrimaryButton
        text="Home"
        :active="route.fullPath === '/'"
        @onClick="() => router.push('/')"
      />
      <PrimaryButton
        text="Blog"
        :active="/articles/.test(route.fullPath)"
        @onClick="() => router.push('/articles')"
      />
      <PrimaryButton
        text="About"
        :active="/about/.test(route.fullPath)"
        @onClick="() => router.push('/about')"
      />
      <PrimaryButton
        text="Contact"
        :active="/contact/.test(route.fullPath)"
        @onClick="() => router.push('/contact')"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute()
const router = useRouter()
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: $background-color--header;
  padding: 0 24px;

  &__logo {
    a {
      text-decoration: none;
      color: $text-color--body;
      font-weight: 600;
      font-size: 18px;
    }
  }

  &__nav {
    display: flex;

    div {
      margin: 0 8px;
    }
  }
}
</style>
