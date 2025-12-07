import React from 'react'

const Button = ({btnText,className}) => {
  return (
    <button className={` py-5 px-14 bg-[#262626] text-white  text-[14px] font-bold cursor-pointer leading-2
${className}`}>{btnText}</button>
  )
}

export default Button