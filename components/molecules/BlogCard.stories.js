export default {
  title: 'BlogCard',
  component: 'BlogCard'
}

export const BlogCard = (arg, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
    <MoleculesBlogCard v-bind="$props" />
  `
})

export const Primary = BlogCard.bind({})
Primary.args = {
  title: '初めてのブログ投稿',
  description: '初めてのブログ投稿ということで簡単な自己紹介をしたいと思います。',
  date: '2022-06-01',
  category: 'category'
}
