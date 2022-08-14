export default {
  title: 'Tip',
  component: 'Tip'
}

export const Tip = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
    <AtomsTip v-bind="$props" />
  `
})

export const Primary = Tip.bind({})
Primary.args = {
  text: 'category'
}
