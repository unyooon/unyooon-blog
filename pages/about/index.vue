<template>
  <div class="about">
    <div class="about__inner">
      <div class="about__introduction">
        <img :src="imgLogoUnyooonPng" alt="" />
        <div>
          <h2>Hi, my name is Yuta Yamakawa 👋</h2>
          <h2>a coder based in Japan 🇯🇵</h2>
          <div>// 3+ years of experience</div>
        </div>
      </div>
      <div class="about__skills">
        <h3>Main skills</h3>
        <h4>3+ years of experience</h4>
        <div>
          <div>HTML</div>
          <div>SCSS</div>
          <div>JavaScript</div>
          <div>TypeScript</div>
          <div>Vue.js</div>
          <div>Nuxt.js</div>
        </div>
        <h4>2+ years of experience</h4>
        <div>
          <div>C#</div>
          <div>.NET Core</div>
          <div>Entity Framework</div>
          <div>Azure</div>
        </div>
        <h4>1+ years of experience</h4>
        <div>
          <div>Go</div>
          <div>Gin</div>
          <div>Gorm</div>
          <div>Python</div>
          <div>Django</div>
          <div>AWS</div>
          <div>Firebase</div>
          <div>Hyperledger Fabric</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.about {
  width: 100%;
  padding: 0 8px;
  display: flex;
  justify-content: center;

  &__inner {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 72px;
    max-width: 800px;
    padding: 24px;
    background-color: #fff;
    border-radius: 16px;
  }

  &__introduction {
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 800px;

    img {
      width: 180px;
      height: auto;
      border-radius: 50%;
    }

    > div {
      margin-left: 48px;

      > div {
        font-size: 16px;
        font-weight: 400;
        margin-top: 8px;
      }
    }
  }

  &__skills {
    margin-top: 32px;

    h3 {
      text-decoration: underline;
    }

    h4 {
      margin-top: 18px;
    }

    > div {
      display: flex;
      flex-wrap: wrap;
      margin-top: 16px;

      > div {
        margin-right: 16px;
        margin-bottom: 16px;
        padding: 8px 16px;
        border-radius: 8px;
        background-color: #f0f0f0;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .about {
    &__inner {
      margin-top: 48px;
      padding: 16px;
    }

    &__introduction {
      flex-direction: column;
      align-items: flex-start;
      margin-top: 0;

      img {
        width: 80px;
        margin-bottom: 16px;
      }

      > div {
        margin-left: 0;
      }
    }

    &__skills {
      margin-top: 48px;
    }
  }
}
</style>
