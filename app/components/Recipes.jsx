'use client'
import React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { FaReact } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { SiMysql } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiPostman } from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";

const Recipes = () => {
     
    const [recipes, setRecipes] =useState(false);
    const router = useRouter()


    const handleChange = () => {
        setRecipes(true);
        router.push('/RecipesAppResume')
    }

  return (
    <button onClick={handleChange} className='border-solid'>
        <div className='w-width-custom rounded border border-plain-dark-blue bg-transparent text-plain-dark-blue hover:bg-plain-dark-blue hover:text-white'>
            <h3>Recipes-app</h3>
            <div className='grid grid-cols-3 gap-4 justify-center items-center mt-12 mb-10'>
                  <div className="flex justify-center items-center"><FaReact className="text-white w-8 h-8"/></div>
                  <div className="flex justify-center items-center"><IoLogoCss3 className="text-white w-8 h-8"/></div>
                  <div className="flex justify-center items-center"><SiPostman className="text-white w-8 h-8"/></div>
                  <div className="flex justify-center items-center"><SiMysql className="text-white w-8 h-8"/></div>
                  <div className="flex justify-center items-center"><SiExpress className="text-white w-8 h-8"/></div>
                  <div className="flex justify-center items-center"><FaNode className="text-white w-8 h-8"/></div>
                  <div className="flex justify-center items-center"><TbBrandVscode className="text-white w-8 h-8"/></div>
                  <div className="flex justify-center items-center"><IoLogoJavascript className="text-white w-8 h-8"/></div>
           </div>
      </div> 
    </button>
    
  )
}

export default Recipes