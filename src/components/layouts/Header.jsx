import React from 'react'
import Containar from '../Containar'
import { Link } from 'react-router-dom'
import Image from '../Image'
import Logo from '/src/assets/logo.png'
import Flex from '../Flex'
import MinusIcon from '/src/assets/icons/MinusIcon'
import { IoSearchSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { AiFillCaretDown } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";


const Header = () => {
  return (
    <>
    <Containar className={"py-8"}>
       <Flex className={""}>
       <div className="w-[40%]">
        <Link to={"/"}><Image imgSrc={Logo}/></Link>
       </div>
       <div className="">
        <ul className='flex gap-x-9'>
            <li className={'font-dmSans text-[#767676] text-[14px] hover:text-[#262626] hover:font-bold '}> <Link to={'/'}> Home</Link></li>
            <li className={'font-dmSans text-[#767676] text-[14px] hover:text-[#262626] hover:font-bold '}> <Link to={'/shop'}> Shop</Link></li>
            <li className={'font-dmSans text-[#767676] text-[14px] hover:text-[#262626] hover:font-bold '}> <Link to={'/about'}> About</Link></li>
            <li className={'font-dmSans text-[#767676] text-[14px] hover:text-[#262626] hover:font-bold '}> <Link to={'/contacts'}> Contacts</Link></li>
        </ul>
       </div>  
       </Flex>
    </Containar>
    <div className="bg-[#F5F5F3] py-6 border border-[#979797]">
        <Containar className={""}>
        <Flex className={"justify-between "}>
            <div className="flex items-center">
                <MinusIcon/>
                <p className='pl-3'> Shop by Category</p>
            </div>
            <div className="bg-white w-[595px] h-11 flex items-center px-5">
                <input type="text" name="" id="" placeholder='Search Products' className={"w-[540px]"} /><IoSearchSharp />
            </div>
            <div className="">
                <ul className='flex '>
                    <li><Link><FaUser /></Link></li>
                    <li className='pr-10 pl-1.5'><Link><AiFillCaretDown /></Link></li>
                    <li><Link to={'/shop'}><FaShoppingCart /></Link></li>
                </ul>
            </div>
        </Flex>
    </Containar>
    </div>
    </>
  )
}

export default Header