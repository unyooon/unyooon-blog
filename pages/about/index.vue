<template>
  <div class="about flex flex-col pt-8 px-4">
    <div class="about__logo flex items-center mb-10">
      <img
        src="~/assets/picture//logo/header_logo.png"
        class="about__logo__img rounded-full"
        alt=""
      >
      <div class="about__logo__spacer" />
      <div class="flex flex-col">
        <div class="text-4xl py-2">
          UNYOOON
        </div>
        <div class="text-xl text-slate-500">
          Hi, my name is Yuta Yamakawa.
        </div>
        <div class="text-xl text-slate-500">
          I am a coder.
        </div>
        <div class="pt-4 text-xl text-slate-500">
          ** 3+ years of experience **
        </div>
        <div class="pt-4 flex">
          <a
            class="cursor-pointer text-slate-500 p-2"
            href="https://github.com/unyooon"
          >
            <fa size="2x" :icon="['fab', 'github']" />
          </a>
          <a
            class="cursor-pointer text-slate-500 p-2"
            href="https://www.linkedin.com/in/yuta-yamakawa-unyooon"
          >
            <fa size="2x" :icon="['fab', 'linkedin']" />
          </a>
        </div>
      </div>
    </div>
    <div class="about__experience flex flex-col">
      <div class="about__experience__title pb-2 text-2xl underline decoration-solid">
        Main Skills / years
      </div>
      <div class="flex flex-wrap">
        <div class="flex flex-col pb-2">
          <div class="py-1 pr-10 text-xl text-slate-500 font-bold">
            Frontend development
          </div>
          <div class="py-1 text-xl text-slate-500">
            Vue/+2
          </div>
          <div class="py-1 text-xl text-slate-500">
            NuxtJS/+2
          </div>
          <div class="py-1 text-xl text-slate-500">
            JavaScript/+2
          </div>
          <div class="py-1 text-xl text-slate-500">
            TypeScript/+2
          </div>
          <div class="py-1 text-xl text-slate-500">
            HTML/+2
          </div>
          <div class="py-1 text-xl text-slate-500">
            SCSS/+2
          </div>
        </div>
        <div class="flex flex-col pb-2">
          <div class="py-1 pr-10 text-xl text-slate-500 font-bold">
            Backend development
          </div>
          <div class="py-1 text-xl text-slate-500">
            .NET Core/+2
          </div>
          <div class="py-1 text-xl text-slate-500">
            Entity Framework/+2
          </div>
          <div class="py-1 text-xl text-slate-500">
            C#/+2
          </div>
          <div class="py-1 text-xl text-slate-500">
            Django/+0.5
          </div>
          <div class="py-1 text-xl text-slate-500">
            Python/+1
          </div>
          <div class="py-1 text-xl text-slate-500">
            Gin/+0.5
          </div>
          <div class="py-1 text-xl text-slate-500">
            Gorm/+0.5
          </div>
          <div class="py-1 text-xl text-slate-500">
            Go/+0.5
          </div>
        </div>
        <div class="flex flex-col pb-2">
          <div class="py-1 pr-10 text-xl text-slate-500 font-bold">
            Infrastructure building
          </div>
          <div class="py-1 text-xl text-slate-500">
            Azure/+2
          </div>
          <div class="py-1 text-xl text-slate-500">
            AWS/+0.5
          </div>
          <div class="py-1 text-xl text-slate-500">
            Firebase/+0.5
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.about {
  font-family: "Work Sans", sans-serif;

  &__logo {
    @media (max-width: $tablet) {
      flex-direction: column;
      align-items: flex-start;
    }

    &__spacer {
      width: 80px;

      @media (max-width: $tablet) {
        display: none;
      }
    }

    &__img {
      width: 240px;
      height: 240px;

      @media (max-width: $tablet) {
        width: 96px;
        height: 96px;
      }
    }
  }

  &__experience {
    &__title {
      color: $primary;
    }
  }
}
</style>
