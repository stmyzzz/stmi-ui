import React from 'react'
import { cleanup, fireEvent, render, RenderResult } from '@testing-library/react'
import Menu, { MenuProps } from './menu'
import MenuItem from './menuItem'
const testProps: MenuProps = {
  defaultIndex: 0,
  onSelect: jest.fn(),
  className: 'test',
}

const testVerProps: MenuProps = {
  defaultIndex: 0,
  mode: 'vertical',
}

const commonMenu = (props: MenuProps) => {
  return (
    <Menu {...props}>
      <MenuItem>
        active
      </MenuItem>
      <MenuItem disabled>
        disabled
      </MenuItem>
      <MenuItem>
        link3
      </MenuItem>
    </Menu>
  )
}
let wrapper: RenderResult, menuElement: HTMLElement, activeElement: HTMLElement, disabledElement: HTMLElement
describe('test menu', () => {
  beforeEach(() => {
    wrapper = render(commonMenu(testProps))
    menuElement = wrapper.getByTestId('test-menu')
    activeElement = wrapper.getByText('active')
    disabledElement = wrapper.getByText('disabled')
  })
  it('t1', () => {
    expect(menuElement).toBeInTheDocument()
    expect(menuElement).toHaveClass('dc-menu test')
    expect(menuElement.getElementsByTagName('li').length).toEqual(3)
    expect(activeElement).toHaveClass('menu-item is-active')
    expect(disabledElement).toHaveClass('menu-item is-disabled')
  })
  it('t2', () => {
    const thirdItem = wrapper.getByText('link3')
    fireEvent.click(thirdItem)
    expect(thirdItem).toHaveClass('is-active')
    expect(activeElement).not.toHaveClass('is-active')
    expect(testProps.onSelect).toHaveBeenCalledWith(2)
    fireEvent.click(disabledElement)
    expect(disabledElement).not.toHaveClass('is-active')
    expect(testProps.onSelect).not.toHaveBeenCalledWith(1)
  })
  it('t3', () => {
    cleanup()
    const wrapper = render(commonMenu(testVerProps))
    const menuElement = wrapper.getByTestId('test-menu')
    expect(menuElement).toHaveClass('menu-vertical')
  })
})