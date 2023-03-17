import React, { forwardRef, PropsWithChildren } from 'react'

const ViewLayout = forwardRef((props: PropsWithChildren) => {
  const { children, ...rest } = props
  return (
    <section
      style={{ display: 'flex', flexDirection: 'column', gap: 5 }}
      {...rest}
    >
      {children}
    </section>
  )
})

export default ViewLayout
