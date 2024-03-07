import React from 'react'
import { FaReact } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { SiNextdotjs } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";

const FrontEndTechnologies = () => {
  return (
    <div className='grid grid-cols-3 gap-4 justify-center items-center mt-12'>
        <div className="flex justify-center items-center"><FaReact className="text-white w-8 h-8"/></div>
        <div className="flex justify-center items-center"><SiNextdotjs className="text-white w-8 h-8"/></div>
        <div className="flex justify-center items-center"><IoLogoCss3 className="text-white w-8 h-8"/></div>
        <div className="flex justify-center items-center"><SiTailwindcss className="text-white w-8 h-8"/></div>
        <div className="flex justify-center items-center"><IoLogoJavascript className="text-white w-8 h-8"/></div>
  </div>
  )
}

export default FrontEndTechnologies