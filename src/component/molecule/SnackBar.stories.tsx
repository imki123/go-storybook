import { ComponentMeta } from '@storybook/react'
import { useSnackBar } from '../hook/useSnackBar'
import SnackBar, { SnackBarType } from './SnackBar'

const Story: ComponentMeta<typeof SnackBar> = {
  title: 'Goyoung2 Design System/molecule/SnackBar',
  component: SnackBar,
}
export default Story

export const Default = (args: SnackBarType) => {
  const { openSnackBar } = useSnackBar(args)

  openSnackBar()
  openSnackBar()
  openSnackBar()
  openSnackBar()

  return <div>스낵바!</div>
}
const args: SnackBarType = {
  text: '스낵바입니다 ^-^',
}
Default.args = args
