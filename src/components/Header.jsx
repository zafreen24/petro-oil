import React from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { LuPhoneCall } from "react-icons/lu";
import { FaFacebookF,FaTwitter,FaLinkedinIn,FaInstagram } from "react-icons/fa";

const Header = () => {
  return (
   <header className="bg-[#222] text-white py-3 border-b-2 border-[#FFB800]">
     <div className='max-w-container mx-auto '>
        <div className="lg:flex items-center">
        <div className="lg:w-1/5 w-full">
            <div className="flex items-center justify-center lg:justify-center gap-x-2">
            <MdOutlineEmail/>
            <p className='font-pops font-normal'>mail@yourcompany.com</p>
            </div>
        </div>
        <div className="lg:1/5 w-full">
            <div className="flex items-center justify-center lg:justify-center gap-x-2">
            <LuPhoneCall/>
            <p className='font-pops font-normal'>+896 120 5889 (Toll free)</p>
            </div>
        </div>
        <div className="lg:3/5 w-full lg:pt-0 pt-2">
           <div className="flex lg:justify-end justify-center gap-x-4">
           <FaFacebookF/>
           <FaTwitter/>
           <FaLinkedinIn/>
           <FaInstagram/>
           </div>
        </div>
        </div>
    </div>
   </header>
  )
}

export default Header