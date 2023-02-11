import { ComponentMeta } from '@storybook/react'
import { useSnackBar } from './useSnackBar'
import SnackBar, { SnackBarType } from './SnackBar'
import Button from '../atom/Button'

const Story: ComponentMeta<typeof SnackBar> = {
  title: 'Goyoung2 Design System/molecule/SnackBar',
  component: SnackBar,
}
export default Story

export const Default = (args: SnackBarType) => {
  const { openSnackBar } = useSnackBar(args)
  return (
    <>
      <Button onClick={openSnackBar}>스낵바 열기</Button>
      {/* emotion 스타일을 포함시키기 위해 App내에 한번은 SnackBar가 렌더되어야 함 */}
      <SnackBar text='' />
    </>
  )
}
const args: SnackBarType = {
  text: '스낵바입니다 ^-^',
}
Default.args = args
