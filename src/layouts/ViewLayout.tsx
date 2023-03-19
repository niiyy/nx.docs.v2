import React, { ForwardedRef, forwardRef, PropsWithChildren } from 'react'

const ViewLayout = forwardRef(
  (props: PropsWithChildren, ref: ForwardedRef<HTMLElement>) => {
    const { children, ...rest } = props
    return (
      <section
        ref={ref}
        style={{ display: 'flex', flexDirection: 'column', gap: 20 }}
        {...rest}
      >
        {children}
      </section>
    )
  },
)

export default ViewLayout
