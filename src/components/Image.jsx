import React from 'react'

const Image = ({imgSrc,alt,className}) => {
  return (
    <img className={`${className}`} src={imgSrc} alt={alt} />
  )
}

export default Image