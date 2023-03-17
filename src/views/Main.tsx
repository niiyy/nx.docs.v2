import { useSideBarState, useSideBarValue } from '@/state/sidebar'
import React from 'react'
import { Installation } from './Installation'

const Main = () => {
  const data = useSideBarValue()

  return (
    <div className="views__wrapper">
      {data === 'installation' && <Installation />}
      <h1>{data?.uuid}</h1>
    </div>
  )
}

export { Main }
