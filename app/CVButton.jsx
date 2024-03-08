import React from 'react'
import { useState } from 'react'

const CVButton = () => {
    const [cv, setCv] = useState(false)

    const handleChange = () => {
        setCv
    }

  return (
    <div>
       <button onClick={handleChange} className="flex items-center px-3 py-2 mt-10 w-64 rounded border border-plain-beige"><IoIosDownload className="w-8 h-8 mr-4 ml-6"/>Download my CV </button>
    </div>
  )
}

export default CVButton