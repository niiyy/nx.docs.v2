import Link from 'next/link'
import React, { HTMLAttributes } from 'react'
import { LinkIcon } from '../icons/Link'
import { Typography } from '../typography/Typography'

export interface ILinkCard extends HTMLAttributes<HTMLAnchorElement> {
  img?: any
  title: string
  description: string
  href: string
  imgBG?: string
}

const LinkCard = ({
  img,
  title,
  description,
  href,
  imgBG,
  ...rest
}: ILinkCard) => {
  return (
    <Link href={href} target="_blank" {...rest}>
      <div className="link__card">
        <div
          style={{
            backgroundColor: imgBG,
          }}
          className="left"
        >
          {img && img}
        </div>

        <div className="right">
          <Typography variant="h5">{title}</Typography>
          <Typography type="secondary" variant="span">
            {description}
          </Typography>
        </div>
      </div>
    </Link>
  )
}

export default LinkCard
