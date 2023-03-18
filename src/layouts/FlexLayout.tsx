import React, { HTMLAttributes, PropsWithChildren } from 'react'

export interface IFlexLayout extends HTMLAttributes<HTMLDivElement> {}

const FlexColumn = (props: PropsWithChildren<IFlexLayout>) => {
  const { children, style, ...rest } = props
  return (
    <FlexLayout {...rest} style={{ ...style, flexDirection: 'column' }}>
      {children}
    </FlexLayout>
  )
}

const FlexLayout = (props: PropsWithChildren<IFlexLayout>) => {
  const { children, style, ...rest } = props
  return (
    <div {...rest} style={{ ...style, display: 'flex' }}>
      {children}
    </div>
  )
}

export { FlexColumn, FlexLayout }
