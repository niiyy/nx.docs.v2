import {
  useExportedMethodsValue,
  useSideBarState,
  useSideBarValue,
} from '@/state/sidebar'
import Link from 'next/link'
import React from 'react'
import { SideBarItem } from './SideBarItem'

const SideBar = () => {
  const methods = useExportedMethodsValue()
  const [value, setValue] = useSideBarState()

  return (
    <nav className="sidebar">
      <p
        onClick={() => setValue('installation')}
        className={`link ${value === 'installation' ? 'selected' : ''}`}
      >
        Installation
      </p>
      <p
        onClick={() => setValue('developement')}
        className={`link ${value === 'developement' ? 'selected' : ''}`}
      >
        Developpement
      </p>
      <SideBarItem items={[...methods]} name="API" />
    </nav>
  )
}

export { SideBar }
