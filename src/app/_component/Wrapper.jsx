import React from 'react'

export default function Wrapper({children , className = ""}) {
  return (
    <div className={`max-w-screen-lg md:max-w-screen-xl mx-auto py-16 lg:px-0 px-8 ${className}`} >{children}</div>
  )
}
