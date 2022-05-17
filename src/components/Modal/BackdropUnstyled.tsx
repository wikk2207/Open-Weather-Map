import React from 'react'
import clsx from 'clsx'

const BackdropUnstyled = React.forwardRef<HTMLDivElement, { open?: boolean; className: string }>(
  (props, ref) => {
    const { open, className, ...other } = props
    return <div className={clsx({ 'MuiBackdrop-open': open }, className)} ref={ref} {...other} />
  }
)

export default BackdropUnstyled
