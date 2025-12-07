import React from 'react'
import Containar from '/src/components/Containar'
import Image from '/src/components/Image'
import BodyAd2 from '/src/assets/bAD2.jpg'
import Button from '/src/components/Button'
import { Link } from 'react-router-dom'

const BodyAD2 = () => {
  return (
    <>
    <Containar className={'py-[100px]'}>
        <div className="">
            <div className="relative">
                <Image imgSrc={BodyAd2}/>
                <div className="absolute top-7 left-[600px]">
                    <h4 className='font-bold text-[#262626] text-[39px] font-dmSans pb-11'>Phone of the year</h4>
                    <p className=' text-[#262626] text-[16px] font-dmSans pb-12 w-[511px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry orem Ipsum..</p>
                    <Link to={'/shop'}><Button btnText={'Shop Now'}/></Link>
                </div>
            </div>
        </div>
    </Containar>
    </>
  )
}

export default BodyAD2