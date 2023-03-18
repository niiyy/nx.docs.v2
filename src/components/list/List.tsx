import { cls } from '@/utils/cls'
import React, { forwardRef, HTMLAttributes, ReactNode } from 'react'

export interface IList extends HTMLAttributes<HTMLUListElement> {
  children: ReactNode[]
}

const List = forwardRef((props: IList) => {
  const { children, className, ...rest } = props
  return (
    <ul {...rest} className={cls(`list`, className)}>
      {React.Children.map(children, (child) => {
        return <li>{child}</li>
      })}
    </ul>
  )
})

export { List }
