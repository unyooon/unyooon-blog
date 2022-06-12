export default {
  title: 'Button',
  component: 'Button',
}

export const Button = (arg, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
    <AtomsButton v-bind="$props" />
  `
})

export const Primary = Button.bind({})
Primary.args = {
  text: 'button',
  onClick: () => {},
  type: 0
}
