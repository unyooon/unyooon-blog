<template>
  <div class="contact">
    <h2>Contact</h2>
    <div class="contact__input-container">
      <TextInput
        placeholder="Yamada Taro"
        :value="name"
        @on-change="(v) => (name = v)"
      />
    </div>
    <div class="contact__input-container">
      <TextInput
        placeholder="example@unyooon.com"
        :value="email"
        @on-change="(v) => (email = v)"
      />
    </div>
    <div class="contact__input-container">
      <TextArea
        placeholder="Hello, World!"
        :value="message"
        @on-change="(v) => (message = v)"
      />
    </div>
    <PrimaryButton text="Send" @on-click="send" />
  </div>
</template>

<script lang="ts" setup>
const name = ref('')
const email = ref('')
const message = ref('')

const send = async () => {
  if (!email.value || !message.value) return

  const googleFormUrl =
    'https://docs.google.com/forms/u/0/d/e/1FAIpQLScrjW5MIGALISQPMx39hMaTuXGsBWc0awARHFsAb6U2njomjQ/formResponse'
  const params = new FormData()
  params.append('entry.1310089632', name.value)
  params.append('entry.1428598822', message.value)
  params.append('emailAddress', email.value)

  await useFetch(googleFormUrl, {
    method: 'POST',
    body: params,
  }).then(() => {
    name.value = ''
    email.value = ''
    message.value = ''
  })
}
</script>

<style lang="scss" scoped>
.contact {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 48px;
  padding: 0 8px;

  &__input-container {
    display: flex;
    justify-content: center;
    width: 540px;
    margin: 24px 0;
  }
}

@media screen and (max-width: 768px) {
  .contact {
    &__input-container {
      width: 100%;
    }
  }
}
</style>
