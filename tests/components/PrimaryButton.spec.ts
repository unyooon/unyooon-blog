import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import PrimaryButton from '~/components/PrimaryButton.vue'

describe('PrimaryButton.vue', () => {
  it('linkプロップがない場合、ボタンをレンダリングする', () => {
    const wrapper = mount(PrimaryButton)
    expect(wrapper.find('button').exists()).toBe(true)
    expect(wrapper.find('a').exists()).toBe(false)
  })

  it('linkプロップがある場合、aタグをレンダリングする', () => {
    const wrapper = mount(PrimaryButton, {
      props: { link: '/home' },
    })
    expect(wrapper.find('button').exists()).toBe(false)
    expect(wrapper.find('a').exists()).toBe(true)
  })

  it('styleTypeプロップに応じて正しいクラスが適用される(fill)', () => {
    const wrapper = mount(PrimaryButton, {
      props: { styleType: 'fill' },
    })
    expect(wrapper.find('button').classes()).toContain('fill')
  })

  it('styleTypeプロップに応じて正しいクラスが適用される(outline)', () => {
    const wrapper = mount(PrimaryButton, {
      props: { styleType: 'outline' },
    })
    expect(wrapper.find('button').classes()).toContain('outline')
  })

  it('styleTypeプロップに応じて正しいクラスが適用される(flat)', () => {
    const wrapper = mount(PrimaryButton, {
      props: { styleType: 'flat' },
    })
    expect(wrapper.find('button').classes()).toContain('flat')
  })

  it('typeが"submit"でない場合、クリック時に"onClick"イベントを発火する', async () => {
    const wrapper = mount(PrimaryButton, {
      props: { type: 'button' },
    })
    await wrapper.find('button').trigger('click')
    expect(wrapper.emitted()).toHaveProperty('onClick')
  })

  it('typeが"submit"の場合、クリックしても"onClick"イベントを発火しない', async () => {
    const wrapper = mount(PrimaryButton, {
      props: { type: 'submit' },
    })
    await wrapper.find('button').trigger('click')
    expect(wrapper.emitted('onClick')).toBeUndefined()
  })

  it('loadingまたはdisabledがtrueで、typeが"submit"の場合、クリック時にデフォルト動作を抑制する', async () => {
    const wrapper = mount(PrimaryButton, {
      props: { type: 'submit', loading: true },
    })
    const clickEvent = { preventDefault: vi.fn() }
    await wrapper.find('button').trigger('click', clickEvent)
    expect(clickEvent.preventDefault).toHaveBeenCalled()
  })

  it('loadingまたはdisabledがtrueで、typeが"button"の場合、クリック時にデフォルト動作を抑制する', async () => {
    const wrapper = mount(PrimaryButton, {
      props: { type: 'button', loading: true },
    })
    const clickEvent = { preventDefault: vi.fn() }
    await wrapper.find('button').trigger('click', clickEvent)
    expect(clickEvent.preventDefault).toHaveBeenCalled()
  })

  it('loadingがtrueの場合、ローディングスピナーを表示する', () => {
    const wrapper = mount(PrimaryButton, {
      props: { loading: true },
    })
    expect(wrapper.find('.loading-spinner').exists()).toBe(true)
    expect(wrapper.find('div').text()).toBe('')
  })

  it('iconNameが指定されている場合、アイコンを表示する', () => {
    const wrapper = mount(PrimaryButton, {
      props: { iconName: 'edit' },
    })
    expect(wrapper.find('.primary-button__icon').exists()).toBe(true)
    expect(wrapper.find('.primary-button__icon').attributes('src')).not.toBe('')
  })

  it('activeプロップがtrueの場合、"active"クラスが適用される', () => {
    const wrapper = mount(PrimaryButton, {
      props: { active: true },
    })
    expect(wrapper.find('button').classes()).toContain('active')
  })

  it('disabledプロップがtrueの場合、"disabled"クラスが適用される', () => {
    const wrapper = mount(PrimaryButton, {
      props: { disabled: true },
    })
    expect(wrapper.find('button').classes()).toContain('disabled')
  })

  it('loadingプロップがtrueの場合、"loading"クラスが適用される', () => {
    const wrapper = mount(PrimaryButton, {
      props: { loading: true },
    })
    expect(wrapper.find('button').classes()).toContain('loading')
  })

  it('loadingがfalseの場合、正しいテキストを表示する', () => {
    const wrapper = mount(PrimaryButton, {
      props: { text: 'クリック' },
    })
    expect(wrapper.find('span').text()).toBe('クリック')
  })

  it('loadingがtrueの場合、テキストを表示しない', () => {
    const wrapper = mount(PrimaryButton, {
      props: { text: 'クリック', loading: true },
    })
    expect(wrapper.find('span').exists()).toBe(false)
  })

  it('widthとheightプロップが指定されている場合、スタイルに反映される', () => {
    const wrapper = mount(PrimaryButton, {
      props: { width: '200px', height: '50px' },
    })
    const style = wrapper.find('button').attributes('style')
    expect(style).toContain('width: 200px')
    expect(style).toContain('height: 50px')
  })
})
