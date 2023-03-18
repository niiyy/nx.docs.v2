import { cls } from '@/utils/cls'
import React, {
  CSSProperties,
  forwardRef,
  HTMLAttributes,
  PropsWithChildren,
} from 'react'

export type ITypographyValidHSNumbers = 1 | 2 | 3 | 4 | 5 | 6

export type ITypographyValidHS = `h${ITypographyValidHSNumbers}`

export type ITypographyVariants = ITypographyValidHS | 'p' | 'span'

export interface ITypography {
  variant: ITypographyVariants
  className?: string
  type?: 'secondary' | 'primary'
  style?: Record<string | number | symbol, CSSProperties>
}

const Typography = forwardRef((props: PropsWithChildren<ITypography>) => {
  const { variant, children, className, type = 'primary', style } = props

  const _className = cls('typo', `typo__${variant}`, className, `type__${type}`)

  if (variant === 'h1') {
    return (
      <h1 style={style} className={_className}>
        {children}
      </h1>
    )
  }

  if (variant === 'h2') {
    return (
      <h2 style={style} className={_className}>
        {children}
      </h2>
    )
  }

  if (variant === 'h3') {
    return (
      <h3 style={style} className={_className}>
        {children}
      </h3>
    )
  }

  if (variant === 'h4') {
    return (
      <h4 style={style} className={_className}>
        {children}
      </h4>
    )
  }

  if (variant === 'h5') {
    return (
      <h5 style={style} className={_className}>
        {children}
      </h5>
    )
  }
  if (variant === 'h6') {
    return (
      <h6 style={style} className={_className}>
        {children}
      </h6>
    )
  }
  if (variant === 'p') {
    return (
      <p style={style} className={_className}>
        {children}
      </p>
    )
  }

  if (variant === 'span') {
    return (
      <span style={style} className={_className}>
        {children}
      </span>
    )
  }

  return null
})

export { Typography }
