import React, { SVGProps } from 'react'

export interface IChevron extends SVGProps<SVGSVGElement> {
  _color?: string
}

const Chevron = (props: IChevron) => {
  const { _color = '#303030', ...rest } = props

  return (
    <svg
      width="8"
      height="14"
      viewBox="0 0 8 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M1 1L7 7L1 13"
        stroke={_color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export { Chevron }
