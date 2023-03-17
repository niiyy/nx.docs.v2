import { cls } from '@/utils/cls'
import React, {
  ButtonHTMLAttributes,
  ForwardedRef,
  forwardRef,
  PropsWithChildren,
} from 'react'

export type IButtonTypes = 'primary' | 'secondary'

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  _type: IButtonTypes
}

const Button = forwardRef(
  (props: PropsWithChildren<IButton>, ref: ForwardedRef<HTMLButtonElement>) => {
    const { _type, className, children, ...rest } = props
    return (
      <button {...rest} ref={ref} className={cls(_type, className, 'btn')}>
        {children}
      </button>
    )
  },
)

export { Button }
