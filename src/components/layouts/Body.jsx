import React from 'react'
import Containar from '/src/components/Containar'
import Flex from '/src/components/Flex'
import Image from '/src/components/Image'
import Body1 from '/src/assets/add1.jpg'
import Body2 from '/src/assets/BodyAd2.jpg'
import Body3 from '/src/assets/BodyAd3.jpg'
import Button from '/src/components/Button'
import { Link } from 'react-router-dom'

const Body = () => {
  return (
   <div className="">
   <Containar className={'py-[100px]'}>
     <div className="flex ">
        <div className=" pr-9 relative">
            <Image imgSrc={Body1}/>
            <div className="absolute top-[380px] left-[60px] ">
                <h4 className=' font-dmSans text-[39px] font-bold text-[#262626]'>Phones Sale</h4>
                <p className=' font-dmSans text-[16px] text-[#2626269d] pb-9'>Up to <samp className='font-dmSans text-[#262626] text-[39px] font-bold'>30%</samp> sale for all phones!</p>
                <Link to={'/shop'}><Button btnText={'Shop Now'}/></Link>
            </div>
    </div>
    <div className="">
        <div className="pb-9 relative">
            <Image imgSrc={Body2}/>
            <div className="absolute top-[30px] left-[30px] ">
                <h4 className=' font-dmSans text-[39px] font-bold text-[#262626] pb-5'>Phones Sale</h4>
                <p className=' font-dmSans text-[16px] text-[#2626269d] pb-9'>Up to <samp className='font-dmSans text-[#262626] text-[39px] font-bold'>30%</samp> sale for all phones!</p>
                <Link to={'/shop'}><Button btnText={'Shop Now'}/></Link>
            </div>
        </div>
        <div className="relative">
            <Image imgSrc={Body3}/>
            <div className="absolute top-[34px] left-[30px] ">
                <h4 className=' font-dmSans text-[39px] font-bold text-[#262626] pb-4'>Furniture Offer</h4>
                <p className=' font-dmSans text-[16px] text-[#2626269d] pb-8'>Up to <samp className='font-dmSans text-[#262626] text-[39px] font-bold'>50%</samp> sale for all furniture items!</p>
                <Link to={'/shop'}><Button btnText={'Shop Now'}/></Link>
            </div>
        </div>
    </div>
     </div>
   </Containar>
   </div>
  )
}

export default Body