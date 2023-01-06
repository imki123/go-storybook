import Button, { ButtonModel } from './Button'
import { ComponentMeta } from '@storybook/react'

const Story: ComponentMeta<typeof Button> = {
  title: 'Goyoung2 Design System/atom/Button',
  component: Button,
}
export default Story

export const Primary = (args: ButtonModel) => <Button {...args} />
const args: ButtonModel = {
  buttonType: 'Primary',
  children: 'Primary',
}
Primary.args = args

export const Secondary = (args: ButtonModel) => <Button {...args} />
const args2: ButtonModel = {
  buttonType: 'Secondary',
  children: 'Secondary',
}
Secondary.args = args2
