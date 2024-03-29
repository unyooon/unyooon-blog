<template>
  <div v-if="data" class="articles-path">
    <div class="articles-path__inner">
      <div class="articles-path__icatch">
        <img :src="data.image" alt="" />
      </div>
      <h2 class="articles-path__title">
        {{ data.title }}
      </h2>
      <div class="articles-path__content">
        <div class="articles-path__meta">
          <div>
            {{ dayjs(data.date).format('YYYY.MM.DD') }}
          </div>
          <div>|</div>
          <div>
            {{ data.category }}
          </div>
        </div>
        <div>
          {{ data.description }}
        </div>
        <ContentRenderer :value="data" style="width: 100%" />
        <!-- <template v-for="content in data.body.children">
          <component v-if="content.tag === 'ul'" :is="content.tag">
            <template v-for="item in content.children">
              <component :is="item.tag">
                {{ item.children[0].value }}
              </component>
            </template>
          </component>

          <template v-else-if="content.tag === 'code'">
            <pre>
              <code :class="content.props.className">{{ content.props.code }}</code>
            </pre>
          </template>
          <component v-else-if="content.type === 'element'" :is="content.tag">
            <template v-for="child in content.children">
              <template v-if="child.type === 'text'">
                {{ child.value }}
              </template>
              <component
                v-if="child.tag === 'a'"
                :is="child.tag"
                :href="child.props.href"
              >
                {{ child.children[0].value }}
              </component>
              <component v-else-if="child.type === 'element'" :is="child.tag">
                {{ child.value }}
              </component>
            </template>
          </component>
        </template> -->
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const app = useNuxtApp()
const router = useRouter()
const route = useRoute()

const dayjs = app.$dayjs

// コンテンツ情報
const path = route.fullPath
if (typeof path !== 'string') router.push('/articles')

/**
 * 記事取得関数
 * @param path
 */
const getArticleAsync = async () => {
  const data = await queryContent('/articles')
    .where({
      _path: {
        $eq: path as string,
      },
    })
    .findOne()

  if (!data) router.push('/articles')

  data.image = `/icatch${data._path}-000.png`
  return data
}

const { data } = await useAsyncData(`article-${path}`, getArticleAsync)

// head情報
useHead({
  titleTemplate: `${data.value?.title} | UNYOOON`,
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: data.value?.description,
    },
    {
      hid: 'og:title',
      property: 'og:title',
      content: data.value?.title,
    },
    { hid: 'og:type', property: 'og:type', content: 'article' },
    {
      hid: 'og:url',
      property: 'og:url',
      content: `https://unyooon.com${data.value?._path}`,
    },
    {
      hid: 'og:image',
      property: 'og:image',
      content: `https://unyooon.com${data.value?.image}`,
    },
    { name: 'twitter:title', content: data.value?.title },
    { name: 'twitter:text:title', content: data.value?.title },
  ],
})
</script>

<style lang="scss" scoped>
.articles-path {
  width: 100%;
  display: flex;
  justify-content: center;

  &__inner {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 800px;
    padding: 8px;
    margin-top: 24px;
  }

  &__title {
    margin: 24px 0;
  }

  &__meta {
    display: flex;
    align-items: center;
    width: 100%;
    border-bottom: 2px dotted $border-color--outline-button;
    font-weight: 600;
    font-size: 14px;
    padding: 2px 0;
    margin-bottom: 32px;

    div {
      margin-right: 16px;
    }
  }

  &__icatch {
    img {
      max-width: 240px;
      border-radius: 24px;
    }

    margin-bottom: 32px;
  }

  &__content {
    width: 100%;
    background-color: #fff;
    border-radius: 16px;
    padding: 24px 40px;
    margin-top: 32px;
    line-height: 1.9;

    h2 {
      font-size: 27px;
      margin-bottom: 16px;
      margin-top: 64px;
    }
  }
}

@media screen and (max-width: 768px) {
  .articles-path {
    margin-top: 24px;

    &__inner {
      padding: 0 8px;
    }

    &__content {
      padding: 24px 16px;
    }

    h2 {
      font-size: 24px;
    }
  }
}

h1,
h2,
h3,
h4,
h5,
h6 {
  a {
    text-decoration: none;
    color: $text-color--body;
  }
}

h2 {
  font-size: 24px;
}
</style>
