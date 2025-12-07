import React from 'react'
import Containar from '/src/components/Containar'
import Button from '/src/components/Button'
import { Link } from 'react-router-dom'
import Flex from '/src/components/Flex'
import { ImTruck } from "react-icons/im";
import Refresh from '/src/assets/icons/Refresh'




const Benner = () => {
  return (
   <div className="">
    <div className="bg-[url('/src/assets/BennerBg.jpg')] bg-no-repeat bg-cover bg-center py-[180px]">
    <Containar>
      <Flex>
        <div className="flex ">
          <h2 className='pr-2.5 text-[10x] '>01</h2>
          <div className="pr-1 py-7 bg-[#262626]"></div>
        </div>
      <div className=" pl-[135px]">
        <h3 className='font-dmSans font-bold text-[#262626] text-5xl'>Final Offer</h3>
        <p className='font-dmSans text-[16px] text-[#6D6D6D] py-12'>Up to <span className='font-dmSans font-bold text-[#262626] text-5xl'>50%</span> sale for all furniture items!</p>
        <Link to={'/shop'}><Button btnText={'Shop Now'}/></Link>
      </div>
      </Flex>
    </Containar>
   </div>
   <div className="bg-white border border-[#e7e2e2] py-7">
    <Containar>
      <Flex className={'justify-between '}>
        <div className="flex items-center">
          <h3 className='font-bold text-2xl text-[#262626] pr-4'>2</h3>
          <p className='text-[#6D6D6D] font-dmSans text-[16px]'>Two years warranty</p>
        </div>
        <div className="flex items-center">
         <div className="pr-4"><ImTruck /></div>
          <p className='text-[#6D6D6D] font-dmSans text-[16px]'> Free shipping</p>
        </div>
        <div className="flex items-center">
          <div className="pr-4"><Refresh/> </div>
          <div className="">
            <p className='text-[#6D6D6D] font-dmSans text-[16px]'> Return policy in 30 days</p>
          </div>
        </div>
      </Flex>
    </Containar>
   </div>
   </div>
   
  )
}

export default Benner