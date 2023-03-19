import { FlexColumn, FlexLayout } from '@/layouts/FlexLayout'
import Link from 'next/link'
import React, { useState } from 'react'
import { Chevron } from '../icons/Chevron'
import { Typography } from '../typography/Typography'

export interface IDropDown {
  title: string
  items: { href: string; title: string; description: string }[]
}

const DropDown = (props: IDropDown) => {
  const { title, items } = props

  const [isVisible, setIsVisible] = useState(false)
  const [timeout, setTimeoutValue] = useState<NodeJS.Timeout | null>(null)

  const handleClicked = () => {
    setIsVisible((preV) => !preV)
  }

  const handleToggle = () => {
    if (!isVisible) return
    const t = setTimeout(() => {
      setIsVisible(false)
    }, 1000)

    setTimeoutValue(t)
  }

  const handleRemoveTimeout = () => {
    if (!isVisible) return
    timeout && clearTimeout(timeout)
  }
  return (
    <div
      onMouseOver={handleRemoveTimeout}
      onMouseLeave={handleToggle}
      className={`dropdown ${isVisible ? '--active' : ''}`}
    >
      <FlexLayout onClick={handleClicked} className="dropdown__header">
        <Typography type="secondary" variant="h6">
          {title}
        </Typography>
        <Chevron />
      </FlexLayout>

      <FlexColumn className="dropdown__content">
        {items.map((_item) => (
          <Link className="dropdown__item" href={_item.href}>
            <Typography
              style={{
                fontWeight: 500,
              }}
              variant="h6"
            >
              {_item.title}
            </Typography>
            <Typography type="secondary" variant="span">
              {_item.description}
            </Typography>
          </Link>
        ))}
      </FlexColumn>
    </div>
  )
}

export { DropDown }
