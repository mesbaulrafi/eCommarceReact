import React from 'react'
import Containar from '/src/components/Containar'
import Button from '/src/components/Button'
import { Link } from 'react-router-dom'
import { RxCaretRight } from "react-icons/rx";
import Flex from '/src/components/Flex';
import Image from '../Image';
import AboutImg1 from '/src/assets/About1.jpg'
import AboutImg2 from '/src/assets/About2.jpg'
import JuriImg from '/src/assets/Juri.jpg'

const About = () => {
  return (
   <>
   <Containar className={'py-14'}>
    <div className="">
      <h2 className='font-bold font-dmSans text-[49px] text-[#262626]'>About</h2>
      <div className="flex ">
        <Link to={'/home'}><p className='font-dmSans text-[#767676] flex items-center'>Home <RxCaretRight /></p></Link>
        <Link to={''}><p className='font-dmSans text-[#767676]'>About</p></Link>
      </div>
    </div>
    <Flex className={'py-[100px] gap-x-8'}>
      <div className="relative">
        <Image imgSrc={AboutImg1}/>
        <div className="absolute top-[550px] left-[230px]">
          <Button btnText={'Our Brands'}/>
        </div>
      </div>

      <div className="relative">
        <Image imgSrc={AboutImg2}/>
        <div className="absolute top-[550px] left-[230px]">
          <Button btnText={'Our Brands'}/>
        </div>
      </div>
      
    </Flex>
    <div className="">
      <p className='font-dmSans text-[35px] text-[#262626] leading-[52px] pb-[120px]'>Orebi is one of the world’s leading ecommerce brands and is internationally recognized for celebrating the essence of classic Worldwide cool looking style.</p>
    </div>
    <Flex className={'pb-8'}>
      <div className="">
        <h4 className='text-[#262626] font-bold text-[25px] pb-5'>Our Vision</h4>
        <p className='text-[#767676] text-[16px] w-[506px] '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book.</p>
      </div>
      <div className="">
        <h4 className='text-[#262626] font-bold text-[25px] pb-5'>Our Story</h4>
        <p className='text-[#767676] text-[16px] w-[506px] '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.</p>
      </div>
      <div className="">
        <h4 className='text-[#262626] font-bold text-[25px] pb-5'>Our Brands</h4>
        <p className='text-[#767676] text-[16px] w-[506px] '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
      </div>
    </Flex>
   </Containar>
   </>
  )
}

export default About