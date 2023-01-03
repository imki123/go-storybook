import Button, { ButtonModel } from './Button'
import { Meta } from '@storybook/react'

export default {
  title: 'Design System/Button',
  component: Button,
} as Meta<ButtonModel>

export const Default = (args: ButtonModel) => <Button {...args} />
Default.args = {
  children: 'Default',
} as ButtonModel
export const Red = (args: ButtonModel) => <Button {...args} />
Red.args = {
  children: 'Red',
  background: 'red',
} as ButtonModel
