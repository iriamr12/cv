'use client'
import React from 'react'
import { TbUserSquareRounded } from "react-icons/tb";
import { PiPathFill } from "react-icons/pi";
import { FaCode } from "react-icons/fa6";
import { GrProjects } from "react-icons/gr";


const Paleta = () => {



  return (
    <div className="flex flex-col">
      <a href="#first-section">
        <button className="w-14 h-14 hover:w-16 hover:h-16 m-2 bg-dark-pomegranade rounded-full flex justify-center items-center"><TbUserSquareRounded className="text-white w-8 h-8"/></button>
      </a>
      <a href="#second-section">
        <button className="w-14 h-14 hover:w-16 hover:h-16 m-2 bg-plain-beige rounded-full flex justify-center items-center"><PiPathFill className="text-dark-pomegranade w-8 h-8"/></button>
      </a>
      <a href="#third-section">
        <button className="w-14 h-14 hover:w-16 hover:h-16 m-2 bg-plain-dark-blue rounded-full flex justify-center items-center"><FaCode className="text-white w-6 h-6"/></button>
      </a>
      <a href="#fourth-section">
        <button className="w-14 h-14 hover:w-16 hover:h-16 m-2 bg-plain-light-blue rounded-full flex justify-center items-center"><GrProjects className="text-plain-dark-blue w-6 h-6"/></button>
      </a>
        
       
        
        
    </div>
    
  )
}

export default Paleta