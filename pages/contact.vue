<template>
  <div class="flex justify-center align-center w-full">
    <div class="p-6 mt-8 mx-2 shadow-2xl rounded-3xl contact-card">
      <div class="text-center font-bold text-2xl">
        {{ $t('contact.contactMe') }}
      </div>
      <div class="pt-4">
        <div class="pb-4">
          <div class="mb-1">
            {{ $t('contact.name') }}
          </div>
          <AtomsContactInput
            :value="name"
            height="40px"
            :required="true"
            @setVal="v => name = v"
          />
        </div>
        <div class="pb-4">
          <div class="mb-1">
            {{ $t('contact.email') }}
          </div>
          <AtomsContactInput
            :value="email"
            height="40px"
            :required="true"
            @setVal="v => email = v"
          />
        </div>
        <div class="pt-2">
          <div class="mb-1">
            {{ $t('contact.message') }}
          </div>
          <AtomsContactInput
            :value="message"
            height="320px"
            :required="true"
            :multiple="true"
            @setVal="v => message = v"
          />
        </div>
        <div class="mt-4">
          <AtomsButton
            :text="$t('contact.send')"
            :on-click="send"
            :type="0"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import FormData from 'form-data';
import axios from 'axios';

type Data = {
  name: string;
  email: string;
  message: string;
}

export default Vue.extend({
  data (): Data {
    return {
      name: '',
      email: '',
      message: ''
    };
  },
  methods: {
    send () {
      const googleFormUrl = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLScrjW5MIGALISQPMx39hMaTuXGsBWc0awARHFsAb6U2njomjQ/formResponse';
      const params = new FormData();
      params.append('entry.1310089632', this.name);
      params.append('entry.1428598822', this.message);
      params.append('emailAddress', this.email);
      axios.post(googleFormUrl, params)
        .finally(() => {
          this.name = '';
          this.email = '';
          this.message = '';
        });
    }
  }
});
</script>

<style lang="scss" scoped>
.contact-card {
  width: 480px;
  min-width: 240px;
}
</style>
