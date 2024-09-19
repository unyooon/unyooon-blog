<template>
  <div class="playground">
    <div class="playground__buttons">
      <PrimaryButton
        type="button"
        text="Icon"
        styleType="flat"
        width="120px"
        iconName="edit"
      />
      <PrimaryButton
        type="button"
        text="Normal"
        styleType="flat"
        width="120px"
      />
      <PrimaryButton
        type="button"
        text="Active"
        styleType="flat"
        width="120px"
        :active="true"
      />
      <PrimaryButton
        type="button"
        text="Disabled"
        styleType="flat"
        width="120px"
        :disabled="true"
      />
      <PrimaryButton
        type="button"
        text="Loading"
        styleType="flat"
        width="120px"
        :loading="true"
      />
      <PrimaryButton
        type="button"
        text="Icon"
        styleType="outline"
        width="120px"
        iconName="edit"
      />
      <PrimaryButton
        type="button"
        text="Normal"
        styleType="outline"
        width="120px"
      />
      <PrimaryButton
        type="button"
        text="Active"
        styleType="outline"
        width="120px"
        :active="true"
      />
      <PrimaryButton
        type="button"
        text="Disabled"
        styleType="outline"
        width="120px"
        :disabled="true"
      />
      <PrimaryButton
        type="button"
        text="Loading"
        styleType="outline"
        width="120px"
        :loading="true"
      />
      <PrimaryButton
        type="button"
        text="Icon"
        styleType="fill"
        width="120px"
        iconName="edit-white"
      />
      <PrimaryButton
        type="button"
        text="Normal"
        styleType="fill"
        width="120px"
      />
      <PrimaryButton
        type="button"
        text="Active"
        styleType="fill"
        width="120px"
        :active="true"
      />
      <PrimaryButton
        type="button"
        text="Disabled"
        styleType="fill"
        width="120px"
        :disabled="true"
      />
      <PrimaryButton
        type="button"
        text="Loading"
        styleType="fill"
        width="120px"
        :loading="true"
      />
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.playground {
  display: flex;
  padding: 16px;

  &__buttons {
    display: flex;
    justify-content: center;
    padding: 16px;
    gap: 16px;
    flex-wrap: wrap;
    background-color: darkgray;
    width: 720px;
  }
}
</style>
