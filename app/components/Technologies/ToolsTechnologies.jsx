import React from 'react'
import { TbBrandVscode } from "react-icons/tb";
import { SiPostman } from "react-icons/si";

const ToolsTechnologies = () => {
  return (
    <div className='grid grid-cols-2 gap-2 justify-center items-center mt-12'>
        <div className="flex justify-center items-center"><TbBrandVscode className="text-white w-8 h-8"/></div>
        <div className="flex justify-center items-center"><SiPostman className="text-white w-8 h-8"/></div>
    </div>
  )
}

export default ToolsTechnologies