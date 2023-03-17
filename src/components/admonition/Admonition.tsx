import React, { ForwardedRef, forwardRef, PropsWithChildren } from 'react'
import { Typography } from '../typography/Typography'

export type IAdmonitionVariants = 'error' | 'success' | 'info' | 'warn'

export interface IAdmonition {
  variant: IAdmonitionVariants
  title?: string
  content?: string
}

const Admonition = forwardRef(
  (props: IAdmonition, ref: ForwardedRef<HTMLDivElement>) => {
    const { title, content, variant } = props

    return (
      <div ref={ref} className={`admonition ${variant}`}>
        <Typography className="admonition__title" variant="h4">
          {title}
        </Typography>
        <Typography className="admonition__content" variant="span">
          {content}
        </Typography>
      </div>
    )
  },
)

export { Admonition }
