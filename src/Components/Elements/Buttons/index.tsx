import { IButton } from './style'
import { ButtonProp } from './interface'
export default function Button({ children, ...props }: ButtonProp) {
  return (
    <IButton {...props}>
      {children}
    </IButton>
  )
}