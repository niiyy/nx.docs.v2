import React, { SVGProps } from 'react'

export interface ILink extends SVGProps<SVGSVGElement> {
  _color?: string
}

const LinkIcon = (props: ILink) => {
  const { _color = '#303030', ...rest } = props

  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      width={25}
      {...rest}
    >
      <g id="arrow-up-right">
        <path
          id="Icon"
          stroke-linecap="round"
          stroke-linejoin="round"
          strokeWidth="2"
          d="M7 17L17 7M17 7H7M17 7V17"
          stroke={_color}
        ></path>
      </g>
    </svg>
  )
}

export { LinkIcon }
