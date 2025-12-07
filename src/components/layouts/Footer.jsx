import React from "react";
import Containar from "../Containar";
import Flex from "../Flex";
import { Link } from "react-router-dom";
import Image from "/src/components/Image";
import FLogo from "../../assets/fLogo.png";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
  <div className="bg-[#F5F5F3] py-12">
    <Containar>
        <Flex className={"justify-between items-start"}>
          <div className="">
            <ul>
              <li className="font-dmSans text-[#262626] text-[16px] pb-7 font-bold">MENU</li>
              <li className={"font-dmSans text-[#6D6D6D] text-[14px] pb-5"}>
                <Link to={"/"}>Home</Link>
              </li>
              <li className={"font-dmSans text-[#6D6D6D] text-[14px] pb-5"}>
                <Link to={"/shop"}>Shop</Link>
              </li>
              <li className={"font-dmSans text-[#6D6D6D] text-[14px] pb-5"}>
                <Link to={"/about"}>About</Link>
              </li>
              <li className={"font-dmSans text-[#6D6D6D] text-[14px] pb-5"}>
                <Link to={"/contact"}>Contact</Link>
              </li>
              <li className={"font-dmSans text-[#6D6D6D] text-[14px] pb-5"}>
                <Link to={"/journal"}>Journal</Link>
              </li>
            </ul>
          </div>

          <div className="">
            <ul>
              <li className="font-dmSans text-[#262626] text-[16px] pb-7 font-bold">SHOP</li>
              <li className={"font-dmSans text-[#6D6D6D] text-[14px] pb-5"}>
                <Link to={"/"}>Category 1</Link>
              </li>
              <li className={"font-dmSans text-[#6D6D6D] text-[14px] pb-5"}>
                <Link to={"/"}>Category 2</Link>
              </li>
              <li className={"font-dmSans text-[#6D6D6D] text-[14px] pb-5"}>
                <Link to={"/"}>Category 3</Link>
              </li>
              <li className={"font-dmSans text-[#6D6D6D] text-[14px] pb-5"}>
                <Link to={"/"}>Category 4</Link>
              </li>
              <li className={"font-dmSans text-[#6D6D6D] text-[14px] pb-5"}>
                <Link to={"/"}>Category 5</Link>
              </li>
            </ul>
          </div>

          <div className="">
            <ul>
              <li className="font-dmSans text-[#262626] text-[16px] pb-7 font-bold">HELP</li>
              <li className={"font-dmSans text-[#6D6D6D] text-[14px] pb-5"}>
                <Link to={"/"}>Privacy Policy</Link>
              </li>
              <li className={"font-dmSans text-[#6D6D6D] text-[14px] pb-5"}>
                <Link to={"/"}>Terms & Conditions</Link>
              </li>
              <li className={"font-dmSans text-[#6D6D6D] text-[14px] pb-5"}>
                <Link to={"/"}>Special E-shop</Link>
              </li>
              <li className={"font-dmSans text-[#6D6D6D] text-[14px] pb-5"}>
                <Link to={"/"}>Shipping</Link>
              </li>
              <li className={"font-dmSans text-[#6D6D6D] text-[14px] pb-5"}>
                <Link to={"/"}>Secure Payments</Link>
              </li>
            </ul>
          </div>

          <div className="">
            <h5 className="font-bold text[#262626] text-[16px]">(052) 611-5711</h5>
            <h5 className="font-bold text[#262626] text-[16px] pb-7 pt-1.5">company@domain.com</h5>
            <p className="font-dmSans text-[#6D6D6D] text-[14px]">575 Crescent Ave. Quakertown, PA 18951</p>
          </div>
          <div className="pr-64">
            <Link to={'/'}><Image imgSrc={FLogo} /></Link>
          </div>
          
        </Flex>
        <Flex className={'pt-[70px] justify-between'}>
          <div className="flex gap-x-6 ">
            <FaFacebookF /> <FaLinkedinIn /> <FaInstagram />
          </div>
          <div className="">
            <p className="font-[14px] font-dmSans text-[#6D6D6D] leading-6">2020 Orebi Minimal eCommerce Figma Template by Adveits</p>
          </div>
        </Flex>
      </Containar>
  </div>
  );
};

export default Footer;
