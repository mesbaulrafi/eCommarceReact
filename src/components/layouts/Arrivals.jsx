import React from 'react'
import Containar from '/src/components/Containar'
import Flex from '/src/components/Flex'
import Image from '../Image'
import nweArr1 from '/src/assets/ap1.jpg'
import nweArr2 from '/src/assets/nweArr2.jpg'
import nweArr3 from '/src/assets/nweArr3.jpg'
import nweArr4 from '/src/assets/nweArr4.jpg'
import { TbRefresh } from "react-icons/tb";
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";


const Arrivals = () => {
  return (
    <>
    <Containar className={"py-8 "}>
        <h2 className='font-dmSans text-[39px] font-bold text-[#262626] pb-14'>New Arrivals</h2>
        <Flex className={'justify-between gap-x-10'}>
            
        {/* New Fast  */}
        <div className="">
            <Flex>
                <div className="relative group cursor-pointer">
               <Image imgSrc={nweArr1} className={''} />
               <div className="bg-black py-2 px-5 text-white absolute top-5 left-5">
                    <p className=''>New</p>
                </div>
                <div className="absolute top-[153px] pb-2 pt-7 pl-[140px] left-0 bg-white w-[300px] opacity-0 group-hover:opacity-90 ">
                    <p className='text-[#767676] hover:text-[#262626] hover:font-bold text-[16px] flex items-center gap-x-3.5 text-right'>Add to Wish List<FaHeart /></p>
                    <p className='text-[#767676] hover:text-[#262626] hover:font-bold text-[16px] flex items-center  text-right py-5'>Compare <TbRefresh /></p>
                    <p className='text-[#767676] hover:text-[#262626] hover:font-bold text-[16px] flex items-center  text-end'>Add to Cart <FaShoppingCart /></p>
                </div>
            </div>
            </Flex>
            <div className="flex pt-5">
                <div className=""><p className='font-bold font-dmSans text-[#262626] text-[20px]'>Basic Crew Neck Tee</p></div>
                <div className=""><p className='font-dmSans text-[#767676] text-[16px] pl-10'>$44.00</p></div>
            </div>
            <div className=""><p className='font-dmSans text-[#767676] text-[16px] pt-5'>Black</p></div>
        </div>

        {/* New 2nd */}
        <div className="">
            <Flex>
                <div className="relative group cursor-pointer">
               <Image imgSrc={nweArr2} className={''} />
               <div className="bg-black py-2 px-5 text-white absolute top-5 left-5">
                    <p className=''>New</p>
                </div>
                <div className="absolute top-[153px] pb-2 pt-7 pl-[140px] left-0 bg-white w-[300px] opacity-0 group-hover:opacity-90 ">
                    <p className='text-[#767676] hover:text-[#262626] hover:font-bold text-[16px] flex items-center gap-x-3.5 text-right'>Add to Wish List<FaHeart /></p>
                    <p className='text-[#767676] hover:text-[#262626] hover:font-bold text-[16px] flex items-center  text-right py-5'>Compare <TbRefresh /></p>
                    <p className='text-[#767676] hover:text-[#262626] hover:font-bold text-[16px] flex items-center  text-end'>Add to Cart <FaShoppingCart /></p>
                </div>
            </div>
            </Flex>
            <div className="flex pt-5">
                <div className=""><p className='font-bold font-dmSans text-[#262626] text-[20px]'>Basic Crew Neck Tee</p></div>
                <div className=""><p className='font-dmSans text-[#767676] text-[16px] pl-10'>$44.00</p></div>
            </div>
            <div className=""><p className='font-dmSans text-[#767676] text-[16px] pt-5'>Black</p></div>
        </div>

        {/* New 3rd */}
        <div className="">
            <Flex>
                <div className="relative group cursor-pointer">
               <Image imgSrc={nweArr3} className={''} />
               <div className="bg-black py-2 px-5 text-white absolute top-5 left-5">
                    <p className=''>New</p>
                </div>
                <div className="absolute top-[153px] pb-2 pt-7 pl-[140px] left-0 bg-white w-[300px] opacity-0 group-hover:opacity-90 ">
                    <p className='text-[#767676] hover:text-[#262626] hover:font-bold text-[16px] flex items-center gap-x-3.5 text-right'>Add to Wish List<FaHeart /></p>
                    <p className='text-[#767676] hover:text-[#262626] hover:font-bold text-[16px] flex items-center  text-right py-5'>Compare <TbRefresh /></p>
                    <p className='text-[#767676] hover:text-[#262626] hover:font-bold text-[16px] flex items-center  text-end'>Add to Cart <FaShoppingCart /></p>
                </div>
            </div>
            </Flex>
            <div className="flex pt-5">
                <div className=""><p className='font-bold font-dmSans text-[#262626] text-[20px]'>Basic Crew Neck Tee</p></div>
                <div className=""><p className='font-dmSans text-[#767676] text-[16px] pl-10'>$44.00</p></div>
            </div>
            <div className=""><p className='font-dmSans text-[#767676] text-[16px] pt-5'>Black</p></div>
        </div>

        {/* new 4th */}
        <div className="">
            <Flex>
                <div className="relative group cursor-pointer">
               <Image imgSrc={nweArr4} className={''} />
               <div className="bg-black py-2 px-5 text-white absolute top-5 left-5">
                    <p className=''>New</p>
                </div>
                <div className="absolute top-[153px] pb-2 pt-7 pl-[140px] left-0 bg-white w-[300px] opacity-0 group-hover:opacity-90 ">
                    <p className='text-[#767676] hover:text-[#262626] hover:font-bold text-[16px] flex items-center gap-x-3.5 text-right'>Add to Wish List<FaHeart /></p>
                    <p className='text-[#767676] hover:text-[#262626] hover:font-bold text-[16px] flex items-center  text-right py-5'>Compare <TbRefresh /></p>
                    <p className='text-[#767676] hover:text-[#262626] hover:font-bold text-[16px] flex items-center  text-end'>Add to Cart <FaShoppingCart /></p>
                </div>
            </div>
            </Flex>
            <div className="flex pt-5">
                <div className=""><p className='font-bold font-dmSans text-[#262626] text-[20px]'>Basic Crew Neck Tee</p></div>
                <div className=""><p className='font-dmSans text-[#767676] text-[16px] pl-10'>$44.00</p></div>
            </div>
            <div className=""><p className='font-dmSans text-[#767676] text-[16px] pt-5'>Black</p></div>
        </div>
        </Flex>
    </Containar>
    </>
  )
}

export default Arrivals 
