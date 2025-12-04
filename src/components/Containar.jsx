import React, { Children } from 'react'

const Containar = ({children,className}) => {
  return (
    <div className={`max-w-mContainar m-auto  ${className}`}>{children}</div>
  )
}

export default Containar