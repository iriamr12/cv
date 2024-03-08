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
    const [books, setBooks] =useState(false);
    const router = useRouter()


    const handleRecipeChange = () => {
        setRecipes(true);
        router.push('/RecipesAppResume')
    }

    const handleBooksChange = () => {
      setBooks(true);
      router.push('/BooksAppResume')
    }

  return (
    <div className='grid grid-cols-2 gap-4'>
      <button /*onClick={handleRecipeChange}*/ className='border-solid'>

              <div className='w-width-custom rounded border border-plain-dark-blue bg-transparent text-plain-dark-blue hover:bg-plain-dark-blue hover:text-white'>
              <a href='https://github.com/iriamr12/recipes-app' target='_blank'>
                  <h3 className='relative top-4 right-28 font-bold'>Recipes-app</h3>
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
                </a>
            </div> 
          </button>
          <button /*onClick={handleBooksChange}*/className='border-solid'>
            <a href='https://github.com/iriamr12/-books-app' target='_blank'>
              <div className='w-width-custom rounded border border-plain-dark-blue bg-transparent text-plain-dark-blue hover:bg-plain-dark-blue hover:text-white'>
                                <h3 className='relative top-4 right-28 font-bold'>Books-app</h3>
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

            </a>
              
          </button>

    </div>
    
    
  )
}

export default Recipes