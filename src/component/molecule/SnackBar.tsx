const SnackBar: React.FC<SnackBarType> = ({ text }: SnackBarType) => {
  return <div>{text}</div>
}

export default SnackBar

export type SnackBarType = {
  text: string
  duration?: number // ms
}
