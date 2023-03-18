import React, { ForwardedRef, forwardRef, PropsWithChildren } from 'react'
import { Typography } from '../typography/Typography'

export type IAdmonitionVariants = 'error' | 'success' | 'info' | 'warn'

export interface IAdmonition {
  variant: IAdmonitionVariants
  title?: string
}

const Admonition = forwardRef(
  (
    props: PropsWithChildren<IAdmonition>,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const { title, variant, children } = props

    return (
      <div ref={ref} className={`admonition ${variant}`}>
        <Typography className="admonition__title" variant="h4">
          {title}
        </Typography>
        <Typography className="admonition__content" variant="span">
          {children}
        </Typography>
      </div>
    )
  },
)

export { Admonition }
