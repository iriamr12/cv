'use client'
import React, { useState } from 'react'
import AllTechnologies from './Technologies/AllTechnologies'
import FrontEndTechnologies from './Technologies/FrontEndTechnologies'
import BackEndTechnologies from './Technologies/BackEndTechnologies'
import DatabasesTechnologies from './Technologies/DatabasesTechnologies'
import ToolsTechnologies from './Technologies/ToolsTechnologies'

const Panel = () => {
    const [showAll, setShowAll] = useState(false);
    const [showFrontend, setShowFrontend] = useState(false);
    const [showBackend, setShowBackend] = useState(false);
    const [showDatabases, setShowDatabases] = useState(false);
    const [showTools, setShowTools] = useState(false);



    const handleAllClick = () => {
        setShowAll(true);
        setShowFrontend(false);
        setShowBackend(false);
        setShowDatabases(false);
        setShowTools(false);
    };

    const handleFrontendClick = () => {
        setShowAll(false);
        setShowFrontend(true);
        setShowBackend(false);
        setShowDatabases(false);
        setShowTools(false);
    };

    const handleBackendClick = () => {
        setShowAll(false);
        setShowFrontend(false);
        setShowBackend(true);
        setShowDatabases(false);
        setShowTools(false);
    };

    const handleDatabasesClick = () => {
        setShowAll(false);
        setShowFrontend(false);
        setShowBackend(false);
        setShowDatabases(true);
        setShowTools(false);
    };

    const handleToolsClick = () => {
        setShowAll(false);
        setShowFrontend(false);
        setShowBackend(false);
        setShowDatabases(false);
        setShowTools(true);
    };

    return (
        <div>
            <div className='grid grid-cols-5 gap-4'>
              <div>
                <button onClick={handleAllClick} className='bg-transparent w-24 h-10 mx-4 rounded border border-white text-white hover:bg-white hover:text-plain-dark-blue '>All</button>
            </div>
            <div>
                <button onClick={handleFrontendClick} className='bg-transparent w-24 h-10 mx-4 rounded border border-white text-white hover:bg-white hover:text-plain-dark-blue '>Front-end</button>
            </div>
            <div>
                <button onClick={handleBackendClick} className='bg-transparent w-24 h-10 mx-4 rounded border border-white text-white hover:bg-white hover:text-plain-dark-blue '>Back-end</button>
            </div>
            <div>
                <button onClick={handleDatabasesClick} className='bg-transparent w-24 h-10 mx-4 rounded border border-white text-white hover:bg-white hover:text-plain-dark-blue '>Databases</button>
            </div>
            <div>
                <button onClick={handleToolsClick} className='bg-transparent w-24 h-10 mx-4 rounded border border-white text-white hover:bg-white hover:text-plain-dark-blue '>Tools</button>
            </div>  
            </div>
            
        <div>
            {showAll && <AllTechnologies />}
            {showFrontend && <FrontEndTechnologies />}
            {showBackend && <BackEndTechnologies />}
            {showDatabases && <DatabasesTechnologies />}
            {showTools && <ToolsTechnologies />}
        </div>
            
        </div>
    );
}

export default Panel;
