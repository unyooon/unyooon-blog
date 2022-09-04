<template>
  <div>
    <p>Not Found</p>
    <center>
      <nuxt-link class="return-text" :to="localePath('/')">
        {{ $t('goTop') }}
      </nuxt-link>
    </center>
  </div>
</template>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Bevan");

.return-text {
    color: $primary;
    font-family: monospace;
    font-size: 20px;
    text-decoration: underline;
    margin-top:10px;
    display:inline-block
}

p {
    font-family: "Bevan", cursive;
    font-size: 130px;
    margin: 10vh 0 0;
    text-align: center;
    letter-spacing: 5px;
    background-color: $black;
    color: transparent;
    text-shadow: 2px 2px 3px rgba(255, 255, 255, 0.1);
    -webkit-background-clip: text;
    -moz-background-clip: text;
    background-clip: text;
}

@media screen and (max-width: 880px) {
    p {
        font-size: 14vw;
    }
}
</style>
