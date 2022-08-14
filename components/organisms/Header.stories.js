export default {
  title: 'Header',
  component: 'Header',
  argType: {}
}

export const Header = (arg, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
    <OrganismsHeader />
  `,
})
