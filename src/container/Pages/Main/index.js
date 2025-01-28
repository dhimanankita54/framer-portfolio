import React, { useState } from 'react'
import Home from '../Home'
import About from '../About'
import Skills from '../Skills'
import Audio from '../../components/Audio'
import LinksNav from '../../components/ContentLinks'

const Main = () => {
    const [loaded, setLoaded] = useState(false);
    return (
        !loaded ?
            <div className='min-h-screen flex items-center justify-center'>
                <button
                    className='p-5 px-8 relative hover:bg-primary hover:text-black z-50 border border-primary rounded-full text-sm font-poppins uppercase font-medium tracking-[5px]'
                    onClick={() => {
                        setLoaded(true)
                    }}
                >
                    Click to Start
                </button>
            </div>
            :
            <div>
                <LinksNav />
                <Audio />
                <Home />
                <About />
                <Skills />
            </div>

    )
}

export default Main
