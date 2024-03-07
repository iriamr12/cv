import React from 'react'
import { SiExpress } from "react-icons/si";
import { FaNode } from "react-icons/fa";

const BackEndTechnologies = () => {
  return (
    <div className='grid grid-cols-2 gap-4 justify-center items-center mt-12'>        
        <div className="flex justify-center items-center"><SiExpress className="text-white w-8 h-8"/></div>
        <div className="flex justify-center items-center"><FaNode className="text-white w-8 h-8"/></div>
    </div>
  )
}

export default BackEndTechnologies