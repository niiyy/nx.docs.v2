import { useSideBarState, useSideBarValue } from '@/state/sidebar'
import Link from 'next/link'
import React, { HTMLAttributes, useState } from 'react'
import { Chevron } from '../icons/Chevron'

export interface ISideBarItem {
  name: string
  href?: string
  items?: ISideBarItem[]
  itr?: number
}

export type ISubItem = HTMLAttributes<HTMLDivElement> &
  Required<Pick<ISideBarItem, 'name' | 'href'>> & {
    uuid: string
  }
const SubItem = (data: ISubItem) => {
  const [value, setValue] = useSideBarState()

  const handleSwitchView = () => {
    setValue({ ...data, __type: 'method' })
  }

  return (
    <p
      onClick={handleSwitchView}
      className={`subitem link ${value?.uuid === data.uuid ? 'selected' : ''}`}
    >
      {data.name}
    </p>
  )
}

const SideBarItem = (props: ISideBarItem) => {
  const { name, items, itr = 0 } = props

  const [isOpen, setIsOpen] = useState(true)

  const renderItems = (items: ISideBarItem[]) => {
    return items.map((item, idx) => {
      if (item.items && item.items.length > 0) {
        return <SideBarItem key={idx} {...(item as ISubItem)} itr={idx} />
      }

      return <SubItem key={idx} {...(item as ISubItem)} />
    })
  }

  const handleToggleVisibility = () => {
    setIsOpen((prevV) => !prevV)
  }

  return (
    <div className={`sidebar__item ${isOpen ? '--open' : '--close'}`}>
      <header onClick={handleToggleVisibility} className="item__header">
        <p className="item__title">{name}</p>
        <Chevron style={isOpen ? { rotate: '90deg' } : {}} />
      </header>
      <div style={{ marginLeft: itr + 7 }} className="item__items">
        {items && renderItems(items)}
      </div>
    </div>
  )
}

export { SideBarItem }
