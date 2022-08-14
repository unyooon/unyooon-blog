export default {
  title: 'DateTIp',
  component: 'DateTip'
}

export const DateTip = (arg, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
    <AtomsDateTip v-bind="$props" />
  `
})

export const Primary = DateTip.bind({})
Primary.args = {
  date: '2022-06-01'
}
