import React from 'react'
import { SiMysql } from "react-icons/si";
import { SiMongodb } from 'react-icons/si';
import { SiMongoose } from 'react-icons/si';


const DatabasesTechnologies = () => {
  return (
    <div className='grid grid-cols-3 gap-4 justify-center items-center mt-12'>
<div className="flex justify-center items-center"><SiMongodb className="text-white w-8 h-8"/></div> 
<div className="flex justify-center items-center"><SiMongoose className="text-white w-8 h-8"/></div>
<div className='grid justify-center items-center'><SiMysql className="text-white w-8 h-8"/></div>
    </div>
  )
}

export default DatabasesTechnologies