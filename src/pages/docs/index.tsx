import { SideBar } from '@/components/sidebar/SideBar'
import { useLoadExportedMethods } from '@/hooks/useLoadExportedMethods'
import { Main } from '@/views/Main'
import React from 'react'

const index = () => {
  useLoadExportedMethods()

  return (
    <div className="docs not__full">
      <SideBar />
      <div className="docs__content">
        <Main />
      </div>
    </div>
  )
}

export default index
