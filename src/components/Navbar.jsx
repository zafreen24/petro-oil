import React from 'react'
import Logo from "../assets/Logo.png"
import { RxCross1 } from "react-icons/rx";
import { PiChartBarHorizontalFill } from "react-icons/pi";
import {useState} from "react"

const Navbar = () => {
    let [show,setShow] = useState(false)

    let handleShow = ()=>{
        setShow(!show)
    }


  return (
    <nav className="bg-[#F40404] text-white py-6">
        <div className="px-3 mx-auto max-w-container lg:px-0">
            <div className="flex items-center justify-between ">
              <div className="">
                <img src={Logo} alt="logo" />
              </div>
              <div className="">
                <ul className={`lg:flex gap-x-4 font-pops font-semibold items-center absolute z-[50] top-0 left-0
                lg:static duration-700 ease-in-out ${show == true ? "bg-[peru]" : "bg-[red]" }`}>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Service</a></li>
                    <li><a href="#">Gallery</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a className='border-2 border-[#fff] p-4 rounded inline-block' href="#">Contact</a></li>
                    
                </ul>
              </div>
              <div className="lg:hidden" onClick={handleShow}>
                {show == true ?<RxCross1/> : <PiChartBarHorizontalFill/> }
              </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar