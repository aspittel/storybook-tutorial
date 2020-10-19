import React from 'react'
import './Button.css'

export default function Button ({ children, outline, size }) {
  let classes = ''
  if (outline) classes += 'outline '
  classes += size
  return (
    <button className={classes}>{children}</button>
  )
}
