export default {
  data() {
    return {
      meta: {
        title: '',
        type: '',
        url: '',
        description: '',
        slug: ''
      },
      // ベースとなるurl。自分の環境に合わせてください。
      base: 'https://blog.unyooon.com'
    };
  },
  head() {
    // 相対パスを取得。例えば'/item/1'とか
    const path = this.$route.path;

    // ここでmetaの中身を更新
    this.meta.title = this.article.title;
    this.meta.description = this.article.description;
    this.meta.slug = this.article.slug;
    this.meta.type = 'article';
    this.meta.url = this.base + path;

    // ここから先でmetaタグを書いていく
    return {
      title: `${this.meta.title} | UNYOOON BLOG`,
      meta: [
        { hid: 'description', name: 'description', content: this.meta.description },
        { hid: 'og:title', property: 'og:title', content: this.meta.title },
        { hid: 'og:type', property: 'og:type', content: this.meta.type },
        { hid: 'og:url', property: 'og:url', content: this.meta.url },
        { hid: 'og:image', property: 'og:image', content: this.base + require(`~/assets/picture/icatch/${this.meta.slug}-000.png`) },
        { name: 'twitter:title', content: this.meta.title },
        { name: 'twitter:text:title', content: this.meta.title }
      ]
    };
  }
};
